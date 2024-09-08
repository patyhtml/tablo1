package com.tablo.tablo.dto;

import lombok.Builder;
import lombok.Data;
import java.time.LocalDateTime;

@Data
@Builder
public class UserPlanDto {
    private Long userId;
    private Long planId;
    private LocalDateTime start;
}
