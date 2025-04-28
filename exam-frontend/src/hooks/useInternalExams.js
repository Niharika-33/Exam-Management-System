import { useState, useEffect } from "react";
import { useToast } from "@/hooks/use-toast";

export const useInternalExams = () => {
  const { toast } = useToast();
  const [activeTab, setActiveTab] = useState("mid-semester");
  const [exams, setExams] = useState({
    "mid-semester": [],
    "class-test": []
  });

  const fetchExams = async () => {
    try {
      const res = await fetch("http://localhost:8080/exams/list", {
        headers: { "Content-Type": "application/json" },
      });
      const examList = await res.json();

      // categorize by type only
      const categorized = { "mid-semester": [], "class-test": [] };

      examList.forEach((exam) => {
        const normalized = {
          ...exam,
          subjectCode: exam.subject,        // backend “subject”
          syllabusDetails: exam.syllabusDetails,
          totalMarks: exam.totalMarks,
        };
        if (exam.examType === "Mid") {
          categorized["mid-semester"].push(normalized);
        } else if (exam.examType === "CLA") {
          categorized["class-test"].push(normalized);
        }
      });

      setExams(categorized);
    } catch (err) {
      console.error("Failed to fetch exams", err);
      toast({ title: "Error", description: "Could not load exams." });
    }
  };

  useEffect(() => {
    fetchExams();
  }, []);

  // Action handlers (toasts only)
  const handleViewDetails = (subject) =>
    toast({ title: "Exam Details", description: `Viewing details for ${subject}` });
  const handleViewResults = (subject) =>
    toast({ title: "Results", description: `Viewing results for ${subject}` });
  const handleViewAnswerKey = (subject) =>
    toast({ title: "Answer Key", description: `Viewing answer key for ${subject}` });

  // returns the list for the currently active main tab
  const getExamList = () => exams[activeTab] || [];

  return {
    activeTab,
    setActiveTab,
    getExamList,
    handleViewDetails,
    handleViewResults,
    handleViewAnswerKey,
  };
};
