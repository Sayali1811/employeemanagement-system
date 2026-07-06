package com.controller;

import java.util.List;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import com.entity.LeaveApplication;
import com.service.LeaveService;

@CrossOrigin(origins = "http://localhost:3000")
@RestController
@RequestMapping("/leave")
public class LeaveController {

    @Autowired
    LeaveService service;

    // ==========================
    // APPLY LEAVE (EMPLOYEE)
    // ==========================
    @PostMapping("/apply")
    public LeaveApplication applyLeave(@RequestBody LeaveApplication leave) {
        return service.applyLeave(leave);
    }

    // ==========================
    // GET ALL LEAVES (ADMIN ONLY)
    // ==========================
    @GetMapping("/all")
    public List<LeaveApplication> getAllLeaves() {
        return service.getAllLeaves();
    }

    // ==========================
    // GET LEAVES BY EMPLOYEE (EMPLOYEE + ADMIN SEARCH)
    // ==========================
    @GetMapping("/emp")
    public List<LeaveApplication> getByEmpId(@RequestParam int empid) {
        return service.getLeavesByEmpId(empid);
    }

    // ==========================
    // UPDATE STATUS (ADMIN ONLY)
    // ==========================
    @PutMapping("/status")
    public Map<String, Object> updateStatus(@RequestParam int id,
                                             @RequestParam String status) {
        return service.updateStatus(id, status);
    }

    // ==========================
    // LEAVE SUMMARY (EMPLOYEE)
    // ==========================
    @GetMapping("/summary")
    public Map<String, Object> getSummary(@RequestParam int empid) {
        return service.getLeaveSummary(empid);
    }
}