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
    getExamList,
    handleViewDetails,
    handleViewResults,
    handleViewAnswerKey,
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

        <Tabs value={activeTab} onValueChange={setActiveTab} defaultValue="mid-semester">
          <TabsList className="grid w-full grid-cols-2">
            <TabsTrigger value="mid-semester">Mid-Semester Exams</TabsTrigger>
            <TabsTrigger value="class-test">Class Tests (CLAS)</TabsTrigger>
          </TabsList>

          {/* Mid-Semester */}
          <TabsContent value="mid-semester" className="space-y-4 mt-6">
            <QuickActionCards
              examType="mid-semester"
              onViewDetails={handleViewDetails}
              onViewResults={handleViewResults}
              showAnswerKey={false}
            />
            <ExamList
              title="Mid-Semester Examinations"
              description="View your mid-semester examinations"
              examList={getExamList()}
            />
          </TabsContent>

          {/* Class-Test */}
          <TabsContent value="class-test" className="space-y-4 mt-6">
            <QuickActionCards
              examType="class-test"
              onViewDetails={handleViewDetails}
              onViewResults={handleViewResults}
              onViewAnswerKey={handleViewAnswerKey}
              showAnswerKey={true}
            />
            <ExamList
              title="CLAS Test Schedule"
              description="View your class tests"
              examList={getExamList()}
            />
          </TabsContent>
        </Tabs>
      </div>
    </>
  );
};

export default InternalExams;
