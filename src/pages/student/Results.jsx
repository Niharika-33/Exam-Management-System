
import React from "react";
import { Helmet } from "react-helmet";
import { 
  Tabs, 
  TabsContent, 
  TabsList, 
  TabsTrigger 
} from "@/components/ui/tabs";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

const Results = () => {
  return (
    <>
      <Helmet>
        <title>Results</title>
      </Helmet>
      
      <div className="space-y-6">
        <h1 className="text-3xl font-bold tracking-tight">Results</h1>
        
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
                      <TableHead>Exam Type</TableHead>
                      <TableHead>Marks Obtained</TableHead>
                      <TableHead>Total Marks</TableHead>
                      <TableHead>Status</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    <TableRow>
                      <TableCell>Computer Networks</TableCell>
                      <TableCell>Mid-Semester</TableCell>
                      <TableCell>18</TableCell>
                      <TableCell>25</TableCell>
                      <TableCell className="text-green-500">Pass</TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell>Data Structures</TableCell>
                      <TableCell>CLAS Test</TableCell>
                      <TableCell>8</TableCell>
                      <TableCell>10</TableCell>
                      <TableCell className="text-green-500">Pass</TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell>Database Systems</TableCell>
                      <TableCell>Mid-Semester</TableCell>
                      <TableCell>22</TableCell>
                      <TableCell>25</TableCell>
                      <TableCell className="text-green-500">Pass</TableCell>
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
                      <TableHead>Semester</TableHead>
                      <TableHead>Marks Obtained</TableHead>
                      <TableHead>Total Marks</TableHead>
                      <TableHead>Grade</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    <TableRow>
                      <TableCell>Computer Networks</TableCell>
                      <TableCell>Spring 2023</TableCell>
                      <TableCell>76</TableCell>
                      <TableCell>100</TableCell>
                      <TableCell>A</TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell>Data Structures</TableCell>
                      <TableCell>Spring 2023</TableCell>
                      <TableCell>82</TableCell>
                      <TableCell>100</TableCell>
                      <TableCell>A</TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell>Database Systems</TableCell>
                      <TableCell>Spring 2023</TableCell>
                      <TableCell>68</TableCell>
                      <TableCell>100</TableCell>
                      <TableCell>B+</TableCell>
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

export default Results;
