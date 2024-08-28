package com.tablo.tablo.repository;

import com.tablo.tablo.entity.PlanEntity;
import lombok.NoArgsConstructor;
import org.springframework.stereotype.Repository;

@NoArgsConstructor
@Repository
public class PlanRepositoryMock {
    public PlanEntity findById(int id){
        if (id == 1){
            return PlanEntity.builder()
                    .id(1L)
                    .name("Standard")
                    .price(0L)
                    .maxBoards(1L)
                    .maxTasks(1L)
                    .maxPoints(1L)
                    .maxStorage(1L)
                    .maxUsers(1L)
                    .build();
        } else if (id == 2){
            return PlanEntity.builder()
                    .id(2L)
                    .name("Classic")
                    .price(5L)
                    .maxBoards(2L)
                    .maxTasks(2L)
                    .maxPoints(2L)
                    .maxStorage(2L)
                    .maxUsers(2L)
                    .build();
        } else {
            return null;
        }
    }
}
