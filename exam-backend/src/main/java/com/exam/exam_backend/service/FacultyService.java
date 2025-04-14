package com.exam.exam_backend.service;

import com.exam.exam_backend.entity.Faculty;
import com.exam.exam_backend.repository.FacultyRepository;
import com.exam.exam_backend.repository.ExamRepository;
import com.exam.exam_backend.repository.ResultRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class FacultyService {

    @Autowired
    private FacultyRepository facultyRepository;
    @Autowired
    private ExamRepository examRepository;
    @Autowired
    private ResultRepository resultRepository;

    public void publishExamDetails(String facultyID) {
        // Call internalExamDetails or externalExamDetails in Exam class
    }

    public void publishResult(String facultyID) {
        // Call uploadResultFile in Result class
    }
}
