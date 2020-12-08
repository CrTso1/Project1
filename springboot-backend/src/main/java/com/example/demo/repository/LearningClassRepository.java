package com.example.demo.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import com.example.demo.model.LearningClass;
//co cac method get, find ,blah
@Repository
public interface LearningClassRepository extends JpaRepository<LearningClass, Long> {
	LearningClass findByten(String ten);

}
