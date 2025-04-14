package com.exam.exam_backend.entity;

import jakarta.persistence.Entity;
import jakarta.persistence.Id;
import java.util.Date;

@Entity
public class Result {

    @Id
    private String resultID;
    private String filePath;
    private Date uploadDate;

    public Result() {}

    public Result(String resultID, String filePath, Date uploadDate) {
        this.resultID = resultID;
        this.filePath = filePath;
        this.uploadDate = uploadDate;
    }

    // Getters and Setters
}
