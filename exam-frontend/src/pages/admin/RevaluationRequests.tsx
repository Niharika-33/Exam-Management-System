import React, { useEffect, useState } from "react";
import { Helmet } from "react-helmet";
import axios from "axios";
import {
  Card,
  CardHeader,
  CardTitle,
  CardContent,
  CardDescription,
} from "@/components/ui/card";
import {
  Table,
  TableHeader,
  TableRow,
  TableHead,
  TableBody,
  TableCell,
} from "@/components/ui/table";
import { Button } from "@/components/ui/button";
import { toast } from "sonner";

// Corrected interface name and field
interface AdminRevealRequest {
  requestID: number;
  studentId: string;
  revalDescription: string;
  status: string;
}

const AdminRevaluation = () => {
  const [requests, setRequests] = useState<AdminRevealRequest[]>([]);

  const API_BASE = "http://localhost:8080/reval";

  const fetchRequests = async () => {
    try {
      const response = await axios.get(`${API_BASE}/all`);
      setRequests(response.data);
    } catch (error) {
      console.error("Error fetching reveal requests:", error);
      toast.error("Failed to fetch reveal requests");
    }
  };

  const handleUpdateStatus = async (id: number, newStatus: string) => {
    try {
      await axios.put(`${API_BASE}/status/${id}?status=${newStatus}`);
      toast.success(`Request ${id} ${newStatus.toLowerCase()}`);
      fetchRequests(); // Refresh after status update
    } catch (error) {
      console.error("Error updating status:", error);
      toast.error("Failed to update status");
    }
  };

  useEffect(() => {
    fetchRequests();
  }, []);

  return (
    <>
      <Helmet>
        <title>Admin - Reveal Requests</title>
      </Helmet>

      <div className="space-y-6">
        <h1 className="text-3xl font-bold tracking-tight">
          Revaluation Requests
        </h1>

        <Card>
          <CardHeader>
            <CardTitle>Requests</CardTitle>
            <CardDescription>Review all submitted requests</CardDescription>
          </CardHeader>
          <CardContent>
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Request ID</TableHead>
                  <TableHead>Student ID</TableHead>
                  <TableHead>Description</TableHead>
                  <TableHead>Status</TableHead>
                  <TableHead>Actions</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {requests.map((request) => (
                  <TableRow key={request.requestID}>
                    <TableCell>{request.requestID}</TableCell>
                    <TableCell>{request.studentId}</TableCell>
                    <TableCell>{request.revalDescription}</TableCell>
                    <TableCell>{request.status}</TableCell>
                    <TableCell className="space-x-2">
                      <Button
                        variant="success"
                        onClick={() =>
                          handleUpdateStatus(request.requestID, "APPROVED")
                        }
                        disabled={request.status === "APPROVED"}
                      >
                        Approve
                      </Button>
                      <Button
                        variant="destructive"
                        onClick={() =>
                          handleUpdateStatus(request.requestID, "REJECTED")
                        }
                        disabled={request.status === "REJECTED"}
                      >
                        Reject
                      </Button>
                    </TableCell>
                  </TableRow>
                ))}
                {requests.length === 0 && (
                  <TableRow>
                    <TableCell
                      colSpan={5}
                      className="text-center text-muted-foreground py-4"
                    >
                      No requests available.
                    </TableCell>
                  </TableRow>
                )}
              </TableBody>
            </Table>
          </CardContent>
        </Card>
      </div>
    </>
  );
};

export default AdminRevaluation;
