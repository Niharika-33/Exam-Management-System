package com.exam.exam_backend.service;

import com.exam.exam_backend.entity.Result;
import com.exam.exam_backend.repository.ResultRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class ResultService {
    @Autowired
    private ResultRepository resultRepository;

    public Result uploadResultFile(Result result) {
        return resultRepository.save(result);
    }

    public List<Result> fetchResultFile() {
        return resultRepository.findAll();
    }
}
