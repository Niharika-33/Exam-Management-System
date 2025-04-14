
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
import { Input } from "@/components/ui/input";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

const PublishedResults = () => {
  return (
    <>
      <Helmet>
        <title>Published Results</title>
      </Helmet>
      
      <div className="space-y-6">
        <h1 className="text-3xl font-bold tracking-tight">Published Results</h1>
        
        <div className="flex items-center justify-between">
          <Input 
            placeholder="Search results..." 
            className="max-w-sm" 
          />
          <Button>Upload New Results</Button>
        </div>
        
        <Tabs defaultValue="internal">
          <TabsList className="grid w-full grid-cols-2">
            <TabsTrigger value="internal">Internal Exams</TabsTrigger>
            <TabsTrigger value="external">External Exams</TabsTrigger>
          </TabsList>
          
          <TabsContent value="internal" className="space-y-4 mt-6">
            <Card>
              <CardHeader>
                <CardTitle>Mid-Semester & Class Test Results</CardTitle>
              </CardHeader>
              <CardContent>
                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead>Subject</TableHead>
                      <TableHead>Department</TableHead>
                      <TableHead>Type</TableHead>
                      <TableHead>Publish Date</TableHead>
                      <TableHead>Published By</TableHead>
                      <TableHead>Actions</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    <TableRow>
                      <TableCell>Computer Networks</TableCell>
                      <TableCell>Computer Science</TableCell>
                      <TableCell>Mid-Semester</TableCell>
                      <TableCell>18/03/2023</TableCell>
                      <TableCell>Prof. John Doe</TableCell>
                      <TableCell>
                        <div className="flex space-x-2">
                          <Button variant="outline" size="sm">View</Button>
                          <Button variant="outline" size="sm">Edit</Button>
                        </div>
                      </TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell>Data Structures</TableCell>
                      <TableCell>Computer Science</TableCell>
                      <TableCell>Class Test</TableCell>
                      <TableCell>12/03/2023</TableCell>
                      <TableCell>Prof. Jane Smith</TableCell>
                      <TableCell>
                        <div className="flex space-x-2">
                          <Button variant="outline" size="sm">View</Button>
                          <Button variant="outline" size="sm">Edit</Button>
                        </div>
                      </TableCell>
                    </TableRow>
                  </TableBody>
                </Table>
              </CardContent>
            </Card>
          </TabsContent>
          
          <TabsContent value="external" className="space-y-4 mt-6">
            <Card>
              <CardHeader>
                <CardTitle>End-Semester Examination Results</CardTitle>
              </CardHeader>
              <CardContent>
                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead>Subject</TableHead>
                      <TableHead>Department</TableHead>
                      <TableHead>Semester</TableHead>
                      <TableHead>Publish Date</TableHead>
                      <TableHead>Actions</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    <TableRow>
                      <TableCell>Computer Networks</TableCell>
                      <TableCell>Computer Science</TableCell>
                      <TableCell>Spring 2023</TableCell>
                      <TableCell>10/06/2023</TableCell>
                      <TableCell>
                        <div className="flex space-x-2">
                          <Button variant="outline" size="sm">View</Button>
                          <Button variant="outline" size="sm">Edit</Button>
                          <Button variant="destructive" size="sm">Delete</Button>
                        </div>
                      </TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell>Database Systems</TableCell>
                      <TableCell>Computer Science</TableCell>
                      <TableCell>Spring 2023</TableCell>
                      <TableCell>12/06/2023</TableCell>
                      <TableCell>
                        <div className="flex space-x-2">
                          <Button variant="outline" size="sm">View</Button>
                          <Button variant="outline" size="sm">Edit</Button>
                          <Button variant="destructive" size="sm">Delete</Button>
                        </div>
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

export default PublishedResults;
