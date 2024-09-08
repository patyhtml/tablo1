package com.tablo.tablo.entity;

import jakarta.persistence.*;
import lombok.*;

import java.time.LocalDateTime;

@Entity(name = "public.users_plans")
@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
@Builder

public class UserPlanEntity {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    private Long userId;
    private LocalDateTime start;
    private LocalDateTime due;


    @ManyToOne
    @JoinColumn(name = "plan_id", referencedColumnName = "id")
    private PlanEntity plan;

}
