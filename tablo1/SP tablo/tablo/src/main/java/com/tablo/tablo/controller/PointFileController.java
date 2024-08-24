package com.tablo.tablo.controller;

import com.tablo.tablo.entity.PointFileEntity;
import com.tablo.tablo.service.PointFileService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/points-files")
public class PointFileController {

    @Autowired
    private PointFileService pointFileService;

    @GetMapping
    public ResponseEntity<List<PointFileEntity>> getAllPointFiles() {
        return ResponseEntity.ok(pointFileService.getAllPointFiles());
    }

    @GetMapping("/{id}")
    public ResponseEntity<PointFileEntity> getPointFileById(@PathVariable Long id) {
        return ResponseEntity.ok(pointFileService.getPointFileById(id));
    }

    @PostMapping
    public ResponseEntity<PointFileEntity> createPointFile(@RequestBody PointFileEntity pointFile) {
        return ResponseEntity.ok(pointFileService.createPointFile(pointFile));
    }

    @PutMapping("/{id}")
    public ResponseEntity<PointFileEntity> updatePointFile(@PathVariable Long id, @RequestBody PointFileEntity pointFileDetails) {
        return ResponseEntity.ok(pointFileService.updatePointFile(id, pointFileDetails));
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<Void> deletePointFile(@PathVariable Long id) {
        pointFileService.deletePointFile(id);
        return ResponseEntity.noContent().build();
    }
}
