package com.tablo.tablo.service;

import com.tablo.tablo.entity.UserBoardEntity;
import com.tablo.tablo.repository.UserBoardRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class UserBoardService {

    @Autowired
    private UserBoardRepository userBoardRepository;

    public List<UserBoardEntity> getAllUserBoards() {
        return userBoardRepository.findAll();
    }

    public UserBoardEntity getUserBoardById(Long id) {
        Optional<UserBoardEntity> userBoard = userBoardRepository.findById(id);
        return userBoard.orElse(null);
    }

    public UserBoardEntity createUserBoard(UserBoardEntity userBoard) {
        return userBoardRepository.save(userBoard);
    }

    public UserBoardEntity updateUserBoard(Long id, UserBoardEntity userBoardDetails) {
        Optional<UserBoardEntity> existingUserBoard = userBoardRepository.findById(id);
        if (existingUserBoard.isPresent()) {
            UserBoardEntity updatedUserBoard = existingUserBoard.get();
            updatedUserBoard.setOwner(userBoardDetails.isOwner());
            updatedUserBoard.setInvited(userBoardDetails.isInvited());
            return userBoardRepository.save(updatedUserBoard);
        } else {
            return null;
        }
    }

    public void deleteUserBoard(Long id) {
        userBoardRepository.deleteById(id);
    }
}
