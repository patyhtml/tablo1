package com.tablo.tablo.dto;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import java.time.LocalDate;

@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
public class CreateProjectDto {
    private String name;
    private String description;
    private String email;
    private String tag;
    private String priority; // high, normal, low, clear
    private LocalDate startDate;
    private LocalDate endDate;
    private String attachment; // ścieżka do załącznika lub URL
}
