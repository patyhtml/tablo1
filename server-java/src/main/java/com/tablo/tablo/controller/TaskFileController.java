package com.tablo.tablo.controller;

import com.tablo.tablo.entity.TaskFileEntity;
import com.tablo.tablo.service.TaskFileService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api/tasks-files")
public class TaskFileController {

    @Autowired
    private TaskFileService taskFileService;


    @GetMapping("/get-all/{taskFileId}")
    public ResponseEntity<TaskFileEntity> getTaskFileById(@PathVariable Long taskFileId) {
        return ResponseEntity.ok(taskFileService.getTaskFileById(taskFileId));
    }

    @PostMapping
    public ResponseEntity<TaskFileEntity> createTaskFile(@RequestBody TaskFileEntity taskFile) {
        return ResponseEntity.ok(taskFileService.createTaskFile(taskFile));
    }

    @PutMapping("/{id}")
    public ResponseEntity<TaskFileEntity> updateTaskFile(@PathVariable Long id, @RequestBody TaskFileEntity taskFileDetails) {
        return ResponseEntity.ok(taskFileService.updateTaskFile(id, taskFileDetails));
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<Void> deleteTaskFile(@PathVariable Long id) {
        taskFileService.deleteTaskFile(id);
        return ResponseEntity.noContent().build();
    }
}
