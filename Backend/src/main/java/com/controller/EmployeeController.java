package com.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import com.entity.Employee;
import com.service.EmployeeService;

@RestController
@CrossOrigin(origins = "http://localhost:3000")
public class EmployeeController {

    @Autowired
    EmployeeService service;

    // Add Employee (RequestBody)
    @PostMapping("/addEmployee")
    public String addemployee(@RequestBody Employee e) {
        return service.addemp(e);
    }

    // Get All Employees
    @GetMapping("/findAllEmployees")
    public List<Employee> findallemployees() {
        return service.findallemp();
    }

    //  Get by ID (RequestParam)
    @GetMapping("/findById")
    public Employee findbyid(@RequestParam int empid) {
        return service.findbyempid(empid);
    }

    @DeleteMapping("/deleteEmployee")
    public String deleteemployee(@RequestParam int empid) {
        return service.deletebyempid(empid);
    
    }

    @PutMapping("/updateEmployee")
    public String updateEmployee(@RequestParam int empid, @RequestBody Employee e) {
        return service.updateemp(empid, e);
    }
  

    @GetMapping("/findByFirstname")
    public List<Employee> findByFirstname(@RequestParam String firstname) {
        return service.findByFirstname(firstname);
    }

    @GetMapping("/findByLastname")
    public List<Employee> findByLastname(@RequestParam String lastname) {
        return service.findByLastname(lastname);
    }

    @GetMapping("/findByDepartment")
    public List<Employee> findByDepartment(@RequestParam String dept) {
        return service.findByDepartment(dept);
    }

    @GetMapping("/findByDesignation")
    public List<Employee> findByDesignation(@RequestParam String desig) {
        return service.findByDesignation(desig);
    }
}