// Student->revaluation
import React, { useState } from "react";
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

// Define types for the revaluation request form
interface RevaluationFormValues {
  studentId: string;
  reason: string;
}

// Define types for revaluation request status
interface RevaluationRequest {
  id: string;
  subject: string; // Reused for studentId display
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

  const onSubmit = (data: RevaluationFormValues) => {
    const newRequest: RevaluationRequest = {
      id: (requests.length + 1).toString(),
      subject: `Student ID: ${data.studentId}`,
      date: new Date().toLocaleDateString(),
      status: "Pending",
    };

    setRequests([newRequest, ...requests]);

    toast.success("Revaluation request submitted successfully");

    form.reset();
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

  return (
    <>
      <Helmet>
        <title>Revaluation</title>
      </Helmet>

      <div className="space-y-6">
        <h1 className="text-3xl font-bold tracking-tight">Revaluation Requests</h1>

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
                          <Input placeholder="Enter your Student ID" {...field} />
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
              <CardTitle>Revaluation Status</CardTitle>
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
                    
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {requests.map((request) => (
                    <TableRow key={request.id}>
                      <TableCell>{request.subject}</TableCell>
                      <TableCell>{request.date}</TableCell>
                      <TableCell>{getStatusBadge(request.status)}</TableCell>
                      <TableCell className="text-right">
                        
                      </TableCell>
                    </TableRow>
                  ))}
                  {requests.length === 0 && (
                    <TableRow>
                      <TableCell colSpan={4} className="text-center py-4 text-muted-foreground">
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
