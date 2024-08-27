package com.tablo.tablo.service;

import com.tablo.tablo.dto.UserDto;
import com.tablo.tablo.entity.UserEntity;
import com.tablo.tablo.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.Optional;

@Service
public class UserService {

    @Autowired
    private UserRepository userRepository;


    public UserEntity getUserById(Long id) {
        Optional<UserEntity> user = userRepository.findById(id);
        return user.orElse(null);
    }

    public UserEntity createUser(UserDto user) {
        UserEntity entity = UserEntity.builder()
                .name(user.getName())
                .password(user.getPassword())
                .email(user.getEmail())
                .build();
        userRepository.saveAndFlush(entity);
        return entity;
    }

    public UserEntity updateUser(Long id, UserEntity userDetails) {
        Optional<UserEntity> existingUser = userRepository.findById(id);
        if (existingUser.isPresent()) {
            UserEntity updatedUser = existingUser.get();
            updatedUser.setEmail(userDetails.getEmail());
            updatedUser.setPassword(userDetails.getPassword());
            updatedUser.setName(userDetails.getName());
            return userRepository.saveAndFlush(updatedUser);
        } else {
            return null;
        }
    }

    public void deleteUser(Long id) {
        userRepository.deleteById(id);
    }
}
