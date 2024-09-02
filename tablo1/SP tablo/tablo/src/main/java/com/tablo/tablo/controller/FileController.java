package com.tablo.tablo.controller;

import com.tablo.tablo.dto.FileDto;
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


    // Pobierz wszystkie pliki
    @GetMapping
    public ResponseEntity<List<FileDto>> getAllFiles() {
        List<FileDto> files = fileService.getAllFiles();
        return ResponseEntity.ok(files);
    }

    // Pobierz plik po ID
    @GetMapping("/{id}")
    public ResponseEntity<FileDto> getFileById(@PathVariable Long id) {
        FileDto file = fileService.getFileById(id);
        return ResponseEntity.ok(file);
    }

    // Stwórz nowy plik
    @PostMapping
    public ResponseEntity<FileDto> createFile(@RequestBody FileDto fileDto) {
        FileDto createdFile = fileService.createFile(fileDto);
        return ResponseEntity.ok(createdFile);
    }

    // Zaktualizuj plik po ID
    @PutMapping("/{id}")
    public ResponseEntity<FileDto> updateFile(@PathVariable Long id, @RequestBody FileDto fileDto) {
        FileDto updatedFile = fileService.updateFile(id, fileDto);
        return ResponseEntity.ok(updatedFile);
    }

    // Usuń plik po ID
    @DeleteMapping("/{id}")
    public ResponseEntity<Void> deleteFile(@PathVariable Long id) {
        fileService.deleteFile(id);
        return ResponseEntity.noContent().build();
    }

    // Pobierz wszystkie pliki związane z konkretnym zadaniem (Task)
    @GetMapping("/task/{taskId}")
    public ResponseEntity<List<FileDto>> getFilesByTask(@PathVariable Long taskId) {
        List<FileDto> files = fileService.getFilesByTask(taskId);
        return ResponseEntity.ok(files);
    }
}
