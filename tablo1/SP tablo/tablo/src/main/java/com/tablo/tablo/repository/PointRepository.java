package com.tablo.tablo.repository;


import com.tablo.tablo.entity.PointEntity;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface PointRepository extends JpaRepository<PointEntity, Long> {
    List<PointEntity> findByProjectId(Long projectId);
}

