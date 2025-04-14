package com.exam.exam_backend.controller;

import com.exam.exam_backend.service.FacultyService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class FacultyController {

    @Autowired
    private FacultyService facultyService;

    // API for publishing exam details
    public void publishExamDetails(String facultyID) {
        facultyService.publishExamDetails(facultyID);
    }

    // API for publishing result
    public void publishResult(String facultyID) {
        facultyService.publishResult(facultyID);
    }
}
