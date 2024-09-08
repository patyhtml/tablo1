package com.tablo.tablo.service;

import com.tablo.tablo.dto.FileDto;
import com.tablo.tablo.dto.PointDto;
import com.tablo.tablo.dto.TaskDto;
import com.tablo.tablo.entity.FileEntity;
import com.tablo.tablo.entity.PointEntity;
import com.tablo.tablo.entity.TaskEntity;
import com.tablo.tablo.repository.PointRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

@Service
public class PointService {

    @Autowired
    private PointRepository pointRepository;

    public List<PointDto> getPointsByTask(Long taskId) {
        List<PointEntity> pointEntities = pointRepository.findAllByTaskId(taskId);
        List<PointDto> dtos = new ArrayList<>();

        for (PointEntity pointEntity : pointEntities) {
            TaskEntity task = pointEntity.getTask();
            FileEntity file = pointEntity.getFile();

            TaskDto taskDto = TaskDto.builder()
                    .id(task.getId())
                    .name(task.getName())
                    .description(task.getDescription())
                    .priority(task.getPriority())
                    .start(task.getStart())
                    .due(task.getDue())
                    .build();

            FileDto fileDto = FileDto.builder()
                    .id(file.getId())
                    .fileName(file.getFileName())
                    .path(file.getPath())
                    .build();

            PointDto pointDto = PointDto.builder()
                    .id(pointEntity.getId())
                    .name(pointEntity.getName())
                    .cordX(pointEntity.getCordX())
                    .cordY(pointEntity.getCordY())
                    .taskId(taskDto)
                    .file(fileDto)
                    .build();

            dtos.add(pointDto);
        }
        return dtos;
    }

    public List<PointDto> getPointsByFile(Long fileId) {
        List<PointEntity> pointEntities = pointRepository.findAllByFileId(fileId);
        List<PointDto> dtos = new ArrayList<>();

        for (PointEntity pointEntity : pointEntities) {
            TaskEntity task = pointEntity.getTask();
            FileEntity file = pointEntity.getFile();

            TaskDto taskDto = TaskDto.builder()
                    .id(task.getId())
                    .name(task.getName())
                    .description(task.getDescription())
                    .priority(task.getPriority())
                    .start(task.getStart())
                    .due(task.getDue())
                    .build();

            FileDto fileDto = FileDto.builder()
                    .id(file.getId())
                    .fileName(file.getFileName())
                    .path(file.getPath())
                    .build();

            PointDto pointDto = PointDto.builder()
                    .id(pointEntity.getId())
                    .name(pointEntity.getName())
                    .cordX(pointEntity.getCordX())
                    .cordY(pointEntity.getCordY())
                    .tasks(taskDto)
                    .file(fileDto)
                    .build();

            dtos.add(pointDto);
        }
        return dtos;
    }

    public PointEntity getPointById(Long id) {
        Optional<PointEntity> point = pointRepository.findById(id);
        return point.orElse(null);
    }

    public PointEntity createPoint(PointEntity point) {
        return pointRepository.save(point);
    }

    public PointEntity updatePoint(Long id, PointEntity pointDetails) {
        Optional<PointEntity> existingPoint = pointRepository.findById(id);
        if (existingPoint.isPresent()) {
            PointEntity updatedPoint = existingPoint.get();
            updatedPoint.setName(pointDetails.getName());
            updatedPoint.setCordX(pointDetails.getCordX());
            updatedPoint.setCordY(pointDetails.getCordY());
            updatedPoint.setTask(pointDetails.getTask());
            updatedPoint.setFile(pointDetails.getFile());
            return pointRepository.save(updatedPoint);
        } else {
            return null;
        }
    }

    public void deletePoint(Long id) {
        pointRepository.deleteById(id);
    }
}
