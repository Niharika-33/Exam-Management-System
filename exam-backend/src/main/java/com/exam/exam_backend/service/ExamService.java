package com.exam.exam_backend.service;

import com.exam.exam_backend.entity.Exam;
import com.exam.exam_backend.repository.ExamRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class ExamService {

    @Autowired
    private ExamRepository examRepository;

    public Exam publishExamDetails(Exam exam) {
        // This will save the exam object to the database
        return examRepository.save(exam);
    }
}