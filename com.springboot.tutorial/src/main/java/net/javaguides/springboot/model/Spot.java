package net.javaguides.springboot.model;

import jakarta.persistence.*;

@Entity
@Table(name = "spots")
public class Spot {
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private long id;
	
	@Column(name = "place_Id")
	private String placeId;
	
	@Column(name = "formatted_address")
	private String formattedAddress;
	
	@Column(name = "Latitude")
	private double latitude;
	
	@Column(name = "Longitude")
	private double longitude;
	
	@Column(name = "Name")
	private String name;
	
	@Column(name = "Type")
	private String type;
	
	public Spot() {
		
	}
	
	public Spot(String placeId, String formattedAddress, double latitude, double longitude, String name, String type) {
		super();
		this.placeId = placeId;
		this.formattedAddress = formattedAddress;
		this.latitude = latitude;
		this.longitude = longitude;
		this.name = name;	
		this.type = type;
	}
	
	public long getId() {
		return id;
	}
	
	public void setId(long id) {
		this.id = id;
	}
	
	public String getPlaceId() {
		return placeId;
	}
	
	public void setPlaceId(String placeId) {
		this.placeId = placeId;
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
	
	public String getType() {
		return type;
	}
	
	public void setType(String type) {
		this.type = type;
	}
}