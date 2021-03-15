package pojo;

public class Telefon {
   
	int id;
	private String mark;
	private String model;
	private String cena;
	private String kategorija;
	private String os;
	private String ram;
	private String rom;
	private String standardi;
	private String image;
	private String naslov;
	public Telefon(int id, String mark, String model, String cena, String kategorija, String os, String ram, String rom,
			String standardi, String image, String naslov) {
		super();
		this.id = id;
		this.mark = mark;
		this.model = model;
		this.cena = cena;
		this.kategorija = kategorija;
		this.os = os;
		this.ram = ram;
		this.rom = rom;
		this.standardi = standardi;
		this.image = image;
		this.naslov = naslov;
	}
	public int getId() {
		return id;
	}
	public void setId(int id) {
		this.id = id;
	}
	public String getMark() {
		return mark;
	}
	public void setMark(String mark) {
		this.mark = mark;
	}
	public String getModel() {
		return model;
	}
	public void setModel(String model) {
		this.model = model;
	}
	public String getCena() {
		return cena;
	}
	public void setCena(String cena) {
		this.cena = cena;
	}
	public String getKategorija() {
		return kategorija;
	}
	public void setKategorija(String kategorija) {
		this.kategorija = kategorija;
	}
	public String getOs() {
		return os;
	}
	public void setOs(String os) {
		this.os = os;
	}
	public String getRam() {
		return ram;
	}
	public void setRam(String ram) {
		this.ram = ram;
	}
	public String getRom() {
		return rom;
	}
	public void setRom(String rom) {
		this.rom = rom;
	}
	public String getStandardi() {
		return standardi;
	}
	public void setStandardi(String standardi) {
		this.standardi = standardi;
	}
	public String getImage() {
		return image;
	}
	public void setImage(String image) {
		this.image = image;
	}
	public String getNaslov() {
		return naslov;
	}
	public void setNaslov(String naslov) {
		this.naslov = naslov;
	}
	
	
}
