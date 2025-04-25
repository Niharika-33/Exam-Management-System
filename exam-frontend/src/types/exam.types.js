
// Define the structure for an exam item through JSDoc for better IDE support
/**
 * @typedef {Object} Exam
 * @property {number} id - Unique identifier for the exam
 * @property {string} subject - Subject name
 * @property {string} code - Subject code
 * @property {string} date - Exam date
 * @property {string} time - Exam time
 * @property {string} venue - Exam location
 * @property {string} status - Status of the exam (Upcoming or Completed)
 * @property {string} result - Optional, only for completed exams
 */

/**
 * @typedef {Object} ExamCollection
 * @property {Exam[]} upcoming - List of upcoming exams
 * @property {Exam[]} completed - List of completed exams
 */

// No exports needed in JS version as we're using JSDoc for type hints
