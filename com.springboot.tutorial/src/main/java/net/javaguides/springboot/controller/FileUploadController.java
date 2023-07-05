package net.javaguides.springboot.controller;

import net.javaguides.springboot.model.Image;
import net.javaguides.springboot.repository.ImageRepository;
import net.javaguides.springboot.util.ImageUtility;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;

import java.io.IOException;
import java.util.Optional;

@RestController
@CrossOrigin() //open for all ports, ~~
public class FileUploadController {
	@Autowired
	ImageRepository imageRepository;
	
	@PostMapping("/upload/image") //where is this path, NOT CREATED
	public ResponseEntity<ImageUploadResponse> uploadImage(@RequestParam("image") MultipartFile file)throws IOException{
		 imageRepository.save(Image.builder()
	                .name(file.getOriginalFilename())
	                .type(file.getContentType())
	                .image(ImageUtility.compressImage(file.getBytes())).build());
	     return ResponseEntity.status(HttpStatus.OK)
	                .body(new ImageUploadResponse("Image uploaded successfully: " +
	                        file.getOriginalFilename()));
		
	}
}
