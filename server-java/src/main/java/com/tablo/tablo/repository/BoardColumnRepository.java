package com.tablo.tablo.repository;

import com.tablo.tablo.entity.BoardColumnEntity;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface BoardColumnRepository extends JpaRepository<BoardColumnEntity, Long> {
}
