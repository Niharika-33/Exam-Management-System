package com.exam.exam_backend.controller;

import java.io.IOException;
import java.util.Date;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.multipart.MultipartFile;

import com.exam.exam_backend.entity.Result;
import com.exam.exam_backend.repository.ResultRepository;

@RestController
@RequestMapping("/result")
public class ResultController {

    @Autowired
    private ResultRepository resultUploadRepository;

    @PostMapping("/upload")
    public String uploadResult(@RequestParam("file") MultipartFile file,
                                @RequestParam("examType") String examType,
                                @RequestParam("subject") String subject,
                                @RequestParam("additionalInfo") String additionalInfo) {
        try {
            Result result = new Result();
            result.setFileData(file.getBytes());
            result.setUploadDate(new Date());
            result.setExamType(examType);
            result.setSubject(subject);
            result.setAdditionalInfo(additionalInfo);
            result.setFilePath(null); // you can ignore this if you're saving file in DB itself

            resultUploadRepository.save(result);
            return "Result published successfully!";

        } catch (IOException e) {
            return "Failed to publish results!";
        }
    }
}