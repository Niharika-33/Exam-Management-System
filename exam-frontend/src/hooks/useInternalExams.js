import { useState } from "react";
import { useToast } from "@/hooks/use-toast";
import { midSemesterExams, classTests } from "@/data/exams.data";

export const useInternalExams = () => {
  const { toast } = useToast();
  const [activeTab, setActiveTab] = useState("mid-semester");
  const [activeSubTab, setActiveSubTab] = useState("upcoming");

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

  const handleViewAnswerKey = (subject) => {
    toast({
      title: "Answer Key",
      description: `Viewing answer key for ${subject}`,
    });
  };

  const getExamList = () => {
    if (activeTab === "mid-semester") {
      return activeSubTab === "upcoming" 
        ? midSemesterExams.upcoming 
        : midSemesterExams.completed;
    } else {
      return activeSubTab === "upcoming" 
        ? classTests.upcoming 
        : classTests.completed;
    }
  };

  return {
    activeTab,
    setActiveTab,
    activeSubTab,
    setActiveSubTab,
    handleViewSyllabus,
    handleViewDetails,
    handleViewAnswerKey,
    getExamList
  };
};
// import { useState } from "react";
// import { useToast } from "@/hooks/use-toast";
// import { midSemesterExams, classTests } from "@/data/exams.data";

// export const useInternalExams = () => {
//   const { toast } = useToast();
//   const [activeTab, setActiveTab] = useState("mid-semester");
//   const [activeSubTab, setActiveSubTab] = useState("upcoming");

//   const handleViewSyllabus = (subject) => {
//     toast({
//       title: "Viewing Syllabus",
//       description: `Opening syllabus for ${subject}`,
//     });
//   };

//   const handleViewDetails = (exam) => {
//     toast({
//       title: "Exam Details",
//       description: `Viewing details for ${exam}`,
//     });
//   };

//   const handleViewResults = (subject) => {
//     toast({
//       title: "Results",
//       description: `Viewing results for ${subject}`,
//     });
//   };

//   const handleViewAnswerKey = (subject) => {
//     toast({
//       title: "Answer Key",
//       description: `Viewing answer key for ${subject}`,
//     });
//   };

//   const getExamList = () => {
//     if (activeTab === "mid-semester") {
//       return activeSubTab === "upcoming" 
//         ? midSemesterExams.upcoming 
//         : midSemesterExams.completed;
//     } else {
//       return activeSubTab === "upcoming" 
//         ? classTests.upcoming 
//         : classTests.completed;
//     }
//   };

//   return {
//     activeTab,
//     setActiveTab,
//     activeSubTab,
//     setActiveSubTab,
//     handleViewSyllabus,
//     handleViewDetails,
//     handleViewResults,
//     handleViewAnswerKey,
//     getExamList
//   };
// };
