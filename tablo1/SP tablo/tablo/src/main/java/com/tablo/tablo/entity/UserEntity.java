package com.tablo.tablo.entity;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import lombok.*;

@Entity(name = "public.user")
@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
@Builder
public class UserEntity {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    private Long avatar_id;
    private Long email;
    private Long password;
    private Long name;
}
