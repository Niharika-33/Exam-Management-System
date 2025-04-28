package com.exam.exam_backend.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.exam.exam_backend.entity.Result;

@Repository
public interface ResultRepository extends JpaRepository<Result, Long> {
}
