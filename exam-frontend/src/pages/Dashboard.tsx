
import React from "react";
import { useAuth } from "@/context/AuthContext";
import { Helmet } from "react-helmet";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "@/components/ui/tabs";
import {
  Activity,
  BookOpen,
  Calendar,
  ClipboardList,
  FileText,
  GraduationCap,
  RefreshCw,
  User,
  Users,
} from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Separator } from "@/components/ui/separator";
import { Button } from "@/components/ui/button";

interface StatCardProps {
  title: string;
  value: string | number;
  description?: string;
  icon: React.ReactNode;
}

const StatCard: React.FC<StatCardProps> = ({
  title,
  value,
  description,
  icon,
}) => (
  <Card className="overflow-hidden border-none shadow-md transition-all hover:shadow-lg">
    <CardHeader className="flex flex-row items-center justify-between pb-2 pt-6">
      <CardTitle className="text-sm font-medium">{title}</CardTitle>
      <div className="rounded-md bg-primary/10 p-2 text-primary">{icon}</div>
    </CardHeader>
    <CardContent>
      <div className="text-2xl font-bold">{value}</div>
      {description && (
        <p className="mt-1 text-xs text-muted-foreground">{description}</p>
      )}
    </CardContent>
  </Card>
);

const ExamItem: React.FC<{
  title: string;
  date: string;
  type: string;
  status: "upcoming" | "ongoing" | "completed";
}> = ({ title, date, type, status }) => {
  const statusMap = {
    upcoming: "bg-blue-100 text-blue-600 dark:bg-blue-900/20 dark:text-blue-400",
    ongoing: "bg-green-100 text-green-600 dark:bg-green-900/20 dark:text-green-400",
    completed: "bg-gray-100 text-gray-600 dark:bg-gray-800 dark:text-gray-400",
  };

  const statusLabels = {
    upcoming: "Upcoming",
    ongoing: "In Progress",
    completed: "Completed",
  };

  return (
    <div className="flex items-center justify-between rounded-lg border p-4 transition-all hover:bg-accent/50">
      <div className="flex flex-col">
        <div className="font-medium">{title}</div>
        <div className="flex items-center gap-2 text-sm text-muted-foreground">
          <span>{date}</span>
          <span>•</span>
          <span>{type}</span>
        </div>
      </div>
      <Badge
        variant="outline"
        className={`${statusMap[status]} border-none`}
      >
        {statusLabels[status]}
      </Badge>
    </div>
  );
};

const AnnouncementItem: React.FC<{
  title: string;
  date: string;
  content: string;
}> = ({ title, date, content }) => (
  <div className="rounded-lg border p-4 transition-all hover:bg-accent/50">
    <div className="flex items-center justify-between">
      <h3 className="font-medium">{title}</h3>
      <span className="text-xs text-muted-foreground">{date}</span>
    </div>
    <p className="mt-1 text-sm text-muted-foreground">{content}</p>
  </div>
);

