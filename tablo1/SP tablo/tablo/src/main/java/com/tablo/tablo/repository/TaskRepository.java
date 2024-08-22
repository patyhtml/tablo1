package com.tablo.tablo.repository;

import com.tablo.tablo.entity.TaskEntity;
import org.springframework.data.jpa.repository.JpaRepository;

public interface TaskRepository extends JpaRepository<TaskEntity, Long> {
}
