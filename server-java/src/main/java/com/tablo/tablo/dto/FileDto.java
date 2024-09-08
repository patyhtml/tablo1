package com.tablo.tablo.dto;

import lombok.Builder;
import lombok.Data;

import java.util.List;

@Data
@Builder
public class FileDto {
    private Long id;
    private String fileName;
    private String path;
    private List<TaskDto> tasks;
}
