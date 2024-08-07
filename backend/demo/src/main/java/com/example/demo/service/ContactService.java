package com.example.demo.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.data.domain.Sort;

import com.example.demo.model.Contact;
import com.example.demo.repository.ContactRepository;

@Service
public class ContactService {

    @Autowired
    ContactRepository contactRepository;

    public Contact create(Contact contact) {
        return contactRepository.save(contact);
    }

    public List<Contact> fetchContactList() {
        return (List<Contact>) contactRepository.findAll();
    }

    public Contact getById(int userId) {
        return contactRepository.findById(userId).orElse(null);
    }

    public List<Contact> getBySort(String field) {
        return contactRepository.findAll(Sort.by(Sort.Direction.ASC, field));
    }

    public boolean updateDetails(int userId, Contact contact) {
        if (contactRepository.findById(userId).isEmpty()) {
            return false;
        }
        try {
            contactRepository.save(contact);
        } catch (Exception e) {
            return false;
        }
        return true;
    }

    public boolean deleteContact(int userId) {
        if (this.getById(userId) == null) {
            return false;
        }
        contactRepository.deleteById(userId);
        return true;
    }
}
