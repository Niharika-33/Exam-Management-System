
// Define the structure for an exam item
export interface Exam {
  id: number;
  subject: string;
  code: string;
  date: string;
  time: string;
  venue: string;
  status: string;
  result?: string; // Optional, only for completed exams
}

// Define the structure for the exam collection
export interface ExamCollection {
  upcoming: Exam[];
  completed: Exam[];
}
