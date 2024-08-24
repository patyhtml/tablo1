package com.tablo.tablo.controller;

import com.tablo.tablo.entity.FileEntity;
import com.tablo.tablo.service.FileService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/files")
public class FileController {

    @Autowired
    private FileService fileService;

    @GetMapping
    public ResponseEntity<List<FileEntity>> getAllFiles() {
        return ResponseEntity.ok(fileService.getAllFiles());
    }

    @GetMapping("/{id}")
    public ResponseEntity<FileEntity> getFileById(@PathVariable Long id) {
        return ResponseEntity.ok(fileService.getFileById(id));
    }

    @PostMapping
    public ResponseEntity<FileEntity> createFile(@RequestBody FileEntity file) {
        return ResponseEntity.ok(fileService.createFile(file));
    }

    @PutMapping("/{id}")
    public ResponseEntity<FileEntity> updateFile(@PathVariable Long id, @RequestBody FileEntity fileDetails) {
        return ResponseEntity.ok(fileService.updateFile(id, fileDetails));
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<Void> deleteFile(@PathVariable Long id) {
        fileService.deleteFile(id);
        return ResponseEntity.noContent().build();
    }
}
