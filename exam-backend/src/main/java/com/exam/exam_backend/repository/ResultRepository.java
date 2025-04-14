package com.exam.exam_backend.repository;

import com.exam.exam_backend.entity.Result;
import org.springframework.data.jpa.repository.JpaRepository;

public interface ResultRepository extends JpaRepository<Result, String> {
}
