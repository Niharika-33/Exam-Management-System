
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
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

const DateSheet = () => {
  return (
    <>
      <Helmet>
        <title>Date Sheet</title>
      </Helmet>
      
      <div className="space-y-6">
        <h1 className="text-3xl font-bold tracking-tight">Date Sheet Management</h1>
        
        <Tabs defaultValue="mid-semester">
          <TabsList className="grid w-full grid-cols-2">
            <TabsTrigger value="mid-semester">Mid-Semester Exams</TabsTrigger>
            <TabsTrigger value="end-semester">End-Semester Exams</TabsTrigger>
          </TabsList>
          
          <TabsContent value="mid-semester" className="space-y-4 mt-6">
            <Card>
              <CardHeader>
                <CardTitle>Create Mid-Semester Exam Schedule</CardTitle>
                <CardDescription>
                  Create and publish the date sheet for mid-semester exams
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="department">Department</Label>
                  <Select>
                    <SelectTrigger id="department">
                      <SelectValue placeholder="Select department" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="computer-science">Computer Science</SelectItem>
                      <SelectItem value="electrical">Electrical Engineering</SelectItem>
                      <SelectItem value="mechanical">Mechanical Engineering</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="semester">Semester</Label>
                  <Select>
                    <SelectTrigger id="semester">
                      <SelectValue placeholder="Select semester" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="spring-2023">Spring 2023</SelectItem>
                      <SelectItem value="fall-2022">Fall 2022</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="exam-start-date">Exam Start Date</Label>
                  <Input id="exam-start-date" type="date" />
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="exam-end-date">Exam End Date</Label>
                  <Input id="exam-end-date" type="date" />
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="schedule-file">Upload Schedule CSV</Label>
                  <Input id="schedule-file" type="file" />
                </div>
              </CardContent>
              <CardFooter>
                <Button className="w-full">Publish Date Sheet</Button>
              </CardFooter>
            </Card>
            
            <Card>
              <CardHeader>
                <CardTitle>Published Date Sheets</CardTitle>
              </CardHeader>
              <CardContent>
                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead>Department</TableHead>
                      <TableHead>Semester</TableHead>
                      <TableHead>Published Date</TableHead>
                      <TableHead>Actions</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    <TableRow>
                      <TableCell>Computer Science</TableCell>
                      <TableCell>Spring 2023</TableCell>
                      <TableCell>05/03/2023</TableCell>
                      <TableCell>
                        <div className="flex space-x-2">
                          <Button variant="outline" size="sm">View</Button>
                          <Button variant="outline" size="sm">Edit</Button>
                        </div>
                      </TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell>Electrical Engineering</TableCell>
                      <TableCell>Spring 2023</TableCell>
                      <TableCell>07/03/2023</TableCell>
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
          
          <TabsContent value="end-semester" className="space-y-4 mt-6">
            <Card>
              <CardHeader>
                <CardTitle>Create End-Semester Exam Schedule</CardTitle>
                <CardDescription>
                  Create and publish the date sheet for end-semester exams
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="department-end">Department</Label>
                  <Select>
                    <SelectTrigger id="department-end">
                      <SelectValue placeholder="Select department" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="computer-science">Computer Science</SelectItem>
                      <SelectItem value="electrical">Electrical Engineering</SelectItem>
                      <SelectItem value="mechanical">Mechanical Engineering</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="semester-end">Semester</Label>
                  <Select>
                    <SelectTrigger id="semester-end">
                      <SelectValue placeholder="Select semester" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="spring-2023">Spring 2023</SelectItem>
                      <SelectItem value="fall-2022">Fall 2022</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="exam-start-date-end">Exam Start Date</Label>
                  <Input id="exam-start-date-end" type="date" />
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="exam-end-date-end">Exam End Date</Label>
                  <Input id="exam-end-date-end" type="date" />
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="schedule-file-end">Upload Schedule CSV</Label>
                  <Input id="schedule-file-end" type="file" />
                </div>
              </CardContent>
              <CardFooter>
                <Button className="w-full">Publish Date Sheet</Button>
              </CardFooter>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </>
  );
};

export default DateSheet;
