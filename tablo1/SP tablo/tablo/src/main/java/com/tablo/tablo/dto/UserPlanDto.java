package com.tablo.tablo.dto;

import lombok.Data;
import java.time.LocalDateTime;

@Data
public class UserPlanDto {
    private Long id;
    private Long userId;
    private Long planId;
    private LocalDateTime start;
    private LocalDateTime due;
}
