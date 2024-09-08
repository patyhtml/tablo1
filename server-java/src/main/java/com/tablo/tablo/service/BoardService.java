package com.tablo.tablo.service;

import com.tablo.tablo.dto.BoardColumnDto;
import com.tablo.tablo.dto.BoardDto;
import com.tablo.tablo.dto.TaskDto;
import com.tablo.tablo.entity.BoardColumnEntity;
import com.tablo.tablo.entity.BoardEntity;
import com.tablo.tablo.entity.TaskEntity;
import com.tablo.tablo.entity.UserBoardEntity;
import com.tablo.tablo.repository.BoardRepository;
import com.tablo.tablo.repository.UserBoardRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

@Service
public class BoardService {

    @Autowired
    private BoardRepository boardRepository;

    private UserBoardRepository userBoardRepository;

    public List<BoardDto> getUserBoards(Long userId) {
//        List<BoardEntity> boardEntity = boardRepository.findAllByUserId(userId);
        // Powyższą linię zakomentowałem, bo pobierałaby tylko tablice, których user jest właścicielem, co do zasady informację o właścicielu możemy usunąć z tej tabeli, bo relację między użytkownikiem a tablicą opisuje tabela board_users
        List<UserBoardEntity> userBoards = this.userBoardRepository.findAllByUserId(userId);
        List<BoardDto> boardDtos = new ArrayList<>();
        for(UserBoardEntity userBoard : userBoards) { // iterujemy po wszystkich połączeniach userów z tablicami, zakładamy, że nie ma dwóch takich samych (powinniśmy się przed tym zabezpieczyć)
            List<BoardColumnEntity> boardColumnsEntities = userBoard.getBoard().getBoardsColumns(); //pobieramy listę kolumn tablicy
            List<BoardColumnDto> boardColumnsDtos = new ArrayList<>(); // inicjujemy pustą listę którą będziemy uzupełniać "przepakowanymi" danymi, co do zasady tutaj powinniśmy stworzyć osobną klasę mappera, który się tym zajmie, a nie pchać tego do serwisu, gdzie powinna być stricte logika
            for(BoardColumnEntity boardColumn : boardColumnsEntities) { // iterujemy po kolumnach
                List<TaskDto> taskDtos = new ArrayList<>(); //inicjujemy pustą listę dla tasków w kolumnie
                for(TaskEntity taskEntity : boardColumn.getTasks()) { //iterujemy po taskach kolumny, w celu mapowania na dto
                    taskDtos.add(
                            TaskDto.builder()
                                    .id(taskEntity.getId())
                                    .userId(taskEntity.getUserId())
                                    .name(taskEntity.getName())
                                    .description(taskEntity.getDescription())
                                    .priority(taskEntity.getPriority())
                                    .start(taskEntity.getStart())
                                    .due(taskEntity.getDue())
                                    .build()
                    ); // dodajemy od razu zbudowany builderem obiekt klasy TaskDto do listy tasków
                }
                boardColumnsDtos.add(
                        BoardColumnDto.builder()
                                .id(boardColumn.getId())
                                .name(boardColumn.getName())
                                .tasks(taskDtos)
                                .build()
                ); // analogicznie dodajemy dto kolumny
            }
            boardDtos.add(BoardDto.builder()
                    .id(userBoard.getBoard().getId())
                    .role(userBoard.getRole())
                    .boardColumns(boardColumnsDtos)
                    .name(userBoard.getBoard().getName())
                    .build()
            ); //to miejsce jest bardzo ważne bo tutaj jest trochę logiki, mianowicie łączymy informacje o konkretnej tablicy z informacją o stosunku użytkownika do tej tablicy
            // OGÓLNIE UŻYTE TUTAJ DTO MOGŁYBY BYĆ W JEDNYM PLIKU JAKO "PODKLASY" STATYCZNE DO KLASY BoardDto, dla porządku, bo później będzie problem z nazewnictwem.
        }

        return boardDtos;
    }

    public BoardEntity getBoardById(Long id) {
        Optional<BoardEntity> board = boardRepository.findById(id);
        return board.orElse(null);
    }

    public BoardDto createBoard(BoardDto board) {
        return boardRepository.save(board);
    }

    public BoardDto updateBoard(Long id, BoardEntity boardDetails) {
        Optional<BoardEntity> board = boardRepository.findById(id);
        if (board.isPresent()) {
            BoardEntity updatedBoard = board.get();
            updatedBoard.setName(boardDetails.getName());

            return boardRepository.save(updatedBoard);
        } else {
            return null;
        }
    }

    public void deleteBoard(Long id) {
        boardRepository.deleteById(id);
    }
}
