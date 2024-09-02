package com.tablo.tablo.service;

import com.tablo.tablo.entity.BoardColumnEntity;
import com.tablo.tablo.repository.BoardColumnRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class BoardColumnService {

    @Autowired
    private BoardColumnRepository boardColumnRepository; // import

    public List<BoardColumnEntity> getAllBoardColumns() {
        return boardColumnRepository.findAll();
    }

    public BoardColumnEntity getBoardColumnById(Long id) {
        Optional<BoardColumnEntity> boardColumn = boardColumnRepository.findById(id);
        return boardColumn.orElse(null);
    }

    public BoardColumnEntity createBoardColumn(BoardColumnEntity boardColumn) {
        return boardColumnRepository.save(boardColumn);
    }

    public BoardColumnEntity updateBoardColumn(Long id, BoardColumnEntity boardColumnDetails) {
        Optional<BoardColumnEntity> boardColumn = boardColumnRepository.findById(id);
        if (boardColumn.isPresent()) {
            BoardColumnEntity updatedBoardColumn = boardColumn.get();
            updatedBoardColumn.setName(boardColumnDetails.getName());
            // Aktualizuj inne pola w razie potrzeby
            return boardColumnRepository.save(updatedBoardColumn);
        } else {
            return null;
        }
    }

    public void deleteBoardColumn(Long id) {
        boardColumnRepository.deleteById(id);
    }
}
