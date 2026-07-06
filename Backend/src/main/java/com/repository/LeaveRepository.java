package com.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;

import com.entity.LeaveApplication;

public interface LeaveRepository extends JpaRepository<LeaveApplication, Integer> {

    List<LeaveApplication> findByEmpid(int empid);
}