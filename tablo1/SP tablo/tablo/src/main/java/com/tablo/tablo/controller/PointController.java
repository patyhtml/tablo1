package com.tablo.tablo.controller;

import com.tablo.tablo.entity.PointEntity;
import com.tablo.tablo.service.PointService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/points")
public class PointController {

    @Autowired
    private PointService pointService;

    @GetMapping
    public ResponseEntity<List<PointEntity>> getAllPoints() {
        return ResponseEntity.ok(pointService.getAllPoints());
    }

    @GetMapping("/{id}")
    public ResponseEntity<PointEntity> getPointById(@PathVariable Long id) {
        return ResponseEntity.ok(pointService.getPointById(id));
    }

    @PostMapping
    public ResponseEntity<PointEntity> createPoint(@RequestBody PointEntity point) {
        return ResponseEntity.ok(pointService.createPoint(point));
    }

    @PutMapping("/{id}")
    public ResponseEntity<PointEntity> updatePoint(@PathVariable Long id, @RequestBody PointEntity pointDetails) {
        return ResponseEntity.ok(pointService.updatePoint(id, pointDetails));
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<Void> deletePoint(@PathVariable Long id) {
        pointService.deletePoint(id);
        return ResponseEntity.noContent().build();
    }
}
