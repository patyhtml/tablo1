package com.tablo.tablo.repository;


import com.tablo.tablo.entity.CreatePainPointEntity;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface CreatePainPointRepository extends JpaRepository<CreatePainPointEntity, Long> {
    List<CreatePainPointEntity> findByProjectId(Long projectId);
}

