
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

const Issues = () => {
  return (
    <>
      <Helmet>
        <title>Issues</title>
      </Helmet>
      
      <div className="space-y-6">
        <h1 className="text-3xl font-bold tracking-tight">Exam Issues</h1>
        
        <div className="flex items-center space-x-4">
          <Select>
            <SelectTrigger className="w-[180px]">
              <SelectValue placeholder="Filter by status" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="pending">Pending</SelectItem>
              <SelectItem value="in-progress">In Progress</SelectItem>
              <SelectItem value="resolved">Resolved</SelectItem>
              <SelectItem value="rejected">Rejected</SelectItem>
            </SelectContent>
          </Select>
          
          <Input 
            placeholder="Search issues..." 
            className="max-w-sm" 
          />
        </div>
        
        <Card>
          <CardHeader>
            <CardTitle>Reported Issues</CardTitle>
          </CardHeader>
          <CardContent>
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Student</TableHead>
                  <TableHead>Subject</TableHead>
                  <TableHead>Exam Date</TableHead>
                  <TableHead>Issue Type</TableHead>
                  <TableHead>Status</TableHead>
                 
                </TableRow>
              </TableHeader>
              <TableBody>
                <TableRow>
                  <TableCell>John Smith</TableCell>
                  <TableCell>Computer Networks</TableCell>
                  <TableCell>15/05/2023</TableCell>
                  <TableCell>Incorrect Bubbling</TableCell>
                  <TableCell>
                    <Badge variant="outline" className="bg-yellow-100 text-yellow-800 hover:bg-yellow-100">Pending</Badge>
                  </TableCell>
                  
                </TableRow>
                <TableRow>
                  <TableCell>Sarah Johnson</TableCell>
                  <TableCell>Data Structures</TableCell>
                  <TableCell>18/05/2023</TableCell>
                  <TableCell>Roll Number Error</TableCell>
                  <TableCell>
                    <Badge variant="outline" className="bg-blue-100 text-blue-800 hover:bg-blue-100">In Progress</Badge>
                  </TableCell>
                  
                </TableRow>
                <TableRow>
                  <TableCell>Michael Brown</TableCell>
                  <TableCell>Database Systems</TableCell>
                  <TableCell>20/05/2023</TableCell>
                  <TableCell>Missing Answer Sheet</TableCell>
                  <TableCell>
                    <Badge variant="outline" className="bg-green-100 text-green-800 hover:bg-green-100">Resolved</Badge>
                  </TableCell>
              
                </TableRow>
                <TableRow>
                  <TableCell>Emily Davis</TableCell>
                  <TableCell>Computer Architecture</TableCell>
                  <TableCell>22/05/2023</TableCell>
                  <TableCell>Incorrect Question Paper</TableCell>
                  <TableCell>
                    <Badge variant="outline" className="bg-red-100 text-red-800 hover:bg-red-100">Rejected</Badge>
                  </TableCell>
                </TableRow>
              </TableBody>
            </Table>
          </CardContent>
        </Card>
      </div>
    </>
  );
};

export default Issues;
