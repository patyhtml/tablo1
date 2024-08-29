package com.tablo.tablo.dto;

import lombok.Builder;
import lombok.Data;
import java.time.LocalDateTime;
import java.util.List;

@Data
@Builder
public class PointDto {
    private Long id;
    private Long cordX;
    private Long cordY;
    private String name;
    private LocalDateTime createdAt;
    private Long taskId;
    private Long userId;
    private Long fileId;
    private List<TaskDto> tasks;
    private List<FileDto> files;
}
