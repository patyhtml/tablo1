package com.tablo.tablo.repository;

import com.tablo.tablo.entity.CreateProjectEntity;
import org.springframework.data.jpa.repository.JpaRepository;

public interface CreateProjectRepository extends JpaRepository<CreateProjectEntity, Long> {
}
