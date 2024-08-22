package com.tablo.tablo.entity;


import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import lombok.*;

@Entity(name = "public.users_boards")
@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
@Builder
public class UserBoardEntity {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    private Long board_id;
    private Long email;
    private boolean isOwner;
    private boolean isInvited;

}


