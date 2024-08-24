package com.tablo.tablo.dto;

import lombok.Data;
import java.time.LocalDateTime;

@Data
public class PointDto {
    private Long id;
    private Long cordX;
    private Long cordY;
    private String name;
    private LocalDateTime createdAt;
    private Long taskId;
    private Long userId;
    private Long fileId;
}
