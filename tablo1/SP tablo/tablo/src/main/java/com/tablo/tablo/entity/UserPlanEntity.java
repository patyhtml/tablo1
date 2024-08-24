package com.tablo.tablo.entity;

import jakarta.persistence.*;
import lombok.*;

import java.time.LocalDateTime;
import java.util.List;

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

    @OneToMany(mappedBy = "user_planId")
    private List<BoardEntity> users;
    @OneToMany(mappedBy = "plans")
    private List<BoardEntity> plans;

}
