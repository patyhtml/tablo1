package com.tablo.tablo.dto;

import lombok.Builder;
import lombok.Data;
import java.util.List;

@Data
@Builder
public class BoardDto {
    private Long id;
    private String name;
    private List<BoardColumnDto> boardColumns;
}
