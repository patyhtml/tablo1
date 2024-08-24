package com.tablo.tablo.repository;

import com.tablo.tablo.entity.TaskFileEntity;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface TaskFileRepository extends JpaRepository<TaskFileEntity, Long> {
}
