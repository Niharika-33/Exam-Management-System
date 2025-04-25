import React, { useState } from "react";
import { Helmet } from "react-helmet";
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "@/components/ui/tabs";
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

interface Exam {
  id: number;
  subject: string;
  code: string;
  date: string;
  time: string;
  venue: string;
  status: string;
  result?: string; // Add result as an optional field
}

const ExternalExams = () => {
  const { toast } = useToast();
  const [activeTab, setActiveTab] = useState("upcoming");
  const [showReportForm, setShowReportForm] = useState(false);
  const [studentId, setStudentId] = useState("");
  const [description, setDescription] = useState("");

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

  const handleFormSubmit = () => {
    if (studentId.trim() === "" || description.trim() === "") {
      toast({
        title: "Incomplete Fields",
        description: "Please fill in all fields before submitting.",
      });
      return;
    }

    toast({
      title: "Issue Submitted",
      description: "Your issue has been reported successfully.",
    });

    setStudentId("");
    setDescription("");
    setShowReportForm(false);
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

  const pastExams: Exam[] = [
    {
      id: 1,
      subject: "Operating Systems",
      code: "CSE202",
      date: "Sep 15, 2023",
      time: "09:00 AM",
      venue: "Block A - Room 101",
      status: "Completed",
      result: "78/100",
    },
    {
      id: 2,
      subject: "Software Engineering",
      code: "CSE302",
      date: "Sep 18, 2023",
      time: "02:00 PM",
      venue: "Block B - Room 205",
      status: "Completed",
      result: "82/100",
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
              <CardTitle className="text-sm font-medium">View Syllabus</CardTitle>
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
              <CardTitle className="text-sm font-medium">Date Sheet & Seating</CardTitle>
              <Calendar className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <p className="text-xs text-muted-foreground mb-4">
                Check the date sheet and seating arrangements for end-semester exams.
              </p>
              <Button
                size="sm"
                variant="outline"
                className="w-full"
                onClick={() => handleDownload("Date Sheet and Seating Arrangement")}
              >
                <Download className="mr-1 h-3 w-3" /> Download
              </Button>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Report Issues</CardTitle>
              <AlertCircle className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <p className="text-xs text-muted-foreground mb-4">
                Submit issues related to exams (incorrect bubbling, roll number, etc.)
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
                <label className="block text-sm font-medium">Description</label>
                <Textarea
                  rows={4}
                  value={description}
                  onChange={(e) => setDescription(e.target.value)}
                  placeholder="Describe the issue you are facing..."
                />
              </div>
              <div className="flex justify-end gap-2">
                <Button variant="outline" onClick={() => setShowReportForm(false)}>
                  Cancel
                </Button>
                <Button onClick={handleFormSubmit}>Submit</Button>
              </div>
            </CardContent>
          </Card>
        )}

        {/* Exam List */}
        <Card className="mt-6">
          <CardHeader>
            <CardTitle>Examination Schedule</CardTitle>
            <CardDescription>
              View your upcoming and past external examinations
            </CardDescription>
            <Tabs defaultValue="upcoming" onValueChange={setActiveTab}>
              <TabsList>
                <TabsTrigger value="upcoming">Upcoming Exams</TabsTrigger>
                <TabsTrigger value="past">Past Exams</TabsTrigger>
              </TabsList>
            </Tabs>
          </CardHeader>
          <CardContent>
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Subject</TableHead>
                  <TableHead>Date & Time</TableHead>
                  <TableHead>Venue</TableHead>
                  <TableHead>Status</TableHead>
                  <TableHead className="text-right">Actions</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {(activeTab === "upcoming" ? upcomingExams : pastExams).map((exam) => (
                  <TableRow key={exam.id}>
                    <TableCell>
                      <div className="font-medium">{exam.subject}</div>
                      <div className="text-sm text-muted-foreground">{exam.code}</div>
                    </TableCell>
                    <TableCell>
                      {exam.date}
                      <div className="text-sm text-muted-foreground">{exam.time}</div>
                    </TableCell>
                    <TableCell>{exam.venue}</TableCell>
                    <TableCell>
                      <Badge
                        variant="outline"
                        className={`${
                          exam.status === "Completed"
                            ? "bg-green-100 text-green-700"
                            : "bg-blue-100 text-blue-700"
                        } border-none`}
                      >
                        {exam.status}
                      </Badge>

                      {/* ✅ Show result only if the exam has 'result' field */}
                      {exam.status === "Completed" && exam.result && (
                        <div className="text-sm font-medium mt-1">{exam.result}</div>
                      )}
                    </TableCell>
                    <TableCell className="text-right">
                      {exam.status === "Scheduled" && (
                        <Button
                          size="xs"
                          variant="outline"
                          onClick={() => handleViewSyllabus(exam.subject)}
                        >
                          <BookOpen className="h-3 w-3 mr-1" /> Syllabus
                        </Button>
                      )}
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </CardContent>
        </Card>
      </div>
    </>
  );
};

export default ExternalExams;

// import React, { useState } from "react";
// import { Helmet } from "react-helmet";
// import { 
//   Tabs, 
//   TabsContent,
//   TabsList, 
//   TabsTrigger 
// } from "@/components/ui/tabs";
// import { Button } from "@/components/ui/button";
// import { 
//   Card, 
//   CardContent, 
//   CardDescription, 
//   CardHeader, 
//   CardTitle,
//   CardFooter 
// } from "@/components/ui/card";
// import { 
//   BookOpen, 
//   Calendar, 
//   ClipboardList, 
//   File, 
//   Eye, 
//   Download, 
//   AlertCircle 
// } from "lucide-react";
// import {
//   Table,
//   TableBody,
//   TableCell,
//   TableHead,
//   TableHeader,
//   TableRow,
// } from "@/components/ui/table";
// import { Badge } from "@/components/ui/badge";
// import { useToast } from "@/hooks/use-toast";

// const ExternalExams = () => {
//   const { toast } = useToast();
//   const [activeTab, setActiveTab] = useState("upcoming");

//   const handleViewSyllabus = (subject: string) => {
//     toast({
//       title: "Viewing Syllabus",
//       description: `Opening syllabus for ${subject}`,
//     });
//   };

//   const handleDownload = (document: string) => {
//     toast({
//       title: "Downloading",
//       description: `${document} is being downloaded...`,
//     });
//   };

//   const handleReportIssue = () => {
//     toast({
//       title: "Report Issue",
//       description: "Issue reporting form opened",
//     });
//   };

//   const upcomingExams = [
//     { 
//       id: 1, 
//       subject: "Data Structures & Algorithms", 
//       code: "CSE101", 
//       date: "Oct 15, 2023", 
//       time: "09:00 AM", 
//       venue: "Block A - Room 101",
//       status: "Scheduled"
//     },
//     { 
//       id: 2, 
//       subject: "Computer Networks", 
//       code: "CSE201", 
//       date: "Oct 18, 2023", 
//       time: "02:00 PM", 
//       venue: "Block B - Room 205",
//       status: "Scheduled"
//     },
//     { 
//       id: 3, 
//       subject: "Database Management Systems", 
//       code: "CSE301", 
//       date: "Oct 20, 2023", 
//       time: "10:30 AM", 
//       venue: "Block C - Room 310",
//       status: "Scheduled"
//     },
//   ];

//   const pastExams = [
//     { 
//       id: 1, 
//       subject: "Operating Systems", 
//       code: "CSE202", 
//       date: "Sep 15, 2023", 
//       time: "09:00 AM", 
//       venue: "Block A - Room 101",
//       status: "Completed",
//       result: "78/100"
//     },
//     { 
//       id: 2, 
//       subject: "Software Engineering", 
//       code: "CSE302", 
//       date: "Sep 18, 2023", 
//       time: "02:00 PM", 
//       venue: "Block B - Room 205",
//       status: "Completed",
//       result: "82/100"
//     },
//   ];

//   return (
//     <>
//       <Helmet>
//         <title>External Exams</title>
//       </Helmet>
      
//       <div className="space-y-6">
//         <div className="flex flex-col gap-2">
//           <h1 className="text-3xl font-bold tracking-tight">External Exams</h1>
//           <p className="text-muted-foreground">
//             View your end-semester examination details, results, and syllabi
//           </p>
//         </div>
        
//         <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
//           <Card>
//             <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
//               <CardTitle className="text-sm font-medium">View Syllabus</CardTitle>
//               <BookOpen className="h-4 w-4 text-muted-foreground" />
//             </CardHeader>
//             <CardContent>
//               <p className="text-xs text-muted-foreground mb-4">
//                 Check the syllabus published by faculty for end-semester exams.
//               </p>
//               <Button 
//                 size="sm" 
//                 variant="outline" 
//                 className="w-full"
//                 onClick={() => handleViewSyllabus("All Subjects")}
//               >
//                 <Eye className="mr-1 h-3 w-3" /> View Syllabus
//               </Button>
//             </CardContent>
//           </Card>
          
//           <Card>
//             <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
//               <CardTitle className="text-sm font-medium">Date Sheet & Seating</CardTitle>
//               <Calendar className="h-4 w-4 text-muted-foreground" />
//             </CardHeader>
//             <CardContent>
//               <p className="text-xs text-muted-foreground mb-4">
//                 Check the date sheet and seating arrangements for end-semester exams.
//               </p>
//               <Button 
//                 size="sm" 
//                 variant="outline" 
//                 className="w-full"
//                 onClick={() => handleDownload("Date Sheet and Seating Arrangement")}
//               >
//                 <Download className="mr-1 h-3 w-3" /> Download
//               </Button>
//             </CardContent>
//           </Card>
          
//           <Card>
//             <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
//               <CardTitle className="text-sm font-medium">Report Issues</CardTitle>
//               <AlertCircle className="h-4 w-4 text-muted-foreground" />
//             </CardHeader>
//             <CardContent>
//               <p className="text-xs text-muted-foreground mb-4">
//                 Submit issues related to exams (incorrect bubbling, roll number, etc.)
//               </p>
//               <Button 
//                 size="sm" 
//                 variant="outline" 
//                 className="w-full"
//                 onClick={handleReportIssue}
//               >
//                 <File className="mr-1 h-3 w-3" /> Report Issue
//               </Button>
//             </CardContent>
//           </Card>
          
//           <Card>
//             <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
//               <CardTitle className="text-sm font-medium">View Results</CardTitle>
//               <ClipboardList className="h-4 w-4 text-muted-foreground" />
//             </CardHeader>
//             <CardContent>
//               <p className="text-xs text-muted-foreground mb-4">
//                 View your end-semester exam results published by the exam department.
//               </p>
//               <Button 
//                 size="sm" 
//                 variant="outline" 
//                 className="w-full"
//                 onClick={() => toast({
//                   title: "Results",
//                   description: "Showing latest semester results",
//                 })}
//               >
//                 <Eye className="mr-1 h-3 w-3" /> View Results
//               </Button>
//             </CardContent>
//           </Card>
//         </div>

//         {/* Exam List Section */}
//         <Card className="mt-6">
//           <CardHeader>
//             <CardTitle>Examination Schedule</CardTitle>
//             <CardDescription>
//               View your upcoming and past external examinations
//             </CardDescription>
//             <Tabs defaultValue="upcoming" onValueChange={setActiveTab}>
//               <TabsList>
//                 <TabsTrigger value="upcoming">Upcoming Exams</TabsTrigger>
//                 <TabsTrigger value="past">Past Exams</TabsTrigger>
//               </TabsList>
//             </Tabs>
//           </CardHeader>
//           <CardContent>
//             <Table>
//               <TableHeader>
//                 <TableRow>
//                   <TableHead>Subject</TableHead>
//                   <TableHead>Date & Time</TableHead>
//                   <TableHead>Venue</TableHead>
//                   <TableHead>Status</TableHead>
//                   <TableHead className="text-right">Actions</TableHead>
//                 </TableRow>
//               </TableHeader>
//               <TableBody>
//                 {activeTab === "upcoming" ? (
//                   upcomingExams.map((exam) => (
//                     <TableRow key={exam.id}>
//                       <TableCell>
//                         <div className="font-medium">{exam.subject}</div>
//                         <div className="text-sm text-muted-foreground">{exam.code}</div>
//                       </TableCell>
//                       <TableCell>
//                         {exam.date}
//                         <div className="text-sm text-muted-foreground">{exam.time}</div>
//                       </TableCell>
//                       <TableCell>{exam.venue}</TableCell>
//                       <TableCell>
//                         <Badge variant="outline" className="bg-blue-100 text-blue-700 border-none">
//                           {exam.status}
//                         </Badge>
//                       </TableCell>
//                       <TableCell className="text-right">
//                         <div className="flex justify-end gap-2">
//                           <Button 
//                             size="xs" 
//                             variant="outline"
//                             onClick={() => handleViewSyllabus(exam.subject)}
//                           >
//                             <BookOpen className="h-3 w-3" /> Syllabus
//                           </Button>
//                         </div>
//                       </TableCell>
//                     </TableRow>
//                   ))
//                 ) : (
//                   pastExams.map((exam) => (
//                     <TableRow key={exam.id}>
//                       <TableCell>
//                         <div className="font-medium">{exam.subject}</div>
//                         <div className="text-sm text-muted-foreground">{exam.code}</div>
//                       </TableCell>
//                       <TableCell>
//                         {exam.date}
//                         <div className="text-sm text-muted-foreground">{exam.time}</div>
//                       </TableCell>
//                       <TableCell>{exam.venue}</TableCell>
//                       <TableCell>
//                         <Badge variant="outline" className="bg-green-100 text-green-700 border-none">
//                           {exam.status}
//                         </Badge>
//                         <div className="text-sm font-medium mt-1">{exam.result}</div>
//                       </TableCell>
//                       <TableCell className="text-right">
//                         <div className="flex justify-end gap-2">
//                           <Button 
//                             size="xs" 
//                             variant="outline"
//                             onClick={() => toast({
//                               title: "Result Details",
//                               description: `Viewing detailed results for ${exam.subject}`,
//                             })}
//                           >
//                             <Eye className="h-3 w-3" /> Result
//                           </Button>
//                         </div>
//                       </TableCell>
//                     </TableRow>
//                   ))
//                 )}
//               </TableBody>
//             </Table>
//           </CardContent>
//         </Card>
//       </div>
//     </>
//   );
// };

// export default ExternalExams;
