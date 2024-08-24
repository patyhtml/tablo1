package com.tablo.tablo.entity;

import jakarta.persistence.*;
import lombok.*;

import java.util.List;

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
    private Long max_users;
    private Long max_boards;
    private Long max_tasks;
    private Long max_points;
    private Long max_storage;

    @OneToMany(mappedBy = "planId")
    private List<BoardColumnEntity> users_plans;
}