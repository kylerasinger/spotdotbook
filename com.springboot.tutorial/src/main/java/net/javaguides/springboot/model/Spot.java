package net.javaguides.springboot.model;

import jakarta.persistence.*;

@Entity
@Table(name = "spots")
public class Spot {
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private long id;
	
	@Column(name = "place_ID")
	private String placeID;
	
	@Column(name = "formatted_address")
	private String formattedAddress;
	
	@Column(name = "Latitude")
	private double latitude;
	
	@Column(name = "Longitude")
	private double longitude;
	
	@Column(name = "Name")
	private String name;
	
	public Spot(String placeID, String formattedAddress, double latitude, double longitude, String name) {
		super();
		this.placeID = placeID;
		this.formattedAddress = formattedAddress;
		this.latitude = latitude;
		this.longitude = longitude;
		this.name = name;		
	}
	
	public long getId() {
		return id;
	}
	
	public void setId(long id) {
		this.id = id;
	}
	
	public String getPlaceID() {
		return placeID;
	}
	
	public void setPlaceID(String placeID) {
		this.placeID = placeID;
	}
	
	
	public String getFormattedAddress() {
		return formattedAddress;
	}
	
	public void setFormattedAddress(String formattedAddress) {
		this.formattedAddress = formattedAddress;
	}
	
	public double getLatitude() {
		return latitude;
	}
	
	public double getLongitude() {
		return longitude;
	}
	
	public void setLatLong(double latitude, double longitude) {
		this.latitude = latitude;
		this.longitude = longitude;
	}
	
	public String getName() {
		return name;
	}
	
	public void setName(String name) {
		this.name = name;
	}
}