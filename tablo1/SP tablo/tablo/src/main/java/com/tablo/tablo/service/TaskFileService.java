package com.tablo.tablo.service;

import com.tablo.tablo.entity.TaskFileEntity;
import com.tablo.tablo.repository.TaskFileRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class TaskFileService {

    @Autowired
    private TaskFileRepository taskFileRepository;

    public List<TaskFileEntity> getAllTaskFiles() {
        return taskFileRepository.findAll();
    }

    public TaskFileEntity getTaskFileById(Long id) {
        Optional<TaskFileEntity> taskFile = taskFileRepository.findById(id);
        return taskFile.orElse(null);
    }

    public TaskFileEntity createTaskFile(TaskFileEntity taskFile) {
        return taskFileRepository.save(taskFile);
    }

    public TaskFileEntity updateTaskFile(Long id, TaskFileEntity taskFileDetails) {
        Optional<TaskFileEntity> existingTaskFile = taskFileRepository.findById(id);
        if (existingTaskFile.isPresent()) {
            TaskFileEntity updatedTaskFile = existingTaskFile.get();
            // Aktualizuj pola, które muszą być zaktualizowane
            return taskFileRepository.save(updatedTaskFile);
        } else {
            return null;
        }
    }

    public void deleteTaskFile(Long id) {
        taskFileRepository.deleteById(id);
    }
}
