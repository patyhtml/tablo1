package com.tablo.tablo.service;

import com.tablo.tablo.entity.FileEntity;
import com.tablo.tablo.repository.FileRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class FileService {

    @Autowired
    private FileRepository fileRepository;

    public List<FileEntity> getAllFiles() {
        return fileRepository.findAll();
    }

    public FileEntity getFileById(Long id) {
        Optional<FileEntity> file = fileRepository.findById(id);
        return file.orElse(null);
    }

    public FileEntity createFile(FileEntity file) {
        return fileRepository.save(file);
    }

    public FileEntity updateFile(Long id, FileEntity fileDetails) {
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
}
