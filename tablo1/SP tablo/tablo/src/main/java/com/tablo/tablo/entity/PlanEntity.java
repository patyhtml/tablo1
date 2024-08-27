package com.tablo.tablo.entity;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import lombok.*;

@Entity(name = "public.plans")
@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
@Builder
public class PlanEntity {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    private String name;
    private Long price;
    private Long maxUsers;
    private Long maxBoards;
    private Long maxTasks;
    private Long maxPoints;
    private Long maxStorage;

}