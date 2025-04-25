
import React from "react";
import { Helmet } from "react-helmet";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import QuickActionCards from "@/components/exams/QuickActionCards";
import ExamList from "@/components/exams/ExamList";
import { useInternalExams } from "@/hooks/useInternalExams";

const InternalExams = () => {
  const {
    activeTab,
    setActiveTab,
    activeSubTab,
    setActiveSubTab,
    handleViewSyllabus,
    handleViewDetails,
    handleViewResults,
    handleViewAnswerKey,
    getExamList
  } = useInternalExams();

  return (
    <>
      <Helmet>
        <title>Internal Exams</title>
      </Helmet>
      
      <div className="space-y-6">
        <div className="flex flex-col gap-2">
          <h1 className="text-3xl font-bold tracking-tight">Internal Exams</h1>
          <p className="text-muted-foreground">
            View your mid-semester examinations and class tests
          </p>
        </div>
        
        <Tabs defaultValue="mid-semester" value={activeTab} onValueChange={setActiveTab}>
          <TabsList className="grid w-full grid-cols-2">
            <TabsTrigger value="mid-semester">Mid-Semester Exams</TabsTrigger>
            <TabsTrigger value="class-test">Class Tests (CLAS)</TabsTrigger>
          </TabsList>
          
          <TabsContent value="mid-semester" className="space-y-4 mt-6">
            <QuickActionCards 
              examType="mid-semester"
              onViewSyllabus={handleViewSyllabus}
              onViewDetails={handleViewDetails}
              onViewResults={handleViewResults}
            />
            
            <ExamList
              title="Mid-Semester Examinations"
              description="View your upcoming and past mid-semester examinations"
              examList={getExamList()}
              activeSubTab={activeSubTab}
              onSubTabChange={setActiveSubTab}
              onViewSyllabus={handleViewSyllabus}
              onViewResults={handleViewResults}
            />
          </TabsContent>
          
          <TabsContent value="class-test" className="space-y-4 mt-6">
            <QuickActionCards 
              examType="class-test"
              onViewSyllabus={handleViewSyllabus}
              onViewDetails={handleViewDetails}
              onViewResults={handleViewResults}
            />
            
            <ExamList
              title="CLAS Test Schedule"
              description="View your upcoming and past class tests"
              examList={getExamList()}
              activeSubTab={activeSubTab}
              onSubTabChange={setActiveSubTab}
              onViewSyllabus={handleViewSyllabus}
              onViewResults={handleViewResults}
              onViewAnswerKey={handleViewAnswerKey}
              showAnswerKey={true}
            />
          </TabsContent>
        </Tabs>
      </div>
    </>
  );
};

export default InternalExams;
