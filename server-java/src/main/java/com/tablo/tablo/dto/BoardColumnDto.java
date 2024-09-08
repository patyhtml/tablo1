package com.tablo.tablo.dto;

import lombok.Builder;
import lombok.Data;
import java.util.List;

@Data
@Builder
public class BoardColumnDto {
    private Long id;
    private String name;

    private List<TaskDto> tasks;
}
