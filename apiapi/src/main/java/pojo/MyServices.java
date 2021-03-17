package pojo;

import java.sql.Connection;
import java.sql.DriverManager;
import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.sql.SQLException;
import java.sql.Statement;
import java.util.ArrayList;
import java.util.Iterator;

public class MyServices {

	private ArrayList<Admin> listaAdmina;

	public ArrayList<Admin> getListaAdmina() {
		return listaAdmina;
	}

	public void setListaAdmina(ArrayList<Admin> listaAdmina) {
		this.listaAdmina = listaAdmina;
	}

	public MyServices() {

		this.listaAdmina = new ArrayList<Admin>();
		ResultSet rs = null;
		try {
			Class.forName("com.mysql.jdbc.Driver");
			Connection conn = DriverManager.getConnection("jdbc:mysql://localhost:3306", "root", "123456789");
			Statement stmt = conn.createStatement();
			rs = stmt.executeQuery("SELECT * FROM telefoni_baza.admini");
			while (rs.next()) {
				this.listaAdmina.add(new Admin(rs.getInt(1), rs.getString(2), rs.getString(3)));
			}
		} catch (SQLException e) {
			// TODO Auto-generated catch block
			System.out.println("greska pri konekciji u konstruktoru");
			e.printStackTrace();
		} catch (ClassNotFoundException e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		}

	}


	public ArrayList<Telefon> returnList(String username, String password) {

		ArrayList<Telefon> listaTelefona = new ArrayList<Telefon>();
		// ArrayList<Admin> listaAdmina = new ArrayList<Admin>();

		ResultSet rs = null;
		// ResultSet rs2 = null;

		try {
			Class.forName("com.mysql.jdbc.Driver");
			Connection conn = DriverManager.getConnection("jdbc:mysql://localhost:3306", "root", "123456789");
			Statement stmt = conn.createStatement();
			// Statement stmt2 = conn.createStatement();
			rs = stmt.executeQuery("SELECT * FROM telefoni_baza.telefoni");
			// rs2=stmt2.executeQuery("SELECT * FROM telefoni_baza.admini");

			while (rs.next()) {
				listaTelefona.add(new Telefon(rs.getInt(1), rs.getString(2), rs.getString(3), rs.getString(4),
						rs.getString(5), rs.getString(6), rs.getString(7), rs.getString(8), rs.getString(9),
						rs.getString(10), rs.getString(11)));

			}
			

		} catch (SQLException e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		} catch (ClassNotFoundException e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		}
	//	if (isAdminValid(listaAdmina, username, password)) {
			return listaTelefona;
	//	} else {
	//		return new ArrayList<Telefon>();
	//	}         zato sto i korisnik bez sifre ima pristup obicnoj stranici
	}///

	public boolean insertNewPhone(Telefon telefon, String username, String password) {
		try {
			Class.forName("com.mysql.jdbc.Driver");
			Connection conn = DriverManager.getConnection("jdbc:mysql://localhost:3306", "root", "123456789");
			PreparedStatement preparedStmt = conn.prepareStatement(
					"INSERT INTO `telefoni_baza`.`telefoni` (`marka`, `model`, `cena`, `kategorija`, `os`, `ram`, `rom`, `standardi`, `image`, `naslov`) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?)");
			preparedStmt.setString(1, telefon.getMark());
			preparedStmt.setString(2, telefon.getModel());
			preparedStmt.setString(3, telefon.getCena());
			preparedStmt.setString(4, telefon.getKategorija());
			preparedStmt.setString(5, telefon.getOs());
			preparedStmt.setString(6, telefon.getRam());
			preparedStmt.setString(7, telefon.getRom());
			preparedStmt.setString(8, telefon.getStandardi());
			preparedStmt.setString(9, telefon.getImage());
			preparedStmt.setString(10, telefon.getNaslov());
//				Statement stmt = conn.createStatement();	
//				 stmt.execute("INSERT INTO telefoni_baza.telefoni (marka,model, cena, kategorija, os, ram, rom, standardi, image, naslov) VALUES"
//						+ " ('"+telefon.getMark()+"', '"+telefon.getModel()+"', '"+telefon.getCena()+"', '"+telefon.getKategorija()+"', '"+telefon.getOs()+"',"
//								+ " '"+telefon.getRam()+"', '"+telefon.getRom()+"', '"+telefon.getStandardi()+"', '"+telefon.getImage()+"', '"+telefon.getNaslov()+"')");

			if (isAdminValid(listaAdmina, username, password)) {
				preparedStmt.execute();
				return true;
			}
			// stmt.execute("INSERT INTO `telefoni_baza`.`telefoni` (`marka`, `model`,
			// `cena`, `kategorija`, `os`, `ram`, `rom`, `standardi`, `image`, `naslov`)
			// VALUES ('bla1', 'bla2 ', 'bla3', 'asdkfj', 'dfj', 'lkdfj', 'dkashf',
			// 'sdfkljh', 'kjsdfah', 'dkash')");

		} catch (SQLException e) {
			// TODO Auto-generated catch block
			System.out.println(false);
			return false;
			// e.printStackTrace();
		} catch (ClassNotFoundException e) {
			// TODO Auto-generated catch block
			System.out.println(false);
			// e.printStackTrace();
			return false;
		}

		return false;
	}
	//////////////////////////////////////////////////////////////////////////////
	public boolean deletePhone(int id, String username, String password) {
		try {
			Class.forName("com.mysql.jdbc.Driver");
			Connection conn = DriverManager.getConnection("jdbc:mysql://localhost:3306", "root", "123456789");
			PreparedStatement preparedStmt = conn.prepareStatement("DELETE FROM telefoni_baza.telefoni WHERE (id = ?)");
			preparedStmt.setInt(1, id);
			if (isAdminValid(listaAdmina, username, password)) {
				preparedStmt.execute();
				return true;
			}
			
		} catch (SQLException e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		} catch (ClassNotFoundException e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		}
		
		return false;
	}

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
	public boolean isAdminValid(ArrayList<Admin> listaAdmina, String username, String password) {

		for (int i = 0; i < listaAdmina.size(); i++) {

			if (listaAdmina.get(i).username.equals(username) && listaAdmina.get(i).password.equals(password)) {

				return true;
			}

		}

		return false;
	}

}
