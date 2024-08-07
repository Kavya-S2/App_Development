package com.example.demo.repository;

import com.example.demo.model.Register;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface RegisterRepository extends CrudRepository<Register, Long> {
}
