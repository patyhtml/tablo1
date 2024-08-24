package com.tablo.tablo.service;

import com.tablo.tablo.entity.PointFileEntity;
import com.tablo.tablo.repository.PointFileRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class PointFileService {

    @Autowired
    private PointFileRepository pointFileRepository;

    public List<PointFileEntity> getAllPointFiles() {
        return pointFileRepository.findAll();
    }

    public PointFileEntity getPointFileById(Long id) {
        Optional<PointFileEntity> pointFile = pointFileRepository.findById(id);
        return pointFile.orElse(null);
    }

    public PointFileEntity createPointFile(PointFileEntity pointFile) {
        return pointFileRepository.save(pointFile);
    }

    public PointFileEntity updatePointFile(Long id, PointFileEntity pointFileDetails) {
        Optional<PointFileEntity> existingPointFile = pointFileRepository.findById(id);
        if (existingPointFile.isPresent()) {
            PointFileEntity updatedPointFile = existingPointFile.get();
            // Aktualizuj pola, które muszą być zaktualizowane
            return pointFileRepository.save(updatedPointFile);
        } else {
            return null;
        }
    }

    public void deletePointFile(Long id) {
        pointFileRepository.deleteById(id);
    }
}
