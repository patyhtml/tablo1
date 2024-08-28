package com.tablo.tablo.dto;

import lombok.Builder;
import lombok.Data;

@Data
@Builder
public class BoardColumnDto {
    private Long id;
    private String name;
    private Long boardId;
    private List<TaskDto> tasks;
}
