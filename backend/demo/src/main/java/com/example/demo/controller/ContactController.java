package com.example.demo.controller;

import org.springframework.web.bind.annotation.RestController;

import com.example.demo.model.Contact;
import com.example.demo.service.ContactService;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;

@RestController
public class ContactController {

    @Autowired
    ContactService contactService;

    @PostMapping("/api/contact")
    public ResponseEntity<Contact> addContact(@RequestBody Contact contact) {
        Contact obj = contactService.create(contact);
        return new ResponseEntity<>(obj, HttpStatus.CREATED);
    }

    @GetMapping("/api/contact")
    public List<Contact> fetchContactList() {
        return contactService.fetchContactList();
    }

    @SuppressWarnings("null")
    @GetMapping("/api/contact/{userId}")
    public ResponseEntity<Contact> getById(@PathVariable("userId") int userId) {
        try {
            return new ResponseEntity<>(contactService.getById(userId), HttpStatus.OK);
        } catch (Exception e) {
            return new ResponseEntity<>(null, HttpStatus.NOT_FOUND);
        }
    }

    @GetMapping("/api/contact/sort/{field}")
    public ResponseEntity<List<Contact>> getBySort(@PathVariable String field) {
        try {
            return new ResponseEntity<>(contactService.getBySort(field), HttpStatus.OK);
        } catch (Exception e) {
            return new ResponseEntity<>(HttpStatus.NOT_FOUND);
        }
    }

    @SuppressWarnings("null")
    @PutMapping("/api/contact/{userId}")
    public ResponseEntity<Contact> updateContact(@PathVariable("userId") int userId, @RequestBody Contact contact) {
        if (contactService.updateDetails(userId, contact)) {
            return new ResponseEntity<>(contact, HttpStatus.OK);
        }
        return new ResponseEntity<>(null, HttpStatus.NOT_FOUND);
    }

    @DeleteMapping("/api/contact/{userId}")
    public ResponseEntity<Boolean> deleteContact(@PathVariable("userId") int userId) {
        if (contactService.deleteContact(userId)) {
            return new ResponseEntity<>(true, HttpStatus.OK);
        }
        return new ResponseEntity<>(false, HttpStatus.NOT_FOUND);
    }
}
