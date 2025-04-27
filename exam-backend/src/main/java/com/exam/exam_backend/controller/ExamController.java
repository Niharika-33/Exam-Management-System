package com.exam.exam_backend.controller;

import com.exam.exam_backend.entity.Exam;
import com.exam.exam_backend.service.ExamService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/exams")
public class ExamController {

    @Autowired
    private ExamService examService;

    // Endpoint to publish Mid Exam details (No need for testDate)
    @PostMapping("/publish/mid")
    public ResponseEntity<String> publishMidExam(@RequestBody Exam exam) {
        try {
            // Validation (Check for null or empty fields)
            if (exam.getSubject() == null || exam.getSubject().isEmpty() ||
                exam.getSyllabusDetails() == null || exam.getSyllabusDetails().isEmpty() ||
                exam.getTotalMarks() == null) {
                return ResponseEntity.status(HttpStatus.BAD_REQUEST).body("All fields are required for Mid exam!");
            }

            exam.setExamType("Mid");
            exam.setTestDate(null);  // Make sure testDate is null for Mid exams (handled by admin)

            examService.publishExamDetails(exam);
            return ResponseEntity.ok("Mid sem exam details published successfully!");
        } catch (Exception e) {
            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).body("Error publishing Mid exam: " + e.getMessage());
        }
    }

    // Endpoint to publish Class Test Exam details (testDate is required here)
    @PostMapping("/publish/cla")
    public ResponseEntity<String> publishClaExam(@RequestBody Exam exam) {
        try {
            // Validation (Check for null or empty fields)
            if (exam.getSubject() == null || exam.getSubject().isEmpty() ||
                exam.getSyllabusDetails() == null || exam.getSyllabusDetails().isEmpty() ||
                exam.getTotalMarks() == null ||
                exam.getTestDate() == null || exam.getTestDate().isEmpty()) {
                return ResponseEntity.status(HttpStatus.BAD_REQUEST).body("All fields are required for Class test!");
            }

            exam.setExamType("CLA");
            examService.publishExamDetails(exam);
            return ResponseEntity.ok("Cla exam details published successfully!");
        } catch (Exception e) {
            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).body("Error publishing Class test exam: " + e.getMessage());
        }
    }

    // Endpoint to publish End Sem Exam details (testDate is not required here)
    @PostMapping("/publish/endsem")
    public ResponseEntity<String> publishEndSemExam(@RequestBody Exam exam) {
        try {
            // Validation (Check for null or empty fields)
            if (exam.getSubject() == null || exam.getSubject().isEmpty() ||
                exam.getSyllabusDetails() == null || exam.getSyllabusDetails().isEmpty() ||
                exam.getTotalMarks() == null) {
                return ResponseEntity.status(HttpStatus.BAD_REQUEST).body("All fields are required for End Sem exam!");
            }

            exam.setExamType("End Sem");
            exam.setTestDate(null);
            examService.publishExamDetails(exam);
            return ResponseEntity.ok("End Sem exam details published successfully!");
        } catch (Exception e) {
            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).body("Error publishing End Sem exam: " + e.getMessage());
        }
    }
}