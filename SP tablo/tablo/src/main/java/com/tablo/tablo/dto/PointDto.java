package com.tablo.tablo.dto;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor

public class PointDto {
    private Long projectId;
    private String comment;
    private double xPosition; // Pozycja x na obrazie
    private double yPosition; // Pozycja y na obrazie
}

