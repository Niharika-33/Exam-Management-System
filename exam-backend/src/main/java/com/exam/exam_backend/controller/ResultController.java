package com.exam.exam_backend.controller;

import com.exam.exam_backend.entity.Result;
import com.exam.exam_backend.service.ResultService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/result")
public class ResultController {
    @Autowired
    private ResultService resultService;

    @PostMapping("/upload")
    public Result uploadResult(@RequestBody Result result) {
        return resultService.uploadResultFile(result);
    }

    @GetMapping("/fetch")
    public List<Result> fetchResults() {
        return resultService.fetchResultFile();
    }
}
