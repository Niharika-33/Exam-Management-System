
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
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { useToast } from "@/hooks/use-toast";
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip";
import { FileText, Edit } from "lucide-react";

const PublishResults = () => {
  const { toast } = useToast();
  const [subject, setSubject] = useState("");
  const [semester, setSemester] = useState("");
  const [file, setFile] = useState<File | null>(null);
  const [testDate, setTestDate] = useState("");

  const handlePublishMidSemesterResults = () => {
    if (!subject || !semester || !file) {
      toast({
        title: "Missing Fields",
        description: "Please fill in all required fields",
        variant: "destructive",
      });
      return;
    }

    // In a real application, here you would upload the file to your server
    // For this demo, we'll just show a success message
    toast({
      title: "Results Published",
      description: `${subject} results for semester ${semester} have been published successfully.`,
      variant: "success",
    });
  };

  const handlePublishClassTestResults = () => {
    if (!subject || !testDate || !file) {
      toast({
        title: "Missing Fields",
        description: "Please fill in all required fields",
        variant: "destructive",
      });
      return;
    }

    // In a real application, here you would upload the file to your server
    // For this demo, we'll just show a success message
    toast({
      title: "Results Published",
      description: `${subject} class test results for ${testDate} have been published successfully.`,
      variant: "success",
    });
  };

  const handleViewResults = (subject: string) => {
    toast({
      title: "Viewing Results",
      description: `Opening results for ${subject}`,
    });
  };

  const handleEditResults = (subject: string) => {
    toast({
      title: "Edit Results",
      description: `Editing results for ${subject}`,
    });
  };

  return (
    <>
      <Helmet>
        <title>Publish Results</title>
      </Helmet>
      
      <div className="space-y-6">
        <h1 className="text-3xl font-bold tracking-tight">Publish Results</h1>
        
        <Tabs defaultValue="mid-semester">
          <TabsList className="grid w-full grid-cols-2">
            <TabsTrigger value="mid-semester">Mid-Semester Exam</TabsTrigger>
            <TabsTrigger value="class-test">Class Test (CLAS)</TabsTrigger>
          </TabsList>
          
          <TabsContent value="mid-semester" className="space-y-4 mt-6">
            <Card>
              <CardHeader>
                <CardTitle>Publish Mid-Semester Exam Results</CardTitle>
                <CardDescription>
                  Upload and publish results for mid-semester exams
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="subject-mid">Subject</Label>
                  <Select onValueChange={setSubject}>
                    <SelectTrigger id="subject-mid">
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
                  <Label htmlFor="semester">Semester</Label>
                  <Select onValueChange={setSemester}>
                    <SelectTrigger id="semester">
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
                  <Label htmlFor="result-file-mid">Upload Results CSV</Label>
                  <Input 
                    id="result-file-mid" 
                    type="file" 
                    accept=".csv"
                    onChange={(e) => setFile(e.target.files?.[0] || null)}
                  />
                </div>
              </CardContent>
              <CardFooter>
                <Button className="w-full" onClick={handlePublishMidSemesterResults}>Publish Results</Button>
              </CardFooter>
            </Card>
            
            <Card>
              <CardHeader>
                <CardTitle>Published Mid-Semester Results</CardTitle>
              </CardHeader>
              <CardContent>
                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead>Subject</TableHead>
                      <TableHead>Semester</TableHead>
                      <TableHead>Published Date</TableHead>
                      <TableHead>Actions</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    <TableRow>
                      <TableCell>Computer Networks</TableCell>
                      <TableCell>5</TableCell>
                      <TableCell>18/03/2023</TableCell>
                      <TableCell>
                        <div className="flex space-x-2">
                          <TooltipProvider>
                            <Tooltip>
                              <TooltipTrigger asChild>
                                <Button 
                                  variant="outline" 
                                  size="sm" 
                                  onClick={() => handleViewResults("Computer Networks")}
                                >
                                  <FileText className="h-4 w-4 mr-2" />
                                  View
                                </Button>
                              </TooltipTrigger>
                              <TooltipContent>
                                <p>View the published results</p>
                              </TooltipContent>
                            </Tooltip>
                          </TooltipProvider>
                          
                          <TooltipProvider>
                            <Tooltip>
                              <TooltipTrigger asChild>
                                <Button 
                                  variant="outline" 
                                  size="sm"
                                  onClick={() => handleEditResults("Computer Networks")}
                                >
                                  <Edit className="h-4 w-4 mr-2" />
                                  Edit
                                </Button>
                              </TooltipTrigger>
                              <TooltipContent>
                                <p>Edit or update the published results</p>
                              </TooltipContent>
                            </Tooltip>
                          </TooltipProvider>
                        </div>
                      </TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell>Database Systems</TableCell>
                      <TableCell>3</TableCell>
                      <TableCell>15/03/2023</TableCell>
                      <TableCell>
                        <div className="flex space-x-2">
                          <TooltipProvider>
                            <Tooltip>
                              <TooltipTrigger asChild>
                                <Button 
                                  variant="outline" 
                                  size="sm"
                                  onClick={() => handleViewResults("Database Systems")}
                                >
                                  <FileText className="h-4 w-4 mr-2" />
                                  View
                                </Button>
                              </TooltipTrigger>
                              <TooltipContent>
                                <p>View the published results</p>
                              </TooltipContent>
                            </Tooltip>
                          </TooltipProvider>
                          
                          <TooltipProvider>
                            <Tooltip>
                              <TooltipTrigger asChild>
                                <Button 
                                  variant="outline" 
                                  size="sm"
                                  onClick={() => handleEditResults("Database Systems")}
                                >
                                  <Edit className="h-4 w-4 mr-2" />
                                  Edit
                                </Button>
                              </TooltipTrigger>
                              <TooltipContent>
                                <p>Edit or update the published results</p>
                              </TooltipContent>
                            </Tooltip>
                          </TooltipProvider>
                        </div>
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
                <CardTitle>Publish Class Test (CLAS) Results</CardTitle>
                <CardDescription>
                  Upload and publish results for class tests
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="subject-clas">Subject</Label>
                  <Select onValueChange={setSubject}>
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
                  <Label htmlFor="test-date-clas">Test Date</Label>
                  <Input 
                    id="test-date-clas" 
                    type="date" 
                    onChange={(e) => setTestDate(e.target.value)}
                  />
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="result-file-clas">Upload Results CSV</Label>
                  <Input 
                    id="result-file-clas" 
                    type="file" 
                    accept=".csv"
                    onChange={(e) => setFile(e.target.files?.[0] || null)}
                  />
                </div>
              </CardContent>
              <CardFooter>
                <Button className="w-full" onClick={handlePublishClassTestResults}>Publish Results</Button>
              </CardFooter>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </>
  );
};

export default PublishResults;
