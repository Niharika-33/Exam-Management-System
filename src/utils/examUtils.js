
// Helper to render result based on exam type
export const renderExamResult = (exam) => {
  if (exam.status === "Completed") {
    return exam.result;
  }
  return null;
};
