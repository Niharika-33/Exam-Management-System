
// Define exam statuses as constants
export const EXAM_STATUS = {
  UPCOMING: "Upcoming",
  COMPLETED: "Completed"
};

// Helper functions to create exam objects with proper structure
export const createUpcomingExam = (id, subject, code, date, time, venue) => ({
  id, 
  subject, 
  code, 
  date, 
  time, 
  venue,
  status: EXAM_STATUS.UPCOMING
});

export const createCompletedExam = (id, subject, code, date, time, venue, result) => ({
  id, 
  subject, 
  code, 
  date, 
  time, 
  venue,
  status: EXAM_STATUS.COMPLETED,
  result
});
