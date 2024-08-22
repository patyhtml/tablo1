package com.tablo.tablo.repository;

import com.tablo.tablo.entity.ProjectEntity;
import org.springframework.data.jpa.repository.JpaRepository;

public interface ProjectRepository extends JpaRepository<ProjectEntity, Long> {
}
