package com.tablo.tablo.service;

import com.tablo.tablo.entity.PointEntity;
import com.tablo.tablo.repository.PointRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class PointService {

    @Autowired
    private PointRepository pointRepository;

    public List<PointEntity> getAllPoints() {
        return pointRepository.findAll();
    }

    public PointEntity getPointById(Long id) {
        Optional<PointEntity> point = pointRepository.findById(id);
        return point.orElse(null);
    }

    public PointEntity createPoint(PointEntity point) {
        return pointRepository.save(point);
    }

    public PointEntity updatePoint(Long id, PointEntity pointDetails) {
        Optional<PointEntity> existingPoint = pointRepository.findById(id);
        if (existingPoint.isPresent()) {
            PointEntity updatedPoint = existingPoint.get();
            updatedPoint.setName(pointDetails.getName());
            updatedPoint.setCordX(pointDetails.getCordX());
            updatedPoint.setCordY(pointDetails.getCordY());
            updatedPoint.setCreatedAt(pointDetails.getCreatedAt());
            return pointRepository.save(updatedPoint);
        } else {
            return null;
        }
    }

    public void deletePoint(Long id) {
        pointRepository.deleteById(id);
    }
}
