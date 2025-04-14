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
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { useToast } from "@/hooks/use-toast";

const PublishSyllabus = () => {
  const { toast } = useToast();
  const [selectedSubject, setSelectedSubject] = useState("");
  const [syllabusDetails, setSyllabusDetails] = useState("");
  const [totalMarks, setTotalMarks] = useState("");
  const [testDate, setTestDate] = useState("");
  const [references, setReferences] = useState("");

  // Handle publishing mid-semester exam syllabus
  const handlePublishMidSemesterSyllabus = () => {
    if (!selectedSubject || !syllabusDetails) {
      toast({
        title: "Missing Information",
        description: "Please fill in all required fields.",
        variant: "destructive"
      });
      return;
    }

    toast({
      title: "Syllabus Published",
      description: `Mid-semester exam syllabus for ${selectedSubject} has been published successfully.`
    });

    // Reset form
    setSelectedSubject("");
    setSyllabusDetails("");
    setTotalMarks("");
  };

  // Handle publishing class test details
  const handlePublishClassTestDetails = () => {
    if (!selectedSubject || !syllabusDetails || !testDate || !totalMarks) {
      toast({
        title: "Missing Information",
        description: "Please fill in all required fields.",
        variant: "destructive"
      });
      return;
    }

    toast({
      title: "Class Test Details Published",
      description: `Class test details for ${selectedSubject} have been published successfully.`
    });

    // Reset form
    setSelectedSubject("");
    setSyllabusDetails("");
    setTestDate("");
    setTotalMarks("");
  };

  // Handle publishing end-semester exam syllabus
  const handlePublishEndSemesterSyllabus = () => {
    if (!selectedSubject || !syllabusDetails) {
      toast({
        title: "Missing Information",
        description: "Please fill in all required fields.",
        variant: "destructive"
      });
      return;
    }

    toast({
      title: "Syllabus Published",
      description: `End-semester exam syllabus for ${selectedSubject} has been published successfully.`
    });

    // Reset form
    setSelectedSubject("");
    setSyllabusDetails("");
    setReferences("");
  };

  return (
    <>
      <Helmet>
        <title>Publish Syllabus</title>
      </Helmet>
      
      <div className="space-y-6">
        <h1 className="text-3xl font-bold tracking-tight">Publish Syllabus</h1>
        
        <Tabs defaultValue="mid-semester">
          <TabsList className="grid w-full grid-cols-3">
            <TabsTrigger value="mid-semester">Mid-Semester Exam</TabsTrigger>
            <TabsTrigger value="class-test">Class Test (CLAS)</TabsTrigger>
            <TabsTrigger value="end-semester">End-Semester Exam</TabsTrigger>
          </TabsList>
          
          <TabsContent value="mid-semester" className="space-y-4 mt-6">
            <Card>
              <CardHeader>
                <CardTitle>Publish Mid-Semester Exam Syllabus</CardTitle>
                <CardDescription>
                  Fill in the details to publish syllabus for mid-semester exams
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="subject">Subject</Label>
                  <Select value={selectedSubject} onValueChange={setSelectedSubject}>
                    <SelectTrigger id="subject">
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
                  <Label htmlFor="syllabus">Syllabus Details</Label>
                  <Textarea 
                    id="syllabus" 
                    placeholder="Enter the detailed syllabus for the examination"
                    className="min-h-[200px]"
                    value={syllabusDetails}
                    onChange={(e) => setSyllabusDetails(e.target.value)}
                  />
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="totalMarks">Total Marks</Label>
                  <Input 
                    id="totalMarks" 
                    type="number" 
                    placeholder="Enter total marks" 
                    value={totalMarks}
                    onChange={(e) => setTotalMarks(e.target.value)}
                  />
                </div>
              </CardContent>
              <CardFooter>
                <Button 
                  className="w-full"
                  onClick={handlePublishMidSemesterSyllabus}
                >
                  Publish Syllabus
                </Button>
              </CardFooter>
            </Card>
            
            <Card>
              <CardHeader>
                <CardTitle>Published Syllabi</CardTitle>
              </CardHeader>
              <CardContent>
                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead>Subject</TableHead>
                      <TableHead>Published Date</TableHead>
                      <TableHead>Actions</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    <TableRow>
                      <TableCell>Computer Networks</TableCell>
                      <TableCell>15/03/2023</TableCell>
                      <TableCell>
                        <Button variant="outline" size="sm">View</Button>
                      </TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell>Database Systems</TableCell>
                      <TableCell>12/03/2023</TableCell>
                      <TableCell>
                        <Button variant="outline" size="sm">View</Button>
                      </TableCell>
                    </TableRow>
                  </TableBody>
                </Table>
              </CardContent>
            </Card>
          </TabsContent>
          
          <TabsContent value="class-test" className="space-y-4 mt-6">
            <Card>
              <CardHeader>
                <CardTitle>Publish Class Test (CLAS) Details</CardTitle>
                <CardDescription>
                  Fill in the details to publish information for class tests
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="subject-clas">Subject</Label>
                  <Select value={selectedSubject} onValueChange={setSelectedSubject}>
                    <SelectTrigger id="subject-clas">
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
                  <Label htmlFor="testDate">Test Date</Label>
                  <Input 
                    id="testDate" 
                    type="date" 
                    value={testDate}
                    onChange={(e) => setTestDate(e.target.value)}
                  />
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="syllabus-clas">Syllabus Details</Label>
                  <Textarea 
                    id="syllabus-clas" 
                    placeholder="Enter the detailed syllabus for the class test"
                    className="min-h-[150px]"
                    value={syllabusDetails}
                    onChange={(e) => setSyllabusDetails(e.target.value)}
                  />
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="totalMarks-clas">Total Marks</Label>
                  <Input 
                    id="totalMarks-clas" 
                    type="number" 
                    placeholder="Enter total marks" 
                    value={totalMarks}
                    onChange={(e) => setTotalMarks(e.target.value)}
                  />
                </div>
              </CardContent>
              <CardFooter>
                <Button 
                  className="w-full" 
                  onClick={handlePublishClassTestDetails}
                >
                  Publish Class Test Details
                </Button>
              </CardFooter>
            </Card>
          </TabsContent>
          
          <TabsContent value="end-semester" className="space-y-4 mt-6">
            <Card>
              <CardHeader>
                <CardTitle>Publish End-Semester Exam Syllabus</CardTitle>
                <CardDescription>
                  Fill in the details to publish syllabus for end-semester exams
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="subject-end">Subject</Label>
                  <Select value={selectedSubject} onValueChange={setSelectedSubject}>
                    <SelectTrigger id="subject-end">
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
                  <Label htmlFor="syllabus-end">Syllabus Details</Label>
                  <Textarea 
                    id="syllabus-end" 
                    placeholder="Enter the detailed syllabus for the examination"
                    className="min-h-[200px]"
                    value={syllabusDetails}
                    onChange={(e) => setSyllabusDetails(e.target.value)}
                  />
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="references">Reference Materials</Label>
                  <Textarea 
                    id="references" 
                    placeholder="Enter the reference materials or books"
                    className="min-h-[100px]"
                    value={references}
                    onChange={(e) => setReferences(e.target.value)}
                  />
                </div>
              </CardContent>
              <CardFooter>
                <Button 
                  className="w-full"
                  onClick={handlePublishEndSemesterSyllabus}
                >
                  Publish Syllabus
                </Button>
              </CardFooter>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </>
  );
};

export default PublishSyllabus;