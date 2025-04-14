import React, { useState } from "react";
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
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "@/components/ui/tabs";
import { useToast } from "@/hooks/use-toast";

const PublishResults = () => {
  const { toast } = useToast();
  const [subject, setSubject] = useState("");
  const [year, setYear] = useState("");
  const [file, setFile] = useState<File | null>(null);
  const [testDate, setTestDate] = useState("");

  const handlePublishMidSemesterResults = () => {
    if (!subject || !year || !file) {
      toast({
        title: "Missing Fields",
        description: "Please fill in all required fields",
        variant: "destructive",
      });
      return;
    }

    toast({
      title: "Results Published",
      description: `${subject} results for year ${year} have been published successfully.`,
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

    toast({
      title: "Results Published",
      description: `${subject} class test results for ${testDate} have been published successfully.`,
      variant: "success",
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
                  <Label htmlFor="year">Year</Label>
                  <Select onValueChange={setYear}>
                    <SelectTrigger id="year">
                      <SelectValue placeholder="Select year" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="1">Year 1</SelectItem>
                      <SelectItem value="2">Year 2</SelectItem>
                      <SelectItem value="3">Year 3</SelectItem>
                      <SelectItem value="4">Year 4</SelectItem>
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
                <Button className="w-full" onClick={handlePublishMidSemesterResults}>
                  Publish Results
                </Button>
              </CardFooter>
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
                <Button className="w-full" onClick={handlePublishClassTestResults}>
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
