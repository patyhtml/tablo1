package com.tablo.tablo.dto;

import lombok.Builder;
import lombok.Data;

@Data
@Builder
public class PlanDto {
    private Long id;
    private String name;
    private Long price;
    private Long maxUsers;
    private Long maxBoards;
    private Long maxTasks;
    private Long maxPoints;
    private Long maxStorage;
}
