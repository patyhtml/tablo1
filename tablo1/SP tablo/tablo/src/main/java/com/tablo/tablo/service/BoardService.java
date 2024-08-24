package com.tablo.tablo.service;

import com.tablo.tablo.entity.BoardEntity;
import com.tablo.tablo.repository.BoardRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class BoardService {

    @Autowired
    private BoardRepository boardRepository;

    public List<BoardEntity> getAllBoards() {
        return boardRepository.findAll();
    }

    public BoardEntity getBoardById(Long id) {
        Optional<BoardEntity> board = boardRepository.findById(id);
        return board.orElse(null);
    }

    public BoardEntity createBoard(BoardEntity board) {
        return boardRepository.save(board);
    }

    public BoardEntity updateBoard(Long id, BoardEntity boardDetails) {
        Optional<BoardEntity> board = boardRepository.findById(id);
        if (board.isPresent()) {
            BoardEntity updatedBoard = board.get();
            updatedBoard.setName(boardDetails.getName());
            // Aktualizuj inne pola w razie potrzeby
            return boardRepository.save(updatedBoard);
        } else {
            return null;
        }
    }

    public void deleteBoard(Long id) {
        boardRepository.deleteById(id);
    }
}
