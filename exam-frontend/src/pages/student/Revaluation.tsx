import React, { useState, useEffect } from "react"; // Added useEffect for fetching data
import { Helmet } from "react-helmet";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Badge } from "@/components/ui/badge";
import { toast } from "sonner";
import { useForm } from "react-hook-form";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import axios from "axios"; // Added axios for API calls

// Define types for the revaluation request form
interface RevaluationFormValues {
  studentId: string;
  reason: string;
}

// Define types for revaluation request status
interface RevaluationRequest {
  id: string;
  subject: string; // Maps to studentId for display
  date: string;
  status: "Pending" | "Approved" | "Rejected";
  result?: string;
  comments?: string;
}

const Revaluation = () => {
  const [requests, setRequests] = useState<RevaluationRequest[]>([]);
  const form = useForm<RevaluationFormValues>({
    defaultValues: {
      studentId: "",
      reason: "",
    },
  });

  // Backend API base URL (adjust as needed)
  const API_post = "http://localhost:8080/reval/submit";
  const API_get = "http://localhost:8080/reval/all";

  // Fetch revaluation requests when component mounts
  const fetchRequests = async () => {
    try {
      const response = await axios.get(API_get);
      // Map backend data to frontend format
      const mappedRequests: RevaluationRequest[] = response.data.map(
        (req: any) => ({
          id: req.requestID.toString(),
          subject: `${req.studentId}`,
          date: new Date(req.requestDate).toLocaleDateString(),
          status: req.status,
          result: req.result,
          comments: req.revalDescription, // Assuming reason is stored as comments
        })
      );
      setRequests(mappedRequests);
    } catch (error) {
      console.error("Error fetching revaluation requests:", error);
      toast.error("Failed to fetch revaluation requests");
    }
  };

  useEffect(() => {
    fetchRequests(); // Fetch requests once when the component mounts

    // Optional: Add polling to refresh the data periodically
    const interval = setInterval(fetchRequests, 5000); // Refresh every 5 seconds
    return () => clearInterval(interval); // Clear interval on component unmount
  }, []);

  const onSubmit = async (data: RevaluationFormValues) => {
    try {
      // Send POST request to backend
      const response = await axios.post(API_post, {
        studentId: data.studentId,
        revalDescription: data.reason,
      });
      // Create new request object from response
      const newRequest: RevaluationRequest = {
        id: response.data.requestID.toString(),
        subject: `Student ID:${data.studentId}`,
        date: new Date(response.data.requestDate).toLocaleDateString(),
        status: response.data.status,
        comments: response.data.revalDescription,
      };
      setRequests([newRequest, ...requests]);
      toast.success("Revaluation request submitted successfully");
      form.reset();
    } catch (error) {
      console.error("Error submitting revaluation request:", error);
      toast.error("Failed to submit revaluation request");
    }
  };

  const getStatusBadge = (status: string) => {
    switch (status) {
      case "Pending":
        return (
          <Badge className="bg-yellow-100 text-yellow-800 hover:bg-yellow-100 border-none">
            {status}
          </Badge>
        );
      case "Approved":
        return (
          <Badge className="bg-green-100 text-green-800 hover:bg-green-100 border-none">
            {status}
          </Badge>
        );
      case "Rejected":
        return (
          <Badge className="bg-red-100 text-red-800 hover:bg-red-100 border-none">
            {status}
          </Badge>
        );
      default:
        return <Badge>{status}</Badge>;
    }
  };

  const viewRequestDetails = (id: string) => {
    const request = requests.find((req) => req.id === id);
    if (request) {
      toast.info(`Request Details for ${request.subject}`, {
        description: request.comments || "No additional details available",
      });
    }
  };

  const updateRequestStatus = async (id: string, status: string) => {
    try {
      const response = await axios.put(
        `http://localhost:8080/reval/status/${id}`,
        null,
        { params: { status } }
      );
      if (response.data) {
        // After status update, refetch the requests
        fetchRequests();
        toast.success("Request status updated successfully");
      }
    } catch (error) {
      console.error("Error updating request status:", error);
      toast.error("Failed to update request status");
    }
  };

  return (
    <>
      <Helmet>
        <title>Revaluation</title>
      </Helmet>

      <div className="space-y-6">
        <h1 className="text-3xl font-bold tracking-tight">
          Revaluation Requests
        </h1>

        <div className="grid gap-6 md:grid-cols-2">
          <Card>
            <CardHeader>
              <CardTitle>Submit Revaluation Request</CardTitle>
              <CardDescription>
                Fill out the form to request revaluation for your exam paper
              </CardDescription>
            </CardHeader>
            <Form {...form}>
              <form onSubmit={form.handleSubmit(onSubmit)}>
                <CardContent className="space-y-4">
                  <FormField
                    control={form.control}
                    name="studentId"
                    render={({ field }) => (
                      <FormItem className="space-y-2">
                        <FormLabel>Student ID</FormLabel>
                        <FormControl>
                          <Input
                            placeholder="Enter your Student ID"
                            {...field}
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={form.control}
                    name="reason"
                    render={({ field }) => (
                      <FormItem className="space-y-2">
                        <FormLabel>Reason for Revaluation</FormLabel>
                        <FormControl>
                          <Textarea
                            placeholder="Explain why you're requesting revaluation"
                            className="min-h-[100px]"
                            {...field}
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </CardContent>
                <CardFooter>
                  <Button type="submit" className="w-full">
                    Submit Request
                  </Button>
                </CardFooter>
              </form>
            </Form>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Check Status</CardTitle>
              <CardDescription>
                Track the status of your revaluation requests
              </CardDescription>
            </CardHeader>
            <CardContent>
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>Student ID</TableHead>
                    <TableHead>Date</TableHead>
                    <TableHead>Status</TableHead>
                    {/* <TableHead>Action</TableHead> */}
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {requests.map((request) => (
                    <TableRow key={request.id}>
                      <TableCell>{request.subject}</TableCell>
                      <TableCell>{request.date}</TableCell>
                      <TableCell>{getStatusBadge(request.status)}</TableCell>
                      <TableCell>
                        {request.status === "Pending" && (
                          <Button
                            onClick={() =>
                              updateRequestStatus(request.id, "Approved")
                            }
                            className="bg-green-500 text-white"
                          >
                            Approve
                          </Button>
                        )}
                        {request.status === "Pending" && (
                          <Button
                            onClick={() =>
                              updateRequestStatus(request.id, "Rejected")
                            }
                            className="bg-red-500 text-white"
                          >
                            Reject
                          </Button>
                        )}
                      </TableCell>
                    </TableRow>
                  ))}
                  {requests.length === 0 && (
                    <TableRow>
                      <TableCell
                        colSpan={4}
                        className="text-center py-4 text-muted-foreground"
                      >
                        No revaluation requests found.
                      </TableCell>
                    </TableRow>
                  )}
                </TableBody>
              </Table>
            </CardContent>
          </Card>
        </div>
      </div>
    </>
  );
};

export default Revaluation;
