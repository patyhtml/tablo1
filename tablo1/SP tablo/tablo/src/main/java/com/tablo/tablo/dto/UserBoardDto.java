package com.tablo.tablo.dto;

import lombok.Data;

@Data
public class UserBoardDto {
    private Long id;
    private Long userId;
    private Long boardId;
    private boolean isOwner;
    private boolean isInvited;
}
