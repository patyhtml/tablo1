package com.tablo.tablo.repository;

import com.tablo.tablo.entity.PointEntity;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface PointRepository extends JpaRepository<PointEntity, Long> {


    List<PointEntity> findAllByTaskId(Long taskId);


    List<PointEntity> findAllByFileId(Long fileId);
}
