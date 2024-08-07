package com.example.demo.service;

import com.example.demo.model.Login;
import com.example.demo.model.Register;
import com.example.demo.repository.LoginRepository;
import com.example.demo.repository.RegisterRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;
import java.util.Optional;
import java.util.stream.Collectors;
import java.util.stream.StreamSupport;

@Service
public class UserService {

    @Autowired
    private LoginRepository loginRepository;

    @Autowired
    private RegisterRepository registerRepository;

    @Transactional
    public Register createRegister(Register register) {
        Optional<Login> existingLogin = loginRepository.findByEmail(register.getLogin().getEmail());
        if (existingLogin.isPresent()) {
            register.setLogin(existingLogin.get());
        } else {
            Login newLogin = register.getLogin();
            newLogin = loginRepository.save(newLogin);
            register.setLogin(newLogin);
        }
        return registerRepository.save(register);
    }

    public List<Register> getAllRegisters() {
        Iterable<Register> registers = registerRepository.findAll();
        return StreamSupport.stream(registers.spliterator(), false).collect(Collectors.toList());
    }

    public Optional<Register> getRegisterById(Long id) {
        return registerRepository.findById(id);
    }

    @Transactional
    public Optional<Register> updateRegister(Long id, Register updatedRegister) {
        return registerRepository.findById(id).map(register -> {
            // Update the Register fields
            register.setName(updatedRegister.getName());
            register.setPhone(updatedRegister.getPhone());
            register.setEmail(updatedRegister.getEmail());
            register.setPassword(updatedRegister.getPassword());

            // Handle the Login entity
            if (register.getLogin() != null) {
                Login existingLogin = register.getLogin();
                existingLogin.setEmail(updatedRegister.getLogin().getEmail());
                existingLogin.setPassword(updatedRegister.getLogin().getPassword());
                loginRepository.save(existingLogin); // Save updated Login
            } else {
                // Handle the case where the Register has no associated Login
                Login newLogin = updatedRegister.getLogin();
                if (newLogin != null) {
                    newLogin = loginRepository.save(newLogin); // Save new Login
                    register.setLogin(newLogin);
                }
            }

            // Save the updated Register
            return registerRepository.save(register);
        });
    }

    public void deleteAllRegisters() {
        registerRepository.deleteAll();
    }

    @Transactional
    public void deleteLoginById(Long id) {
        Optional<Login> login = loginRepository.findById(id);
        if (login.isPresent()) {
            // Ensure that the login is not referenced by any Register
            Login loginEntity = login.get();
            // Handle any business logic if needed before deleting
            loginRepository.delete(loginEntity);
        }
    }
}