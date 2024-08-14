package com.tablo.tablo.controller;

import com.tablo.tablo.dto.CreatePainPointDto;
import com.tablo.tablo.entity.CreatePainPointEntity;
import com.tablo.tablo.service.CreatePainPointService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/pain-points")
public class CreatePainPointController {

    private final CreatePainPointService painPointService;

    @Autowired
    public CreatePainPointController(CreatePainPointService painPointService) {
        this.painPointService = painPointService;
    }

    @PostMapping
    public ResponseEntity<CreatePainPointEntity> createPainPoint(@RequestBody CreatePainPointDto painPointDto) {
        CreatePainPointEntity painPoint = painPointService.createPainPoint(painPointDto);
        return ResponseEntity.status(201).body(painPoint);
    }

    @GetMapping
    public ResponseEntity<List<CreatePainPointEntity>> getAllPainPoints() {
        List<CreatePainPointEntity> painPoints = painPointService.getAllPainPoints();
        return ResponseEntity.ok(painPoints);
    }

    @GetMapping("/{id}")
    public ResponseEntity<CreatePainPointEntity> getPainPointById(@PathVariable Long id) {
        CreatePainPointEntity painPoint = painPointService.getPainPointById(id);
        return ResponseEntity.ok(painPoint);
    }

    @PutMapping("/{id}")
    public ResponseEntity<CreatePainPointEntity> updatePainPoint(@PathVariable Long id, @RequestBody CreatePainPointDto painPointDto) {
        CreatePainPointEntity updatedPainPoint = painPointService.updatePainPoint(id, painPointDto);
        return ResponseEntity.ok(updatedPainPoint);
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<Void> deletePainPoint(@PathVariable Long id) {
        painPointService.deletePainPoint(id);
        return ResponseEntity.noContent().build();
    }
}
