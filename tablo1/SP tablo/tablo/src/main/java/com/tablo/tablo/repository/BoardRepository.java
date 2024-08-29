package com.tablo.tablo.repository;

import com.tablo.tablo.entity.BoardEntity;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface BoardRepository extends JpaRepository<BoardEntity, Long> {


    List<BoardEntity> findAllByUserId(Long userId);


    List<BoardEntity> findByName(String name);
}
