package com.tablo.tablo.service;

import com.tablo.tablo.dto.FileDto;
import com.tablo.tablo.entity.FileEntity;
import com.tablo.tablo.repository.FileRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

@Service
public class FileService {

    @Autowired
    private FileRepository fileRepository;

    public List<FileDto> getFilesByTask(Long taskId) {
        List<FileEntity> fileEntities = fileRepository.findAllByTaskId(taskId);
        List<FileDto> dtos = new ArrayList<>();
        for (FileEntity fileEntity : fileEntities) {
            FileDto fileDto = FileDto.builder()
                    .id(fileEntity.getId())
                    .fileName(fileEntity.getFileName())
                    .path(fileEntity.getPath())
                    .build();
            dtos.add(fileDto);
        }
        return dtos;
    }


    public FileDto getFileById(Long id) {
        Optional<FileEntity> file = fileRepository.findById(id);
        return file.orElse(null);
    }


    public FileDto createFile(FileDto file) {
        return fileRepository.save(file);
    }


    public FileDto updateFile(Long id, FileDto fileDetails) {
        Optional<FileEntity> existingFile = fileRepository.findById(id);
        if (existingFile.isPresent()) {
            FileEntity updatedFile = existingFile.get();
            updatedFile.setFileName(fileDetails.getFileName());
            updatedFile.setPath(fileDetails.getPath());
            return fileRepository.save(updatedFile);
        } else {
            return null;
        }
    }


    public void deleteFile(Long id) {
        fileRepository.deleteById(id);
    }

    public List<FileDto> getAllFiles() {
        return allFiles;
    }

    public void setAllFiles(List<FileDto> allFiles) {
        this.allFiles = allFiles;
    }
}
