package com.tablo.tablo.service;


import com.tablo.tablo.dto.CreatePainPointDto;
import com.tablo.tablo.entity.CreatePainPointEntity;
import com.tablo.tablo.repository.CreatePainPointRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class CreatePainPointService {

    private final CreatePainPointRepository painPointRepository;

    @Autowired
    public CreatePainPointService(CreatePainPointRepository painPointRepository) {
        this.painPointRepository = painPointRepository;
    }

    public CreatePainPointEntity createPainPoint(CreatePainPointDto painPointDto) {
        CreatePainPointEntity painPoint = new CreatePainPointEntity();
        painPoint.setProjectId(painPointDto.getProjectId());
        painPoint.setComment(painPointDto.getComment());
        painPoint.setXPosition(painPointDto.getXPosition());
        painPoint.setYPosition(painPointDto.getYPosition());
        return painPointRepository.save(painPoint);
    }

    public List<CreatePainPointEntity> getAllPainPoints() {
        return painPointRepository.findAll();
    }

    public CreatePainPointEntity getPainPointById(Long id) {
        return painPointRepository.findById(id).orElse(null);
    }

    public CreatePainPointEntity updatePainPoint(Long id, CreatePainPointDto painPointDto) {
        Optional<CreatePainPointEntity> optionalPainPoint = painPointRepository.findById(id);
        if (optionalPainPoint.isPresent()) {
            CreatePainPointEntity painPoint = optionalPainPoint.get();
            painPoint.setComment(painPointDto.getComment());
            painPoint.setXPosition(painPointDto.getXPosition());
            painPoint.setYPosition(painPointDto.getYPosition());
            return painPointRepository.save(painPoint);
        }
        return null;
    }

    public void deletePainPoint(Long id) {
        painPointRepository.deleteById(id);
    }
}
