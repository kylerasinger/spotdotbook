package net.javaguides.springboot.controller;

import org.springframework.beans.factory.annotation.Value;
import org.springframework.stereotype.Service;
import org.springframework.util.StringUtils;
import org.springframework.web.multipart.MultipartFile;
import java.nio.file.Path;
import java.nio.file.Paths;
import java.nio.file.Files;
import java.io.File;
import java.io.IOException;
import net.javaguides.springboot.exception.FileStorageException;

public class StorageService {
	@Value("${com.springboot.tutorial.src.images}")
	public String uploadDir;
	
	public void uploadFile(MultipartFile file) {
		try {
			Path copyLocation = Paths.get(uploadDir + File.separator + StringUtils.cleanPath(file.getOriginalFilename()));				
			Files.copy(file.getInputStream(), copyLocation);
		} catch (IOException e) {		
			e.printStackTrace();
			throw new FileStorageException("Could not store file " + file.getOriginalFilename() + ", please try again.");
		}
	}
}