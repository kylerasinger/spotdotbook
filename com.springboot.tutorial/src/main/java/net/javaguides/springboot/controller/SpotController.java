package net.javaguides.springboot.controller;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import net.javaguides.springboot.exception.ResourceNotFoundException;
import net.javaguides.springboot.model.Spot;
import net.javaguides.springboot.repository.SpotRepository;


@CrossOrigin(origins = "http://localhost:3000")
@RestController
@RequestMapping("/api/v1/")
public class SpotController{
	
	@Autowired
	private SpotRepository spotRepository;
	
	// get all spots
	@GetMapping("/spots")
	public List< Spot > getAllSpots(){
		return spotRepository.findAll();
	}
	
	// create spot rest api
	@PostMapping("/spots")
	public Spot createSpot(@RequestBody Spot spot) {
		return spotRepository.save(spot);
	}
	
	// get spot by id rest api
	@GetMapping("/spots/{id}")
	public ResponseEntity <Spot> getSpotById(@PathVariable Long id) {
		Spot spot = spotRepository.findById(id)
				.orElseThrow(() -> new ResourceNotFoundException("Spot doesnt exist with id :" + id));
		return ResponseEntity.ok(spot);
	}
	
	// update spot rest api MIGHT HAVE ISSUES
	@PutMapping("/spots/{id}")
	public ResponseEntity <Spot> updateSpot(@PathVariable Long id, @RequestBody Spot spotDetails) {
		Spot spot = spotRepository.findById(id)
				.orElseThrow(() -> new ResourceNotFoundException("Spot doesn't exist with id: " + id));
		
		spot.setPlaceId(spotDetails.getPlaceId());
		spot.setFormattedAddress(spotDetails.getFormattedAddress());
		spot.setLatLong(spotDetails.getLatitude(), spotDetails.getLongitude());
		spot.setName(spotDetails.getName());
		spot.setType(spotDetails.getType());
		spot.setDate(spotDetails.getDate());
		
		Spot updatedSpot = spotRepository.save(spot);
		return ResponseEntity.ok(updatedSpot);		
	}
	
	// delete spot rest api
	@DeleteMapping("/spots/{id}")
	public ResponseEntity < Map < String, Boolean>> deleteSpot(@PathVariable Long id) {
		Spot spot = spotRepository.findById(id)
				.orElseThrow(() -> new ResourceNotFoundException("Spot doesnt exist with id :" + id));
		
		spotRepository.delete(spot);
		Map < String, Boolean > response = new HashMap <> ();
		
		response.put("deleted", Boolean.TRUE);
		return ResponseEntity.ok(response);
	}
	
}
