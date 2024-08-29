package com.tablo.tablo.service;

import com.tablo.tablo.dto.BoardColumnDto;
import com.tablo.tablo.dto.BoardDto;
import com.tablo.tablo.dto.TaskDto;
import com.tablo.tablo.entity.BoardColumnEntity;
import com.tablo.tablo.entity.BoardEntity;
import com.tablo.tablo.entity.FileEntity;
import com.tablo.tablo.entity.TaskEntity;
import com.tablo.tablo.repository.TaskRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;
import java.util.Optional;
import java.util.stream.Collectors;

@Service
public class TaskService {

    @Autowired
    private TaskRepository taskRepository;


    public List<TaskDto> getTasksByBoardColumn(Long boardColumnId) {
        List<TaskEntity> taskEntities = taskRepository.findAllByBoardColumnId(boardColumnId);
        List<TaskDto> taskDtos = new ArrayList<>();

        for (TaskEntity taskEntity : taskEntities) {
            List<BoardColumnDto> columnDtos = new ArrayList<>();

            for (BoardColumnEntity columnEntity : taskEntity.getBoardColumns()) {
                List<BoardDto> boardDtos = new ArrayList<>();

                for (BoardEntity boardEntity : columnEntity.getBoards()) {
                    BoardDto boardDto = BoardDto.builder()
                            .id(boardEntity.getId())
                            .name(boardEntity.getName())
                            .build();
                    boardDtos.add(boardDto);
                }

                BoardColumnDto columnDto = BoardColumnDto.builder()
                        .id(columnEntity.getId())
                        .name(columnEntity.getName())
                        .boards(boardDtos)
                        .build();
                columnDtos.add(columnDto);
            }

            TaskDto taskDto = TaskDto.builder()
                    .id(taskEntity.getId())
                    .name(taskEntity.getName())
                    .description(taskEntity.getDescription())
                    .priority(taskEntity.getPriority())
                    .start(taskEntity.getStart())
                    .due(taskEntity.getDue())
                    .boardColumns(columnDtos)
                    .build();

            taskDtos.add(taskDto);
        }

        return taskDtos;
    }

    public TaskEntity getTaskById(Long id) {
        Optional<TaskEntity> task = taskRepository.findById(id);
        return task.orElse(null);
    }

    public TaskEntity createTask(TaskDto taskDto) {
        TaskEntity taskEntity = TaskEntity.builder()
                .name(taskDto.getName())
                .description(taskDto.getDescription())
                .priority(taskDto.getPriority())
                .start(taskDto.getStart())
                .due(taskDto.getDue())
                .build();

        List<FileEntity> files = taskDto.getFiles().stream()
                .map(fileDto -> FileEntity.builder()
                        .fileName(fileDto.getFileName())
                        .path(fileDto.getPath())
                        .task(taskEntity)
                        .build())
                .collect(Collectors.toList());

        fileRepository.saveAll(files);

        taskEntity.setFiles(files);
        return taskRepository.saveAndFlush(taskEntity);
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
            List<FileEntity> files = taskDetails.getFiles().stream()
                    .map(fileDto -> FileEntity.builder()
                            .fileName(fileDto.getFileName())
                            .path(fileDto.getPath())
                            .task(updatedTask)
                    .collect(Collectors.toList());

            fileRepository.saveAll(files);
            updatedTask.setFiles(files);
            return taskRepository.save(updatedTask);
        } else {
            return null;
        }
    }

    public void deleteTask(Long id) {
        taskRepository.deleteById(id);
    }


}
