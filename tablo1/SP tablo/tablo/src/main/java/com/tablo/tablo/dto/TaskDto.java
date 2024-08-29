package com.tablo.tablo.dto;

import lombok.Builder;
import lombok.Data;
import java.time.LocalDateTime;

@Data
@Builder
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
