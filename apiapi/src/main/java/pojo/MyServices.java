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

	
	
	
//	public ArrayList<Telefon> returnList(){
//		
//		ArrayList<Telefon> listaTelefona = new ArrayList<Telefon>();
//		
//		
//		listaTelefona.add(new Telefon(1, "A50", "Samsung", "4GB", "https://images.samsung.com/is/image/samsung/ie-galaxy-a51-sm-a515fzkveua-front-206100441?$720_576_PNG$"));
//		listaTelefona.add(new Telefon(2, "A60", "Samsung", "4GB", "https://images.samsung.com/is/image/samsung/ie-galaxy-a51-sm-a515fzkveua-front-206100441?$720_576_PNG$"));
//		listaTelefona.add(new Telefon(3, "A70", "Samsung", "4GB", "https://images.samsung.com/is/image/samsung/ie-galaxy-a51-sm-a515fzkveua-front-206100441?$720_576_PNG$"));
//		listaTelefona.add(new Telefon(4, "A80", "Samsung", "4GB", "https://images.samsung.com/is/image/samsung/ie-galaxy-a51-sm-a515fzkveua-front-206100441?$720_576_PNG$"));
//		listaTelefona.add(new Telefon(5, "A90", "Samsung", "4GB", "https://images.samsung.com/is/image/samsung/ie-galaxy-a51-sm-a515fzkveua-front-206100441?$720_576_PNG$"));
//	
//	return listaTelefona;
//	}
	
	
public ArrayList<Telefon> returnList(String username, String password){
		
		ArrayList<Telefon> listaTelefona = new ArrayList<Telefon>();
		ArrayList<Admin> listaAdmina = new ArrayList<Admin>();
		

		ResultSet rs = null;
		ResultSet rs2 = null;
		
		try {
			Class.forName("com.mysql.jdbc.Driver");  
			Connection conn = DriverManager.getConnection("jdbc:mysql://localhost:3306","root","123456789");
			Statement stmt = conn.createStatement();
			Statement stmt2 = conn.createStatement();
			rs=stmt.executeQuery("SELECT * FROM telefoni_baza.telefoni");
			rs2=stmt2.executeQuery("SELECT * FROM telefoni_baza.admini");
			
			while(rs.next())
			{	
			listaTelefona.add(new Telefon(rs.getInt(1), rs.getString(2), rs.getString(3), rs.getString(4), rs.getString(5), rs.getString(6), 
					rs.getString(7),rs.getString(8),rs.getString(9),rs.getString(10),rs.getString(11)));
				
		
			}	
			while(rs2.next()) {
				listaAdmina.add(new Admin(rs2.getInt(1), rs2.getString(2), rs2.getString(3)));
				System.out.println(rs2.getInt(1)+ rs2.getString(2)+ rs2.getString(3));
			}
			
		} catch (SQLException e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		} catch (ClassNotFoundException e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		}
		if(isAdminValid(listaAdmina, username, password)) {
	return listaTelefona;
		}else {
			return new ArrayList<Telefon>();
		}
	}///

     public boolean insertNewPhone(Telefon telefon, String username, String password) {
    	 
    	 
    	 
    	 return false;
     }


	
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
public boolean isAdminValid(ArrayList<Admin> listaAdmina, String username, String password) {
	
	    
	    for(int i=0; i<listaAdmina.size(); i++) {
	    	
	    	if(listaAdmina.get(i).username.equals(username)  && listaAdmina.get(i).password.equals(password)) {
	    		
	    		return true;    	
	    	}
	             		
	    }
	
	return false;
}
	
	
	





	
}
