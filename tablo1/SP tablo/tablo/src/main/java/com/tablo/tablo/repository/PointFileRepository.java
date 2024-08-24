package com.tablo.tablo.repository;

import com.tablo.tablo.entity.PointFileEntity;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface PointFileRepository extends JpaRepository<PointFileEntity, Long> {
}
