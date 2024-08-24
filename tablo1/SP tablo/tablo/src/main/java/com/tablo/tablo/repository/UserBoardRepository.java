package com.tablo.tablo.repository;

import com.tablo.tablo.entity.UserBoardEntity;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface UserBoardRepository extends JpaRepository<UserBoardEntity, Long> {

}
