package com.exam.exam_backend.service;

import com.exam.exam_backend.entity.Student;
import com.exam.exam_backend.repository.StudentRepository;
import com.exam.exam_backend.repository.ExamRepository;
import com.exam.exam_backend.repository.ResultRepository;
import com.exam.exam_backend.repository.IssueRepository;
import com.exam.exam_backend.repository.RevealRequestRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class StudentService {

    @Autowired
    private StudentRepository studentRepository;
    @Autowired
    private ExamRepository examRepository;
    @Autowired
    private ResultRepository resultRepository;
    @Autowired
    private IssueRepository issueRepository;
    @Autowired
    private RevealRequestRepository revealRequestRepository;

    public void viewExamDetails(String studentID) {
        // Call fetchExamDetails in Exam class
    }

    public void reportIssue(String studentID, String issueDescription) {
        // Call fetchReports in Issue class
    }

    public void viewResults(String studentID) {
        // Call fetchResultFile in Result class
    }

    public void submitRevealRequest(String studentID) {
        // Call storeRequestInDb in RevealRequest class
    }

    public void checkRequestStatus(String studentID) {
        // Call fetchStatus in RevealRequest class
    }
}
