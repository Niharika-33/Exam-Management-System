import React, { useState } from "react";
import { Helmet } from "react-helmet";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  BookOpen,
  Calendar,
  File,
  Eye,
  Download,
  AlertCircle,
} from "lucide-react";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";
import axios from "axios"; // Added axios import

// Defining Exam interface
interface Exam {
  id: number;
  subject: string;
  code: string;
  date: string;
  time: string;
  venue: string;
  status: string;
  result?: string; // Optional result field
}

const ExternalExams = () => {
  const { toast } = useToast();
  const [activeTab, setActiveTab] = useState("upcoming");
  const [showReportForm, setShowReportForm] = useState(false);
  const [studentId, setStudentId] = useState("");
  const [subjectCode, setSubjectCode] = useState(""); // Added subjectCode state
  const [description, setDescription] = useState("");
  const [statusMessage, setStatusMessage] = useState(""); // Added status message state

  const handleViewSyllabus = (subject: string) => {
    toast({
      title: "Viewing Syllabus",
      description: `Opening syllabus for ${subject}`,
    });
  };

  const handleDownload = (document: string) => {
    toast({
      title: "Downloading",
      description: `${document} is being downloaded...`,
    });
  };

  const handleReportIssue = () => {
    setShowReportForm(true);
  };

  // POST method to handle form submission

  const submitIssue = async (e) => {
    e.preventDefault();

    const issue = {
      studentId,
      subjectCode,
      description,
    };

    try {
      const response = await axios.post(
        "http://localhost:8080/issue/submit",
        issue
      );

      toast({
        description: "Issue reported successfully!",
        variant: "success",
      });

      // Reset form fields
      setStudentId("");
      setSubjectCode("");
      setDescription("");
    } catch (error) {
      toast({
        description: "Failed to report issue. Please try again later.",
        variant: "destructive",
      });
    }
  };

  const upcomingExams: Exam[] = [
    {
      id: 1,
      subject: "Data Structures & Algorithms",
      code: "CSE101",
      date: "Oct 15, 2023",
      time: "09:00 AM",
      venue: "Block A - Room 101",
      status: "Scheduled",
    },
    {
      id: 2,
      subject: "Computer Networks",
      code: "CSE201",
      date: "Oct 18, 2023",
      time: "02:00 PM",
      venue: "Block B - Room 205",
      status: "Scheduled",
    },
    {
      id: 3,
      subject: "Database Management Systems",
      code: "CSE301",
      date: "Oct 20, 2023",
      time: "10:30 AM",
      venue: "Block C - Room 310",
      status: "Scheduled",
    },
  ];

  return (
    <>
      <Helmet>
        <title>External Exams</title>
      </Helmet>

      <div className="space-y-6">
        <div className="flex flex-col gap-2">
          <h1 className="text-3xl font-bold tracking-tight">External Exams</h1>
          <p className="text-muted-foreground">
            View your end-semester examination details and syllabi
          </p>
        </div>

        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">
                View Syllabus
              </CardTitle>
              <BookOpen className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <p className="text-xs text-muted-foreground mb-4">
                Check the syllabus published by faculty for end-semester exams.
              </p>
              <Button
                size="sm"
                variant="outline"
                className="w-full"
                onClick={() => handleViewSyllabus("All Subjects")}
              >
                <Eye className="mr-1 h-3 w-3" /> View Syllabus
              </Button>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">
                Date Sheet & Seating
              </CardTitle>
              <Calendar className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <p className="text-xs text-muted-foreground mb-4">
                Check the date sheet and seating arrangements for end-semester
                exams.
              </p>
              <Button
                size="sm"
                variant="outline"
                className="w-full"
                onClick={() =>
                  handleDownload("Date Sheet and Seating Arrangement")
                }
              >
                <Download className="mr-1 h-3 w-3" /> Download
              </Button>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">
                Report Issues
              </CardTitle>
              <AlertCircle className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <p className="text-xs text-muted-foreground mb-4">
                Submit issues related to exams (incorrect bubbling, roll number,
                etc.)
              </p>
              <Button
                size="sm"
                variant="outline"
                className="w-full"
                onClick={handleReportIssue}
              >
                <File className="mr-1 h-3 w-3" /> Report Issue
              </Button>
            </CardContent>
          </Card>
        </div>

        {/* Issue Form Modal */}
        {showReportForm && (
          <Card className="mt-6 bg-gray-50 border shadow-md">
            <CardHeader>
              <CardTitle>Report an Issue</CardTitle>
              <CardDescription>
                Please provide your Student ID and issue description below.
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div>
                <label className="block text-sm font-medium">Student ID</label>
                <Input
                  value={studentId}
                  onChange={(e) => setStudentId(e.target.value)}
                  placeholder="e.g., AP2023001"
                />
              </div>
              <div>
                <label className="block text-sm font-medium">
                  Subject Code
                </label>
                <Input
                  value={subjectCode}
                  onChange={(e) => setSubjectCode(e.target.value)}
                  placeholder="e.g., CSE101"
                />
              </div>
              <div>
                <label className="block text-sm font-medium">Description</label>
                <Textarea
                  rows={4}
                  value={description}
                  onChange={(e) => setDescription(e.target.value)}
                  placeholder="Describe the issue you are facing..."
                />
              </div>
              <Button onClick={submitIssue}>Submit</Button>
              {statusMessage && <p>{statusMessage}</p>}
            </CardContent>
          </Card>
        )}

        <Tabs value={activeTab} onValueChange={setActiveTab}>
          <TabsList>
            <TabsTrigger value="upcoming">Upcoming Exams</TabsTrigger>
          </TabsList>

          <TabsContent value="upcoming">
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Subject</TableHead>
                  <TableHead>Code</TableHead>
                  <TableHead>Date</TableHead>
                  <TableHead>Time</TableHead>
                  <TableHead>Venue</TableHead>
                  <TableHead>Status</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {upcomingExams.map((exam) => (
                  <TableRow key={exam.id}>
                    <TableCell>{exam.subject}</TableCell>
                    <TableCell>{exam.code}</TableCell>
                    <TableCell>{exam.date}</TableCell>
                    <TableCell>{exam.time}</TableCell>
                    <TableCell>{exam.venue}</TableCell>
                    <TableCell>
                      <Badge variant="outline">{exam.status}</Badge>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TabsContent>
        </Tabs>
      </div>
    </>
  );
};

export default ExternalExams;
