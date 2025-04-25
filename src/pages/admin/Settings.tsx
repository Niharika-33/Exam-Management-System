
import React from "react";
import { Helmet } from "react-helmet";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Switch } from "@/components/ui/switch";
import { Textarea } from "@/components/ui/textarea";

const Settings = () => {
  return (
    <>
      <Helmet>
        <title>Settings</title>
      </Helmet>
      
      <div className="space-y-6">
        <h1 className="text-3xl font-bold tracking-tight">System Settings</h1>
        
        <Tabs defaultValue="general">
          <TabsList className="grid w-full grid-cols-3">
            <TabsTrigger value="general">General</TabsTrigger>
            <TabsTrigger value="exams">Exam Configuration</TabsTrigger>
            <TabsTrigger value="notifications">Notifications</TabsTrigger>
          </TabsList>
          
          <TabsContent value="general" className="space-y-4 mt-6">
            <Card>
              <CardHeader>
                <CardTitle>Academic Session</CardTitle>
                <CardDescription>
                  Configure the current academic session and related settings
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="current-session">Current Academic Session</Label>
                  <Input id="current-session" defaultValue="Spring 2023" />
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="session-start">Session Start Date</Label>
                  <Input id="session-start" type="date" defaultValue="2023-01-15" />
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="session-end">Session End Date</Label>
                  <Input id="session-end" type="date" defaultValue="2023-05-30" />
                </div>
              </CardContent>
              <CardFooter>
                <Button>Save Changes</Button>
              </CardFooter>
            </Card>
            
            <Card>
              <CardHeader>
                <CardTitle>System Configuration</CardTitle>
                <CardDescription>
                  Configure general system settings
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-center justify-between">
                  <div className="space-y-0.5">
                    <Label htmlFor="maintenance-mode">Maintenance Mode</Label>
                    <p className="text-sm text-muted-foreground">
                      Put the system in maintenance mode
                    </p>
                  </div>
                  <Switch id="maintenance-mode" />
                </div>
                
                <div className="flex items-center justify-between">
                  <div className="space-y-0.5">
                    <Label htmlFor="user-registration">Allow User Registration</Label>
                    <p className="text-sm text-muted-foreground">
                      Enable or disable new user registrations
                    </p>
                  </div>
                  <Switch id="user-registration" defaultChecked />
                </div>
              </CardContent>
              <CardFooter>
                <Button>Save Changes</Button>
              </CardFooter>
            </Card>
          </TabsContent>
          
          <TabsContent value="exams" className="space-y-4 mt-6">
            <Card>
              <CardHeader>
                <CardTitle>Exam Schedule Configuration</CardTitle>
                <CardDescription>
                  Configure exam schedules and deadlines
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="mid-semester-start">Mid-Semester Exam Start Date</Label>
                  <Input id="mid-semester-start" type="date" defaultValue="2023-03-15" />
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="mid-semester-end">Mid-Semester Exam End Date</Label>
                  <Input id="mid-semester-end" type="date" defaultValue="2023-03-25" />
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="end-semester-start">End-Semester Exam Start Date</Label>
                  <Input id="end-semester-start" type="date" defaultValue="2023-05-15" />
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="end-semester-end">End-Semester Exam End Date</Label>
                  <Input id="end-semester-end" type="date" defaultValue="2023-05-30" />
                </div>
              </CardContent>
              <CardFooter>
                <Button>Save Changes</Button>
              </CardFooter>
            </Card>
            
            <Card>
              <CardHeader>
                <CardTitle>Revaluation Configuration</CardTitle>
                <CardDescription>
                  Configure settings for revaluation process
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="revaluation-deadline">Revaluation Request Deadline (days after result)</Label>
                  <Input id="revaluation-deadline" type="number" defaultValue="7" />
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="revaluation-fee">Revaluation Fee (INR)</Label>
                  <Input id="revaluation-fee" type="number" defaultValue="500" />
                </div>
                
                <div className="flex items-center justify-between">
                  <div className="space-y-0.5">
                    <Label htmlFor="allow-revaluation">Allow Revaluation Requests</Label>
                    <p className="text-sm text-muted-foreground">
                      Enable or disable revaluation requests
                    </p>
                  </div>
                  <Switch id="allow-revaluation" defaultChecked />
                </div>
              </CardContent>
              <CardFooter>
                <Button>Save Changes</Button>
              </CardFooter>
            </Card>
          </TabsContent>
          
          <TabsContent value="notifications" className="space-y-4 mt-6">
            <Card>
              <CardHeader>
                <CardTitle>Email Notifications</CardTitle>
                <CardDescription>
                  Configure system email notifications
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-center justify-between">
                  <div className="space-y-0.5">
                    <Label htmlFor="result-notifications">Result Publication Notifications</Label>
                    <p className="text-sm text-muted-foreground">
                      Send email when new results are published
                    </p>
                  </div>
                  <Switch id="result-notifications" defaultChecked />
                </div>
                
                <div className="flex items-center justify-between">
                  <div className="space-y-0.5">
                    <Label htmlFor="schedule-notifications">Exam Schedule Notifications</Label>
                    <p className="text-sm text-muted-foreground">
                      Send email when exam schedules are published
                    </p>
                  </div>
                  <Switch id="schedule-notifications" defaultChecked />
                </div>
                
                <div className="flex items-center justify-between">
                  <div className="space-y-0.5">
                    <Label htmlFor="revaluation-notifications">Revaluation Status Notifications</Label>
                    <p className="text-sm text-muted-foreground">
                      Send email when revaluation status changes
                    </p>
                  </div>
                  <Switch id="revaluation-notifications" defaultChecked />
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="email-footer">Email Footer Text</Label>
                  <Textarea 
                    id="email-footer" 
                    defaultValue="This is an automated message from the Exam Management System. Please do not reply to this email."
                    className="min-h-[100px]"
                  />
                </div>
              </CardContent>
              <CardFooter>
                <Button>Save Changes</Button>
              </CardFooter>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </>
  );
};

export default Settings;
