package com.exam.exam_backend.controller;

import com.exam.exam_backend.service.AdminService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class AdminController {

    @Autowired
    private AdminService adminService;

    // API for publishing exam details
    public void publishExamDetails(String adminID) {
        adminService.publishExamDetails(adminID);
    }

    // API for publishing result
    public void publishResult(String adminID) {
        adminService.publishResult(adminID);
    }

    // API for analyzing reports
    public void analyzeReports(String adminID) {
        adminService.analyzeReports(adminID);
    }

    // API for updating request status
    public void updateRequestStatus(String adminID) {
        adminService.updateRequestStatus(adminID);
    }
}
