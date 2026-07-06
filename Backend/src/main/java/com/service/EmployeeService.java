package com.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.entity.Employee;
import com.repository.EmployeeRepository;

@Service
public class EmployeeService {

    @Autowired
    EmployeeRepository eresp;

    // Add employee
    public String addemp(Employee e) {
        eresp.save(e);
        return "Employee record added successfully";
    }

    // Find all employees
    public List<Employee> findallemp() {
        return eresp.findAll();
    }

    // Find by ID
    public Employee findbyempid(int empid) {
        return eresp.findById(empid).orElse(null);
    }

    // Delete employee
    public String deletebyempid(int empid) {
        Employee existingemp = eresp.findById(empid).orElse(null);

        if (existingemp != null) {
            eresp.deleteById(empid);
            return "Employee record deleted successfully";
        } else {
            return "No matching record found for given Employee Id";
        }
    }

    // Update employee
    public String updateemp(int empid, Employee e) {
        Employee existingemp = eresp.findById(empid).orElse(null);

        if (existingemp != null) {
            existingemp.setFirstname(e.getFirstname());
            existingemp.setMiddlename(e.getMiddlename());
            existingemp.setLastname(e.getLastname());
            existingemp.setEmail(e.getEmail());
            existingemp.setDob(e.getDob());
            existingemp.setContactno(e.getContactno());
            existingemp.setGender(e.getGender());
            existingemp.setEdu(e.getEdu());
            existingemp.setAddress(e.getAddress());
            existingemp.setAdharno(e.getAdharno());
            existingemp.setPanno(e.getPanno());
            existingemp.setProfile(e.getProfile());
            existingemp.setDesignation(e.getDesignation());
            existingemp.setDepartment(e.getDepartment());
            existingemp.setExp(e.getExp());
            existingemp.setSalary(e.getSalary());
            existingemp.setWorklocation(e.getWorklocation());
            existingemp.setReportingmanager(e.getReportingmanager());
            existingemp.setStatus(e.getStatus());
            existingemp.setJoiningdate(e.getJoiningdate());

            eresp.save(existingemp);
            return "Employee updated successfully";
        } else {
            return "Employee not found";
        }
    }

    // Search methods
    public List<Employee> findByFirstname(String firstname) {
        return eresp.findByFirstname(firstname);
    }

    public List<Employee> findByLastname(String lastname) {
        return eresp.findByLastname(lastname);
    }

    public List<Employee> findByDepartment(String dept) {
        return eresp.findByDepartment(dept);
    }

    public List<Employee> findByDesignation(String desig) {
        return eresp.findByDesignation(desig);
    }
}