package com.exam.exam_backend.controller;

import com.exam.exam_backend.service.StudentService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RestController;
@RestController
public class StudentController {

    @Autowired
    private StudentService studentService;

    // API for viewing exam details
    public void viewExamDetails(String studentID) {
        studentService.viewExamDetails(studentID);
    }

    // API for reporting issue
    public void reportIssue(String studentID, String issueDescription) {
        studentService.reportIssue(studentID, issueDescription);
    }

    // API for viewing results
    public void viewResults(String studentID) {
        studentService.viewResults(studentID);
    }

    // API for submitting reveal request
    public void submitRevealRequest(String studentID) {
        studentService.submitRevealRequest(studentID);
    }

    // API for checking request status
    public void checkRequestStatus(String studentID) {
        studentService.checkRequestStatus(studentID);
    }
}
