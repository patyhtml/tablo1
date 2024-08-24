package com.tablo.tablo.dto;

import lombok.Data;
import java.time.LocalDateTime;

@Data
public class TaskDto {
    private Long id;
    private String name;
    private String description;
    private String priority;
    private LocalDateTime start;
    private LocalDateTime due;
    private Long boardColumnId;
    private Long userId;
}
