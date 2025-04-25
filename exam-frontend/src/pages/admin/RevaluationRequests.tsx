import React from "react";
import { Helmet } from "react-helmet";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { 
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

const RevaluationRequests = () => {
  return (
    <>
      <Helmet>
        <title>Revaluation Requests</title>
      </Helmet>
      
      <div className="space-y-6">
        <h1 className="text-3xl font-bold tracking-tight">Revaluation Requests</h1>
        
        <div className="flex items-center space-x-4">
          <Select>
            <SelectTrigger className="w-[180px]">
              <SelectValue placeholder="Filter by status" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="pending">Pending</SelectItem>
              <SelectItem value="approved">Approved</SelectItem>
              <SelectItem value="rejected">Rejected</SelectItem>
              <SelectItem value="completed">Completed</SelectItem>
            </SelectContent>
          </Select>
          
          <Input 
            placeholder="Search requests..." 
            className="max-w-sm" 
          />
        </div>
        
        <Tabs defaultValue="pending">
          <TabsList className="grid w-full grid-cols-4">
            <TabsTrigger value="pending">Pending</TabsTrigger>
            <TabsTrigger value="approved">Approved</TabsTrigger>
            <TabsTrigger value="rejected">Rejected</TabsTrigger>
            <TabsTrigger value="completed">Completed</TabsTrigger>
          </TabsList>
          
          <TabsContent value="pending" className="space-y-4 mt-6">
            <Card>
              <CardHeader>
                <CardTitle>Pending Revaluation Requests</CardTitle>
              </CardHeader>
              <CardContent>
                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead>Student</TableHead>
                      <TableHead>Subject</TableHead>
                      <TableHead>Exam Type</TableHead>
                      <TableHead>Submission Date</TableHead>
                      <TableHead>Actions</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    <TableRow>
                      <TableCell>John Smith</TableCell>
                      <TableCell>Computer Networks</TableCell>
                      <TableCell>End-Semester</TableCell>
                      <TableCell>12/06/2023</TableCell>
                      <TableCell>
                        <div className="flex space-x-2">
                          <Button variant="outline" size="sm">View</Button>
                          <Button variant="default" size="sm">Approve</Button>
                          <Button variant="destructive" size="sm">Reject</Button>
                        </div>
                      </TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell>Sarah Johnson</TableCell>
                      <TableCell>Data Structures</TableCell>
                      <TableCell>Mid-Semester</TableCell>
                      <TableCell>15/06/2023</TableCell>
                      <TableCell>
                        <div className="flex space-x-2">
                          <Button variant="outline" size="sm">View</Button>
                          <Button variant="default" size="sm">Approve</Button>
                          <Button variant="destructive" size="sm">Reject</Button>
                        </div>
                      </TableCell>
                    </TableRow>
                  </TableBody>
                </Table>
              </CardContent>
            </Card>
          </TabsContent>
          
          <TabsContent value="approved" className="space-y-4 mt-6">
            <Card>
              <CardHeader>
                <CardTitle>Approved Revaluation Requests</CardTitle>
              </CardHeader>
              <CardContent>
                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead>Student</TableHead>
                      <TableHead>Subject</TableHead>
                      <TableHead>Exam Type</TableHead>
                      <TableHead>Approval Date</TableHead>
                      <TableHead>Payment Status</TableHead>
                      <TableHead>Actions</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    <TableRow>
                      <TableCell>Michael Brown</TableCell>
                      <TableCell>Database Systems</TableCell>
                      <TableCell>End-Semester</TableCell>
                      <TableCell>10/06/2023</TableCell>
                      <TableCell>
                        <Badge variant="outline" className="bg-yellow-100 text-yellow-800 hover:bg-yellow-100">Pending</Badge>
                      </TableCell>
                      <TableCell>
                        <Button variant="outline" size="sm">View</Button>
                      </TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell>Emily Davis</TableCell>
                      <TableCell>Computer Architecture</TableCell>
                      <TableCell>Mid-Semester</TableCell>
                      <TableCell>09/06/2023</TableCell>
                      <TableCell>
                        <Badge variant="outline" className="bg-green-100 text-green-800 hover:bg-green-100">Paid</Badge>
                      </TableCell>
                      <TableCell>
                        <Button variant="outline" size="sm">View</Button>
                      </TableCell>
                    </TableRow>
                  </TableBody>
                </Table>
              </CardContent>
            </Card>
          </TabsContent>
          
          <TabsContent value="rejected" className="space-y-4 mt-6">
            <Card>
              <CardHeader>
                <CardTitle>Rejected Revaluation Requests</CardTitle>
              </CardHeader>
              <CardContent>
                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead>Student</TableHead>
                      <TableHead>Subject</TableHead>
                      <TableHead>Exam Type</TableHead>
                      <TableHead>Rejection Date</TableHead>
                      <TableHead>Reason</TableHead>
                      <TableHead>Actions</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    <TableRow>
                      <TableCell>Alex Wilson</TableCell>
                      <TableCell>Operating Systems</TableCell>
                      <TableCell>End-Semester</TableCell>
                      <TableCell>08/06/2023</TableCell>
                      <TableCell>Deadline passed</TableCell>
                      <TableCell>
                        <Button variant="outline" size="sm">View</Button>
                      </TableCell>
                    </TableRow>
                  </TableBody>
                </Table>
              </CardContent>
            </Card>
          </TabsContent>
          
          <TabsContent value="completed" className="space-y-4 mt-6">
            <Card>
              <CardHeader>
                <CardTitle>Completed Revaluation Requests</CardTitle>
              </CardHeader>
              <CardContent>
                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead>Student</TableHead>
                      <TableHead>Subject</TableHead>
                      <TableHead>Original Marks</TableHead>
                      <TableHead>Revised Marks</TableHead>
                      <TableHead>Status</TableHead>
                      <TableHead>Actions</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    <TableRow>
                      <TableCell>Laura Taylor</TableCell>
                      <TableCell>Computer Networks</TableCell>
                      <TableCell>68</TableCell>
                      <TableCell>72</TableCell>
                      <TableCell>
                        <Badge variant="outline" className="bg-green-100 text-green-800 hover:bg-green-100">Marks Increased</Badge>
                      </TableCell>
                      <TableCell>
                        <Button variant="outline" size="sm">View</Button>
                      </TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell>Mark Evans</TableCell>
                      <TableCell>Data Structures</TableCell>
                      <TableCell>74</TableCell>
                      <TableCell>74</TableCell>
                      <TableCell>
                        <Badge variant="outline" className="bg-gray-100 text-gray-800 hover:bg-gray-100">No Change</Badge>
                      </TableCell>
                      <TableCell>
                        <Button variant="outline" size="sm">View</Button>
                      </TableCell>
                    </TableRow>
                  </TableBody>
                </Table>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </>
  );
};

export default RevaluationRequests;