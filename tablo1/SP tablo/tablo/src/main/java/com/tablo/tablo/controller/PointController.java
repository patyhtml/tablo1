package com.tablo.tablo.controller;

import com.tablo.tablo.dto.PointDto;
import com.tablo.tablo.entity.PointEntity;
import com.tablo.tablo.service.PointService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/points")  // Zmieniono z /pain-points na /points
public class PointController {

    private final PointService pointService;

    @Autowired
    public PointController(PointService pointService) {
        this.pointService = pointService;
    }

    @PostMapping
    public ResponseEntity<PointEntity> createPoint(@RequestBody PointDto pointDto) {
        PointEntity point = pointService.createPoint(pointDto);  // Zmieniono metodę z pointPain na createPoint
        return ResponseEntity.status(201).body(point);
    }

    @GetMapping
    public ResponseEntity<List<PointEntity>> getAllPoints() {
        List<PointEntity> points = pointService.getAllPoints();  // Zmieniono nazwę metody na getAllPoints
        return ResponseEntity.ok(points);
    }

    @GetMapping("/{id}")
    public ResponseEntity<PointEntity> getPointById(@PathVariable Long id) {
        PointEntity point = pointService.getPointById(id);  // Zmieniono z getPainPointById na getPointById
        return ResponseEntity.ok(point);
    }

    @PutMapping("/{id}")
    public ResponseEntity<PointEntity> updatePoint(@PathVariable Long id, @RequestBody PointDto pointDto) {
        PointEntity updatedPoint = pointService.updatePoint(id, pointDto);  // Zmieniono z updatePainPoint na updatePoint
        return ResponseEntity.ok(updatedPoint);
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<Void> deletePoint(@PathVariable Long id) {
        pointService.deletePoint(id);  // Zmieniono z deletePainPoint na deletePoint
        return ResponseEntity.noContent().build();
    }
}
