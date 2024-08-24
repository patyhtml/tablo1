package com.tablo.tablo.service;

import com.tablo.tablo.entity.TaskEntity;
import com.tablo.tablo.repository.TaskRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class TaskService {

    @Autowired
    private TaskRepository taskRepository;

    public List<TaskEntity> getAllTasks() {
        return taskRepository.findAll();
    }

    public TaskEntity getTaskById(Long id) {
        Optional<TaskEntity> task = taskRepository.findById(id);
        return task.orElse(null);
    }

    public TaskEntity createTask(TaskEntity task) {
        return taskRepository.save(task);
    }

    public TaskEntity updateTask(Long id, TaskEntity taskDetails) {
        Optional<TaskEntity> existingTask = taskRepository.findById(id);
        if (existingTask.isPresent()) {
            TaskEntity updatedTask = existingTask.get();
            updatedTask.setName(taskDetails.getName());
            updatedTask.setDescription(taskDetails.getDescription());
            updatedTask.setPriority(taskDetails.getPriority());
            updatedTask.setStart(taskDetails.getStart());
            updatedTask.setDue(taskDetails.getDue());
            return taskRepository.save(updatedTask);
        } else {
            return null;
        }
    }

    public void deleteTask(Long id) {
        taskRepository.deleteById(id);
    }
}
