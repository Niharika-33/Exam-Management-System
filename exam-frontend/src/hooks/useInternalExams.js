import { useState, useEffect } from "react";
import { useToast } from "@/hooks/use-toast";

export const useInternalExams = () => {
  const { toast } = useToast();
  const [activeTab, setActiveTab] = useState("mid-semester");
  const [activeSubTab, setActiveSubTab] = useState("upcoming");
  const [exams, setExams] = useState({
    "mid-semester": { upcoming: [], completed: [] },
    "class-test": { upcoming: [], completed: [] }
  });

  // Placeholder function to fetch exams (replace with API call)
  const fetchExams = async () => {
    try {
      // Example API call - replace with your real API
      // const response = await fetch("/api/exams");
      // const data = await response.json();
      // setExams(data);

      // Temporary: Empty dynamic structure for now
      setExams({
        "mid-semester": { upcoming: [], completed: [] },
        "class-test": { upcoming: [], completed: [] }
      });
    } catch (error) {
      console.error("Failed to fetch exams", error);
    }
  };

  useEffect(() => {
    fetchExams();
  }, []);

  const handleViewSyllabus = (subject) => {
    toast({
      title: "Viewing Syllabus",
      description: `Opening syllabus for ${subject}`,
    });
  };

  const handleViewDetails = (exam) => {
    toast({
      title: "Exam Details",
      description: `Viewing details for ${exam}`,
    });
  };

  const handleViewResults = (subject) => {
    toast({
      title: "Results",
      description: `Viewing results for ${subject}`,
    });
  };

  const handleViewAnswerKey = (subject) => {
    toast({
      title: "Answer Key",
      description: `Viewing answer key for ${subject}`,
    });
  };

  const getExamList = () => {
    return exams[activeTab]?.[activeSubTab] || [];
  };

  return {
    activeTab,
    setActiveTab,
    activeSubTab,
    setActiveSubTab,
    handleViewSyllabus,
    handleViewDetails,
    handleViewResults,
    handleViewAnswerKey,
    getExamList,
  };
};
