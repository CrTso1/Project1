package com.example.demo.model;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Table(name = "tkb_class")
public class LearningClass {
	
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private long maLop;
	
	@Column(name = "ky")
	private String ky;
	
	@Column(name = "khoa")
	private String khoa;
	
	@Column(name = "ten")
	private String ten;
	
	@Column(name = "thu")
	private int thu;
	
	@Column(name = "thoiGian")
	private String thoiGian;
	
	@Column(name = "phong")
	private String phong;
	
	@Column(name = "lichThi")
	private String lichThi;
	
	public LearningClass() {
		
	}
	
	public LearningClass(String ky, String khoa, long maLop, String ten, int thu, String thoiGian, String phong ) {
		this.ky = ky;
		this.khoa = khoa;
		this.maLop = maLop;
		this.ten = ten;
		this.thu = thu;
		this.thoiGian = thoiGian;
		this.phong = phong;
	}

	public String getKy() {
		return ky;
	}

	public void setKy(String ky) {
		this.ky = ky;
	}

	public String getKhoa() {
		return khoa;
	}

	public void setKhoa(String khoa) {
		this.khoa = khoa;
	}

	public long getMaLop() {
		return maLop;
	}

	public void setMaLop(long maLop) {
		this.maLop = maLop;
	}

	public String getTen() {
		return ten;
	}

	public void setTen(String ten) {
		this.ten = ten;
	}

	public int getThu() {
		return thu;
	}

	public void setThu(int thu) {
		this.thu = thu;
	}

	public String getThoiGian() {
		return thoiGian;
	}

	public void setThoiGian(String thoiGian) {
		this.thoiGian = thoiGian;
	}

	public String getPhong() {
		return phong;
	}

	public void setPhong(String phong) {
		this.phong = phong;
	}

	public String getLichThi() {
		return lichThi;
	}

	public void setLichThi(String lichThi) {
		this.lichThi = lichThi;
	}
	
	

}
