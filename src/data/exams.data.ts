
import { ExamCollection } from "@/types/exam.types";

// Sample data for mid-semester exams
export const midSemesterExams: ExamCollection = {
  upcoming: [
    {
      id: 1,
      subject: "Data Structures",
      code: "CSE101",
      date: "Oct 15, 2023",
      time: "09:00 AM",
      venue: "Block A - Room 101",
      status: "Upcoming"
    },
    {
      id: 2,
      subject: "Computer Networks",
      code: "CSE201",
      date: "Oct 18, 2023",
      time: "02:00 PM",
      venue: "Block B - Room 205",
      status: "Upcoming"
    }
  ],
  completed: [
    {
      id: 3,
      subject: "Operating Systems",
      code: "CSE202",
      date: "Sep 15, 2023",
      time: "09:00 AM",
      venue: "Block A - Room 101",
      status: "Completed",
      result: "82/100"
    },
    {
      id: 4,
      subject: "Software Engineering",
      code: "CSE302",
      date: "Sep 18, 2023",
      time: "02:00 PM",
      venue: "Block B - Room 205",
      status: "Completed",
      result: "75/100"
    }
  ]
};

// Sample data for class tests
export const classTests: ExamCollection = {
  upcoming: [
    {
      id: 1,
      subject: "Data Structures - Test 2",
      code: "CSE101",
      date: "Oct 22, 2023",
      time: "09:00 AM",
      venue: "Block A - Room 101",
      status: "Upcoming"
    },
    {
      id: 2,
      subject: "Computer Networks - Test 3",
      code: "CSE201",
      date: "Oct 25, 2023",
      time: "02:00 PM",
      venue: "Block B - Room 205",
      status: "Upcoming"
    }
  ],
  completed: [
    {
      id: 3,
      subject: "Data Structures - Test 1",
      code: "CSE101",
      date: "Sep 22, 2023",
      time: "09:00 AM",
      venue: "Block A - Room 101",
      status: "Completed",
      result: "18/20"
    },
    {
      id: 4,
      subject: "Computer Networks - Test 2",
      code: "CSE201",
      date: "Sep 25, 2023",
      time: "02:00 PM",
      venue: "Block B - Room 205",
      status: "Completed",
      result: "16/20"
    }
  ]
};
