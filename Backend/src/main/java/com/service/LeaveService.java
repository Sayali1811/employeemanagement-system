package com.service;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.entity.LeaveApplication;
import com.repository.LeaveRepository;

@Service
public class LeaveService {

    @Autowired
    LeaveRepository repo;

    // ==========================
    // APPLY LEAVE (EMPLOYEE)
    // ==========================
    public LeaveApplication applyLeave(LeaveApplication leave) {

        if (leave.getEmpid() <= 0) {
            throw new RuntimeException("Invalid Employee ID");
        }

        leave.setStatus("Pending");
        return repo.save(leave);
    }

    // ==========================
    // GET ALL LEAVES (ADMIN)
    // ==========================
    public List<LeaveApplication> getAllLeaves() {
        return repo.findAll();
    }

    // ==========================
    // GET LEAVES BY EMPLOYEE (EMPLOYEE + ADMIN SEARCH)
    // ==========================
    public List<LeaveApplication> getLeavesByEmpId(int empid) {

        if (empid <= 0) {
            throw new RuntimeException("Invalid Employee ID");
        }

        return repo.findByEmpid(empid);
    }

    // ==========================
    // UPDATE STATUS (ADMIN)
    // ==========================
    public Map<String, Object> updateStatus(int id, String status) {

        LeaveApplication leave = repo.findById(id)
                .orElseThrow(() -> new RuntimeException("Leave not found"));

        leave.setStatus(status);
        repo.save(leave);

        Map<String, Object> map = new HashMap<>();
        map.put("message", "Status Updated Successfully");
        map.put("leaveId", id);
        map.put("status", status);

        return map;
    }

    // ==========================
    // LEAVE SUMMARY (EMPLOYEE)
    // ==========================
    public Map<String, Object> getLeaveSummary(int empid) {

        if (empid <= 0) {
            throw new RuntimeException("Invalid Employee ID");
        }

        List<LeaveApplication> list = repo.findByEmpid(empid);

        int total = 30;
        int taken = list.size();
        int remaining = Math.max(total - taken, 0);

        Map<String, Object> map = new HashMap<>();
        map.put("totalLeaves", total);
        map.put("takenLeaves", taken);
        map.put("remainingLeaves", remaining);

        return map;
    }
}