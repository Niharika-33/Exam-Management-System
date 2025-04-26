package com.exam.exam_backend.controller;

import com.exam.exam_backend.entity.Issue;
import com.exam.exam_backend.service.IssueService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/issue")
public class IssueController {
    @Autowired
    private IssueService issueService;

    @PostMapping("/submit")
    public Issue submitIssue(@RequestBody Issue issue) {
        return issueService.storeIssueInDb(issue);
    }

    @GetMapping("/reports")
    public List<Issue> getReports() {
        return issueService.fetchReports();
    }
}