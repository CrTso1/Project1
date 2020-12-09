package com.example.demo.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.autoconfigure.data.web.SpringDataWebProperties.Pageable;
import org.springframework.data.domain.Page;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.example.demo.model.LearningClass;
import com.example.demo.repository.LearningClassRepository;
import com.example.demo.exception.ResourceNotFoundException;

import java.util.List;
import java.util.Map;
import java.util.ArrayList;
import java.util.HashMap;

@CrossOrigin(origins = "http://localhost:3000")
@RestController
@RequestMapping("/api/v1")
public class LearningClassController {
	
	@Autowired
	private LearningClassRepository classRepository;
	
	//get all classes
	
	@GetMapping("/classes")
	public List<LearningClass> getAllLearningClass(){
		return classRepository.findAll();
	}
	
	//add class using restapi
	@PostMapping("/classes")
	public LearningClass addClass(@RequestBody LearningClass clazz) {
		return classRepository.save(clazz);
	}
	
	//get employee by id rest api
	
	@GetMapping("/classes/{id}")
	public ResponseEntity< LearningClass> getClassByID(@PathVariable Long id) { // ResponseEntity de return http status
		LearningClass clazz = classRepository.findById(id)
				.orElseThrow(() -> new ResourceNotFoundException("Khong co lop voi id:" + id));
		
		return ResponseEntity.ok(clazz);
	}
	
	//find class by name
	@GetMapping("/classes/search/{ten}")
	public ResponseEntity<LearningClass> searchClassByName(@PathVariable String ten){
		LearningClass clazz = classRepository.findByten(ten); // nen viet them exception custom orElseThrow

		return ResponseEntity.ok(clazz);
	}
	
	//update employee rest api
	@PutMapping("/classes/{id}")
	public ResponseEntity<LearningClass> updateClass(@PathVariable Long id, @RequestBody LearningClass newClass){
		LearningClass clazz = classRepository.findById(id)
				.orElseThrow(() -> new ResourceNotFoundException("Khong co lop voi id:" + id));
		clazz.setKhoa(newClass.getKhoa());
		clazz.setKy(newClass.getKy());
		clazz.setPhong(newClass.getPhong());
		clazz.setTen(newClass.getTen());
		clazz.setThoiGian(newClass.getThoiGian());
		clazz.setThu(newClass.getThu());
		clazz.setLichThi(newClass.getLichThi());
		clazz.setTuan(newClass.getTuan());
		
		LearningClass updatedClass = classRepository.save(clazz);
		
		return ResponseEntity.ok(updatedClass); // ok thi tra ve object updatedClass
	}
	
	//delete class rest api
	@DeleteMapping("/classes/{id}")
	public ResponseEntity<Map<String, Boolean> > deleteClass(@PathVariable Long id){
		LearningClass clazz = classRepository.findById(id)
				.orElseThrow(() -> new ResourceNotFoundException("Khong co lop voi id:" + id));
		
		classRepository.delete(clazz);
		
		Map<String, Boolean> response = new HashMap<>();
		response.put("deleted", Boolean.TRUE);
		return ResponseEntity.ok(response);
	}
	
	//find class by name
	
}
