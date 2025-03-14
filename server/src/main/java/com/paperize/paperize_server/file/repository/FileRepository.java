package com.paperize.paperize_server.file.repository;

import com.paperize.paperize_server.file.FileEntity;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;
import org.springframework.web.bind.annotation.PathVariable;

import java.util.List;
import java.util.Optional;
import java.util.UUID;

@Repository
public interface FileRepository extends JpaRepository<FileEntity, UUID> {

    Optional<List<FileEntity>> findByFolderId(UUID id);

    @Query("SELECT f FROM FileEntity f WHERE f.folder.id = :id")
    Optional<List<FileEntity>> findFolderFiles(@PathVariable("id") UUID id);

}
