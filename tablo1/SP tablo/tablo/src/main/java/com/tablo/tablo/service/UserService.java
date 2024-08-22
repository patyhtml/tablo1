package com.tablo.tablo.service;

import com.tablo.tablo.dto.UserDto;
import lombok.extern.log4j.Log4j2;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import com.tablo.tablo.repository.UserRepository;

@Service
@Log4j2
public class UserService {
    @Autowired
    private UserRepository userRepository;

    public void createUser(UserDto dto) {
        log.info("creating user with name {} and email {}", dto.getName(), dto.getEmail());
    }



}