const Dashboard: React.FC = () => {
  const { user } = useAuth();
  
  if (!user) {
    return null;
  }

  // Extract just the first name from the full name for a cleaner greeting
  const firstName = user.name.split(' ')[0];

  // Dashboard content based on user role
  let content;

  if (user.role === "student") {
    content = (
      <>
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          <StatCard
            title="Upcoming Exams"
            value={3}
            icon={<Calendar className="h-4 w-4" />}
          />
          
          <StatCard
            title="Pending Revaluations"
            value={1}
            icon={<RefreshCw className="h-4 w-4" />}
          />
          <StatCard
            title="Subjects"
            value={6}
            description="Current semester"
            icon={<BookOpen className="h-4 w-4" />}
          />
        </div>

        <div className="mt-6 grid gap-6 md:grid-cols-2">
          <Card className="col-span-2">
            <CardHeader>
              <CardTitle className="flex items-center">
                <Calendar className="mr-2 h-5 w-5" />
                Upcoming Exams
              </CardTitle>
              <CardDescription>
                Your schedule for the next 30 days
              </CardDescription>
            </CardHeader>
            <CardContent>
              <ScrollArea className="h-[300px] pr-4">
                <div className="space-y-3">
                  <ExamItem
                    title="Mathematics - Mid Semester"
                    date="Oct 15, 2023 • 09:00 AM"
                    type="Internal"
                    status="upcoming"
                  />
                  <ExamItem
                    title="Computer Science - CLAS Test"
                    date="Oct 18, 2023 • 02:00 PM"
                    type="Internal"
                    status="upcoming"
                  />
                  <ExamItem
                    title="Physics - Mid Semester"
                    date="Oct 20, 2023 • 10:30 AM"
                    type="Internal"
                    status="upcoming"
                  />
                  <ExamItem
                    title="Chemistry - CLAS Test"
                    date="Oct 22, 2023 • 11:00 AM"
                    type="Internal"
                    status="upcoming"
                  />
                  <ExamItem
                    title="English - Mid Semester"
                    date="Oct 25, 2023 • 03:00 PM"
                    type="Internal"
                    status="upcoming"
                  />
                </div>
              </ScrollArea>
            </CardContent>
          </Card>

          
        </div>
      </>
    );
  } else if (user.role === "faculty") {
    content = (
      <>
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
          <StatCard
            title="Pending Syllabus"
            value={2}
            description="Need to be published"
            icon={<BookOpen className="h-4 w-4" />}
          />
          <StatCard
            title="Upcoming Tests"
            value={5}
            icon={<Calendar className="h-4 w-4" />}
          />
          <StatCard
            title="Results to Publish"
            value={3}
            icon={<ClipboardList className="h-4 w-4" />}
          />
          <StatCard
            title="Students"
            value={120}
            description="Across all subjects"
            icon={<Users className="h-4 w-4" />}
          />
        </div>

        <div className="mt-6">
          <Tabs defaultValue="syllabus">
            <TabsList className="mb-4">
              <TabsTrigger value="syllabus">Syllabus</TabsTrigger>
              <TabsTrigger value="tests">Upcoming Tests</TabsTrigger>
              <TabsTrigger value="results">Results</TabsTrigger>
            </TabsList>
            <TabsContent value="syllabus">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <BookOpen className="mr-2 h-5 w-5" />
                    Syllabus Management
                  </CardTitle>
                  <CardDescription>
                    Manage and publish syllabi for your subjects
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="rounded-lg border p-4">
                      <div className="flex justify-between">
                        <div>
                          <h3 className="font-medium">Mathematics - MTH101</h3>
                          <p className="text-sm text-muted-foreground">
                            Mid-Semester Syllabus
                          </p>
                        </div>
                        <Badge variant="outline" className="bg-yellow-100 text-yellow-700 border-none">
                          Draft
                        </Badge>
                      </div>
                      <div className="mt-4">
                        <Button size="sm">Publish</Button>
                      </div>
                    </div>
                    
                    <div className="rounded-lg border p-4">
                      <div className="flex justify-between">
                        <div>
                          <h3 className="font-medium">Computer Science - CSC202</h3>
                          <p className="text-sm text-muted-foreground">
                            End-Semester Syllabus
                          </p>
                        </div>
                        <Badge variant="outline" className="bg-red-100 text-red-700 border-none">
                          Not Started
                        </Badge>
                      </div>
                      <div className="mt-4">
                        <Button size="sm" variant="outline">Create</Button>
                      </div>
                    </div>
                    
                    <div className="rounded-lg border p-4">
                      <div className="flex justify-between">
                        <div>
                          <h3 className="font-medium">Physics - PHY101</h3>
                          <p className="text-sm text-muted-foreground">
                            Mid-Semester Syllabus
                          </p>
                        </div>
                        <Badge variant="outline" className="bg-green-100 text-green-700 border-none">
                          Published
                        </Badge>
                      </div>
                      <div className="mt-4">
                        <Button size="sm" variant="outline">Edit</Button>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
            
            <TabsContent value="tests">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <ClipboardList className="mr-2 h-5 w-5" />
                    Upcoming Tests
                  </CardTitle>
                  <CardDescription>
                    Manage upcoming class tests and assessments
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <ExamItem
                      title="Mathematics - CLAS Test 2"
                      date="Oct 18, 2023 • 10:00 AM"
                      type="Internal"
                      status="upcoming"
                    />
                    <ExamItem
                      title="Computer Science - Mid Semester"
                      date="Oct 20, 2023 • 02:00 PM"
                      type="Internal"
                      status="upcoming"
                    />
                    <ExamItem
                      title="Physics - CLAS Test 3"
                      date="Oct 25, 2023 • 11:30 AM"
                      type="Internal"
                      status="upcoming"
                    />
                  </div>
                  <div className="mt-4">
                    <Button>Create New Test</Button>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
            
            <TabsContent value="results">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <GraduationCap className="mr-2 h-5 w-5" />
                    Results Management
                  </CardTitle>
                  <CardDescription>
                    Manage and publish results for your subjects
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="rounded-lg border p-4">
                      <div className="flex justify-between">
                        <div>
                          <h3 className="font-medium">Mathematics - CLAS Test 1</h3>
                          <p className="text-sm text-muted-foreground">
                            30 students
                          </p>
                        </div>
                        <Badge variant="outline" className="bg-yellow-100 text-yellow-700 border-none">
                          Ready to Publish
                        </Badge>
                      </div>
                      <div className="mt-4">
                        <Button size="sm">Publish</Button>
                      </div>
                    </div>
                    
                    <div className="rounded-lg border p-4">
                      <div className="flex justify-between">
                        <div>
                          <h3 className="font-medium">Computer Science - CLAS Test 1</h3>
                          <p className="text-sm text-muted-foreground">
                            45 students
                          </p>
                        </div>
                        <Badge variant="outline" className="bg-green-100 text-green-700 border-none">
                          Published
                        </Badge>
                      </div>
                      <div className="mt-4">
                        <Button size="sm" variant="outline">View</Button>
                      </div>
                    </div>
                    
                    <div className="rounded-lg border p-4">
                      <div className="flex justify-between">
                        <div>
                          <h3 className="font-medium">Physics - Mid Semester</h3>
                          <p className="text-sm text-muted-foreground">
                            28 students
                          </p>
                        </div>
                        <Badge variant="outline" className="bg-blue-100 text-blue-700 border-none">
                          In Progress
                        </Badge>
                      </div>
                      <div className="mt-4">
                        <Button size="sm" variant="outline">Continue</Button>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>
        </div>
      </>
    );
  } else if (user.role === "admin") {
    content = (
      <>
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
          <StatCard
            title="Pending Issues"
            value={4}
            description="Need attention"
            icon={<Activity className="h-4 w-4" />}
          />
          <StatCard
            title="Revaluation Requests"
            value={12}
            description="2 new requests"
            icon={<RefreshCw className="h-4 w-4" />}
          />
          <StatCard
            title="Upcoming Exams"
            value={8}
            description="Next 30 days"
            icon={<Calendar className="h-4 w-4" />}
          />
          <StatCard
            title="Total Students"
            value={850}
            icon={<User className="h-4 w-4" />}
          />
        </div>

        <div className="mt-6 grid gap-6 md:grid-cols-2">
          <Card className="col-span-1">
            <CardHeader>
              <CardTitle className="flex items-center">
                <ClipboardList className="mr-2 h-5 w-5" />
                Exam Schedule
              </CardTitle>
              <CardDescription>
                Manage upcoming examination schedules
              </CardDescription>
            </CardHeader>
            <CardContent>
              <ScrollArea className="h-[300px] pr-4">
                <div className="space-y-3">
                  <ExamItem
                    title="Mid-Semester Examinations"
                    date="Oct 15-25, 2023"
                    type="Internal"
                    status="upcoming"
                  />
                  <ExamItem
                    title="CLAS Test Week"
                    date="Nov 5-10, 2023"
                    type="Internal"
                    status="upcoming"
                  />
                  <ExamItem
                    title="End-Semester Examinations"
                    date="Dec 1-15, 2023"
                    type="External"
                    status="upcoming"
                  />
                  <ExamItem
                    title="Supplementary Examinations"
                    date="Jan 10-20, 2024"
                    type="External"
                    status="upcoming"
                  />
                </div>
              </ScrollArea>
              <Separator className="my-4" />
              <div className="flex justify-between">
                <Button variant="outline">View All</Button>
                <Button>Create Schedule</Button>
              </div>
            </CardContent>
          </Card>

          <Card className="col-span-1">
            <CardHeader>
              <CardTitle className="flex items-center">
                <Activity className="mr-2 h-5 w-5" />
                Recent Issues
              </CardTitle>
              <CardDescription>
                Issues reported by students that need attention
              </CardDescription>
            </CardHeader>
            <CardContent>
              <ScrollArea className="h-[300px] pr-4">
                <div className="space-y-3">
                  <div className="rounded-lg border p-4">
                    <div className="flex items-center justify-between">
                      <h3 className="font-medium">Incorrect Roll Number</h3>
                      <Badge className="bg-red-100 text-red-600 border-none">Urgent</Badge>
                    </div>
                    <p className="mt-1 text-sm text-muted-foreground">
                      Student reported incorrect roll number on Physics exam paper.
                    </p>
                    <div className="mt-2 text-xs text-muted-foreground">
                      Reported by: John Doe - 1 hour ago
                    </div>
                  </div>
                  
                  <div className="rounded-lg border p-4">
                    <div className="flex items-center justify-between">
                      <h3 className="font-medium">Missing Question</h3>
                      <Badge className="bg-yellow-100 text-yellow-600 border-none">Medium</Badge>
                    </div>
                    <p className="mt-1 text-sm text-muted-foreground">
                      Question 5 was missing from Mathematics mid-term paper.
                    </p>
                    <div className="mt-2 text-xs text-muted-foreground">
                      Reported by: Jane Smith - 3 hours ago
                    </div>
                  </div>
                  
                  <div className="rounded-lg border p-4">
                    <div className="flex items-center justify-between">
                      <h3 className="font-medium">Seating Issue</h3>
                      <Badge className="bg-blue-100 text-blue-600 border-none">Low</Badge>
                    </div>
                    <p className="mt-1 text-sm text-muted-foreground">
                      Student was assigned incorrect seating location.
                    </p>
                    <div className="mt-2 text-xs text-muted-foreground">
                      Reported by: Alex Wilson - 1 day ago
                    </div>
                  </div>
                  
                  <div className="rounded-lg border p-4">
                    <div className="flex items-center justify-between">
                      <h3 className="font-medium">Marking Discrepancy</h3>
                      <Badge className="bg-red-100 text-red-600 border-none">Urgent</Badge>
                    </div>
                    <p className="mt-1 text-sm text-muted-foreground">
                      Multiple students reporting incorrect marking in Computer Science.
                    </p>
                    <div className="mt-2 text-xs text-muted-foreground">
                      Reported by: Multiple Students - 2 days ago
                    </div>
                  </div>
                </div>
              </ScrollArea>
              <Separator className="my-4" />
              <div className="flex justify-between">
                <Button variant="outline">View All</Button>
                <Button>Resolve Issues</Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </>
    );
  }

  return (
    <>
      <Helmet>
        <title>Dashboard | Exam Management System</title>
      </Helmet>
      
      <div className="animate-fade-in">
        <div className="mb-6">
          <h1 className="text-3xl font-bold tracking-tight">Dashboard</h1>
          {/* <p className="mt-1 text-muted-foreground">
            Welcome back, {firstName}! Here's what's happening with your exams.
          </p> */}
        </div>
        
        {content}
      </div>
    </>
  );
};

export default Dashboard;
