package com.tablo.tablo.entity;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
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
    private Long userId;
    private Long planId;
    private LocalDateTime start;
    private LocalDateTime due;

}
