package com.tablo.tablo.dto;

import lombok.Builder;
import lombok.Data;

@Data
@Builder
public class TaskFileDto {
    private Long id;
    private Long taskId;
    private Long fileId;
}
