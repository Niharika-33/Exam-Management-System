
import React from "react";
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
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

const ClassTests = () => {
  return (
    <>
      <Helmet>
        <title>Class Tests</title>
      </Helmet>
      
      <div className="space-y-6">
        <h1 className="text-3xl font-bold tracking-tight">Class Tests (CLAS)</h1>
        
        <Tabs defaultValue="manage">
          <TabsList className="grid w-full grid-cols-2">
            <TabsTrigger value="manage">Manage Tests</TabsTrigger>
            <TabsTrigger value="publish-results">Publish Results</TabsTrigger>
          </TabsList>
          
          <TabsContent value="manage" className="space-y-4 mt-6">
            <Card>
              <CardHeader>
                <CardTitle>Upcoming Class Tests</CardTitle>
                <CardDescription>
                  View and manage all your scheduled class tests
                </CardDescription>
              </CardHeader>
              <CardContent>
                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead>Subject</TableHead>
                      <TableHead>Date</TableHead>
                      <TableHead>Total Marks</TableHead>
                      <TableHead>Actions</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    <TableRow>
                      <TableCell>Computer Networks</TableCell>
                      <TableCell>25/03/2023</TableCell>
                      <TableCell>10</TableCell>
                      <TableCell>
                        <div className="flex space-x-2">
                          <Button variant="outline" size="sm">Edit</Button>
                          <Button variant="outline" size="sm">Cancel</Button>
                        </div>
                      </TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell>Data Structures</TableCell>
                      <TableCell>28/03/2023</TableCell>
                      <TableCell>10</TableCell>
                      <TableCell>
                        <div className="flex space-x-2">
                          <Button variant="outline" size="sm">Edit</Button>
                          <Button variant="outline" size="sm">Cancel</Button>
                        </div>
                      </TableCell>
                    </TableRow>
                  </TableBody>
                </Table>
              </CardContent>
              <CardFooter>
                <Button className="w-full">Schedule New Class Test</Button>
              </CardFooter>
            </Card>
          </TabsContent>
          
          <TabsContent value="publish-results" className="space-y-4 mt-6">
            <Card>
              <CardHeader>
                <CardTitle>Publish Class Test Results</CardTitle>
                <CardDescription>
                  Upload and publish results for completed class tests
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="subject-result">Subject</Label>
                  <Select>
                    <SelectTrigger id="subject-result">
                      <SelectValue placeholder="Select a subject" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="computer-networks">Computer Networks</SelectItem>
                      <SelectItem value="data-structures">Data Structures</SelectItem>
                      <SelectItem value="database-systems">Database Systems</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="semester-result">Semester</Label>
                  <Select>
                    <SelectTrigger id="semester-result">
                      <SelectValue placeholder="Select semester" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="1">Semester 1</SelectItem>
                      <SelectItem value="2">Semester 2</SelectItem>
                      <SelectItem value="3">Semester 3</SelectItem>
                      <SelectItem value="4">Semester 4</SelectItem>
                      <SelectItem value="5">Semester 5</SelectItem>
                      <SelectItem value="6">Semester 6</SelectItem>
                      <SelectItem value="7">Semester 7</SelectItem>
                      <SelectItem value="8">Semester 8</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="test-date">Test Date</Label>
                  <Select>
                    <SelectTrigger id="test-date">
                      <SelectValue placeholder="Select test date" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="25-03-2023">25/03/2023</SelectItem>
                      <SelectItem value="28-03-2023">28/03/2023</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="result-file">Upload Results CSV</Label>
                  <Input id="result-file" type="file" />
                </div>
              </CardContent>
              <CardFooter>
                <Button className="w-full">Publish Results</Button>
              </CardFooter>
            </Card>
            
            <Card>
              <CardHeader>
                <CardTitle>Published Results</CardTitle>
                <CardDescription>
                  View and manage class test results you've published
                </CardDescription>
              </CardHeader>
              <CardContent>
                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead>Subject</TableHead>
                      <TableHead>Test Date</TableHead>
                      <TableHead>Published Date</TableHead>
                      <TableHead>Actions</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    <TableRow>
                      <TableCell>Computer Networks</TableCell>
                      <TableCell>15/02/2023</TableCell>
                      <TableCell>18/02/2023</TableCell>
                      <TableCell>
                        <div className="flex space-x-2">
                          <Button variant="outline" size="sm">View</Button>
                          <Button variant="outline" size="sm">Edit</Button>
                        </div>
                      </TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell>Database Systems</TableCell>
                      <TableCell>10/02/2023</TableCell>
                      <TableCell>14/02/2023</TableCell>
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
        </Tabs>
      </div>
    </>
  );
};

export default ClassTests;
