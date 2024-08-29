package com.tablo.tablo.dto;

import lombok.Builder;
import lombok.Data;

@Data
@Builder
public class UserBoardDto {
    private Long id;
    private Long userId;
    private Long boardId;
    private boolean isOwner;
    private boolean isInvited;
}
