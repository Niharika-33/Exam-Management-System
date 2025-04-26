
package com.exam.exam_backend.service;

import com.exam.exam_backend.entity.Issue;
import com.exam.exam_backend.repository.IssueRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class IssueService {
    @Autowired
    private IssueRepository issueRepository;

    public Issue storeIssueInDb(Issue issue) {
        return issueRepository.save(issue);
    }

    public List<Issue> fetchReports() {
        return issueRepository.findAll();
    }
}