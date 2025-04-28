import React, { useState, useRef } from "react";
import { Helmet } from "react-helmet";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { useToast } from "@/hooks/use-toast";

const PublishResults = () => {
  const { toast } = useToast();
  const [subject, setSubject] = useState("");
  const [semester, setSemester] = useState("");
  const [file, setFile] = useState<File | null>(null);
  const [testDate, setTestDate] = useState("");

  const fileInputMidRef = useRef<HTMLInputElement>(null);
  const fileInputClasRef = useRef<HTMLInputElement>(null);

  const handlePublishMidSemesterResults = async () => {
    if (!subject || !semester || !file) {
      toast({
        title: "Missing Fields",
        description: "Please fill in all required fields",
        variant: "destructive",
      });
      return;
    }

    const formData = new FormData();
    formData.append("file", file);
    formData.append("subject", subject);
    formData.append("examType", "mid-semester");
    formData.append("additionalInfo", semester);

    try {
      const response = await fetch("http://localhost:8080/result/upload", {
        method: "POST",
        body: formData,
      });

      if (response.ok) {
        toast({
          title: "Results Published",
          description: `${subject} results for semester ${semester} have been published successfully.`,
          variant: "success",
        });
      } else {
        toast({
          title: "Error",
          description: "Failed to publish results",
          variant: "destructive",
        });
      }
    } catch (error) {
      console.error(error);
      toast({
        title: "Error",
        description: "Something went wrong",
        variant: "destructive",
      });
    }

    setSubject("");
    setSemester("");
    setFile(null);
    if (fileInputMidRef.current) {
      fileInputMidRef.current.value = "";
    }
  };

  const handlePublishClassTestResults = async () => {
    if (!subject || !testDate || !file) {
      toast({
        title: "Missing Fields",
        description: "Please fill in all required fields",
        variant: "destructive",
      });
      return;
    }

    const formData = new FormData();
    formData.append("file", file);
    formData.append("subject", subject);
    formData.append("examType", "class-test");
    formData.append("additionalInfo", testDate);

    try {
      const response = await fetch("http://localhost:8080/result/upload", {
        method: "POST",
        body: formData,
      });

      if (response.ok) {
        toast({
          title: "Results Published",
          description: `${subject} class test results for ${testDate} have been published successfully.`,
          variant: "success",
        });
      } else {
        toast({
          title: "Error",
          description: "Failed to publish results",
          variant: "destructive",
        });
      }
    } catch (error) {
      console.error(error);
      toast({
        title: "Error",
        description: "Something went wrong",
        variant: "destructive",
      });
    }

    setSubject("");
    setTestDate("");
    setFile(null);
    if (fileInputClasRef.current) {
      fileInputClasRef.current.value = "";
    }
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

          {/* Mid-Semester Tab */}
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
                  <Select value={subject} onValueChange={setSubject}>
                    <SelectTrigger id="subject-mid">
                      <SelectValue placeholder="Select a subject" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="computer-networks">
                        Computer Networks
                      </SelectItem>
                      <SelectItem value="data-structures">
                        Data Structures
                      </SelectItem>
                      <SelectItem value="database-systems">
                        Database Systems
                      </SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="semester">Semester</Label>
                  <Select value={semester} onValueChange={setSemester}>
                    <SelectTrigger id="semester">
                      <SelectValue placeholder="Select semester" />
                    </SelectTrigger>
                    <SelectContent>
                      {[...Array(8)].map((_, idx) => (
                        <SelectItem key={idx + 1} value={(idx + 1).toString()}>
                          Semester {idx + 1}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="result-file-mid">Upload Results CSV</Label>
                  <Input
                    id="result-file-mid"
                    type="file"
                    accept=".csv"
                    ref={fileInputMidRef}
                    onChange={(e) => {
                      if (e.target.files?.length) {
                        setFile(e.target.files[0]);
                      }
                    }}
                  />
                </div>
              </CardContent>
              <CardFooter>
                <Button
                  className="w-full"
                  onClick={handlePublishMidSemesterResults}
                >
                  Publish Results
                </Button>
              </CardFooter>
            </Card>
          </TabsContent>

          {/* Class Test Tab */}
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
                  <Select value={subject} onValueChange={setSubject}>
                    <SelectTrigger id="subject-clas">
                      <SelectValue placeholder="Select a subject" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="computer-networks">
                        Computer Networks
                      </SelectItem>
                      <SelectItem value="data-structures">
                        Data Structures
                      </SelectItem>
                      <SelectItem value="database-systems">
                        Database Systems
                      </SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="test-date-clas">Test Date</Label>
                  <Input
                    id="test-date-clas"
                    type="date"
                    value={testDate}
                    onChange={(e) => setTestDate(e.target.value)}
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="result-file-clas">Upload Results CSV</Label>
                  <Input
                    id="result-file-clas"
                    type="file"
                    accept=".csv"
                    ref={fileInputClasRef}
                    onChange={(e) => {
                      if (e.target.files?.length) {
                        setFile(e.target.files[0]);
                      }
                    }}
                  />
                </div>
              </CardContent>
              <CardFooter>
                <Button
                  className="w-full"
                  onClick={handlePublishClassTestResults}
                >
                  Publish Results
                </Button>
              </CardFooter>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </>
  );
};

export default PublishResults;
