
import React, { useState } from "react";
import { Helmet } from "react-helmet";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
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
import { useForm, Controller } from "react-hook-form";
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
  subject: string;
  examType: string;
  reason: string;
}

// Define types for revaluation request status
interface RevaluationRequest {
  id: string;
  subject: string;
  date: string;
  status: "Pending" | "Approved" | "Rejected";
  result?: string;
  comments?: string;
}

const Revaluation = () => {
  // Sample revaluation requests data
  const [requests, setRequests] = useState<RevaluationRequest[]>([
    {
      id: "1",
      subject: "Computer Networks",
      date: "12/05/2023",
      status: "Pending",
    },
    {
      id: "2",
      subject: "Data Structures",
      date: "05/04/2023",
      status: "Approved",
      result: "Marks increased from 72 to 78",
      comments: "Calculation error found in Q3"
    },
    {
      id: "3",
      subject: "Database Systems",
      date: "22/03/2023",
      status: "Rejected",
      comments: "No discrepancy found in evaluation"
    },
  ]);

  // Setup form
  const form = useForm<RevaluationFormValues>({
    defaultValues: {
      subject: "",
      examType: "",
      reason: "",
    },
  });

  // Form submission handler
  const onSubmit = (data: RevaluationFormValues) => {
    // Create a new request
    const newRequest: RevaluationRequest = {
      id: (requests.length + 1).toString(),
      subject: data.subject,
      date: new Date().toLocaleDateString(),
      status: "Pending",
    };

    // Add to requests list
    setRequests([newRequest, ...requests]);

    // Show success toast
    toast.success("Revaluation request submitted successfully");

    // Reset form
    form.reset();
  };

  // Get status badge color
  const getStatusBadge = (status: string) => {
    switch (status) {
      case "Pending":
        return <Badge className="bg-yellow-100 text-yellow-800 hover:bg-yellow-100 border-none">{status}</Badge>;
      case "Approved":
        return <Badge className="bg-green-100 text-green-800 hover:bg-green-100 border-none">{status}</Badge>;
      case "Rejected":
        return <Badge className="bg-red-100 text-red-800 hover:bg-red-100 border-none">{status}</Badge>;
      default:
        return <Badge>{status}</Badge>;
    }
  };

  // View request details
  const viewRequestDetails = (id: string) => {
    const request = requests.find(req => req.id === id);
    if (request) {
      toast.info(
        `Request Details for ${request.subject}`,
        {
          description: request.comments || "No additional details available",
        }
      );
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
                    name="subject"
                    render={({ field }) => (
                      <FormItem className="space-y-2">
                        <FormLabel>Subject</FormLabel>
                        <FormControl>
                          <Select 
                            onValueChange={field.onChange}
                            value={field.value}
                          >
                            <SelectTrigger id="subject">
                              <SelectValue placeholder="Select a subject" />
                            </SelectTrigger>
                            <SelectContent>
                              <SelectItem value="computer-networks">Computer Networks</SelectItem>
                              <SelectItem value="data-structures">Data Structures</SelectItem>
                              <SelectItem value="database-systems">Database Systems</SelectItem>
                              <SelectItem value="operating-systems">Operating Systems</SelectItem>
                              <SelectItem value="software-engineering">Software Engineering</SelectItem>
                            </SelectContent>
                          </Select>
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  
                  <FormField
                    control={form.control}
                    name="examType"
                    render={({ field }) => (
                      <FormItem className="space-y-2">
                        <FormLabel>Exam Type</FormLabel>
                        <FormControl>
                          <Select
                            onValueChange={field.onChange}
                            value={field.value}
                          >
                            <SelectTrigger id="examType">
                              <SelectValue placeholder="Select exam type" />
                            </SelectTrigger>
                            <SelectContent>
                              <SelectItem value="mid-semester">Mid-Semester</SelectItem>
                              <SelectItem value="end-semester">End-Semester</SelectItem>
                              <SelectItem value="class-test">Class Test</SelectItem>
                            </SelectContent>
                          </Select>
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
                  <Button type="submit" className="w-full">Submit Request</Button>
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
                    <TableHead>Subject</TableHead>
                    <TableHead>Date</TableHead>
                    <TableHead>Status</TableHead>
                    <TableHead className="text-right">Actions</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {requests.map((request) => (
                    <TableRow key={request.id}>
                      <TableCell>{request.subject}</TableCell>
                      <TableCell>{request.date}</TableCell>
                      <TableCell>{getStatusBadge(request.status)}</TableCell>
                      <TableCell className="text-right">
                        <Button 
                          variant="outline" 
                          size="sm"
                          onClick={() => viewRequestDetails(request.id)}
                        >
                          View Details
                        </Button>
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
