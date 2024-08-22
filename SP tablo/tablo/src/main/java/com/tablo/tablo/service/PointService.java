package com.tablo.tablo.service;

import com.tablo.tablo.dto.PointDto;
import com.tablo.tablo.entity.PointEntity;
import com.tablo.tablo.repository.PointRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class PointService {

    private final PointRepository pointRepository;

    @Autowired
    public PointService(PointRepository pointRepository) {
        this.pointRepository = pointRepository;
    }

    public PointEntity createPoint(PointDto pointDto) {
        PointEntity point = new PointEntity();
        point.setProjectId(pointDto.getProjectId());
        point.setComment(pointDto.getComment());
        point.setXPosition(pointDto.getXPosition());
        point.setYPosition(pointDto.getYPosition());
        return pointRepository.save(point);
    }

    public List<PointEntity> getAllPoints() {
        return pointRepository.findAll();
    }

    public PointEntity getPointById(Long id) {
        return pointRepository.findById(id).orElse(null);
    }

    public PointEntity updatePoint(Long id, PointDto pointDto) {
        Optional<PointEntity> optionalPoint = pointRepository.findById(id);
        if (optionalPoint.isPresent()) {
            PointEntity point = optionalPoint.get();
            point.setComment(pointDto.getComment());
            point.setXPosition(pointDto.getXPosition());
            point.setYPosition(pointDto.getYPosition());
            return pointRepository.save(point);
        }
        return null;
    }

    public void deletePoint(Long id) {
        pointRepository.deleteById(id);
    }
}
