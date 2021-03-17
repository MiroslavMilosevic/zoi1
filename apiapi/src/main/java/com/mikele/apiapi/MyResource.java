package com.mikele.apiapi;

import java.io.File;
import java.io.FileOutputStream;
import java.io.IOException;
import java.io.InputStream;
import java.io.OutputStream;
import java.sql.SQLException;
import java.util.ArrayList;

import javax.servlet.http.HttpServletResponse;

import org.glassfish.jersey.media.multipart.FormDataContentDisposition;
import org.glassfish.jersey.media.multipart.FormDataParam;

import jakarta.ws.rs.Consumes;
import jakarta.ws.rs.DELETE;
import jakarta.ws.rs.FormParam;
import jakarta.ws.rs.GET;
import jakarta.ws.rs.POST;
import jakarta.ws.rs.Path;
import jakarta.ws.rs.PathParam;
import jakarta.ws.rs.Produces;
import jakarta.ws.rs.QueryParam;
import jakarta.ws.rs.WebApplicationException;
import jakarta.ws.rs.core.Context;
import jakarta.ws.rs.core.MediaType;
import jakarta.ws.rs.core.Response;
import pojo.MyServices;
import pojo.Telefon;

/**
 * Root resource (exposed at "myresource" path)
 */
@Path("myresource")
public class MyResource {


    @GET
    @Path("all/objects/")
    @Produces(MediaType.APPLICATION_JSON)
    public ArrayList<Telefon> getIt(@QueryParam("username") String username, @QueryParam("password") String password, 
    		@QueryParam("imgUrl") String imgUrl, @QueryParam("token") String token) throws SQLException {
 	   	
    	
    	MyServices myServices = new MyServices();
    	System.out.println("_____________________________________________________________________________________________________");
        System.out.println(username);    	
        System.out.println(password);    	
        System.out.println(token);    	
        System.out.println(imgUrl);    	
    	System.out.println("_____________________________________________________________________________________________________");
   //	response.setHeader("Access-Control-Allow-Origin", "*");
    //	response.
    	

// /   	Service service = new Service();
       // return service.returnCovekListFromDatabase();
        return myServices.returnList(username, password);
    }
    
    @GET
    @Path("insert/")
    //  @Path("insert/{marka}/{model}/{cena}/{kategorija}/{os}/{ram}/{rom}/{standardi}/{image}/{naslov}")
    @Produces(MediaType.APPLICATION_JSON)
    public void insertPhone(@QueryParam("username") String username, @QueryParam("password") String password  ,@QueryParam("marka") String marka, @QueryParam("model") String model,
    		@QueryParam("cena") String cena, @QueryParam("kategorija") String kategorija,
    		@QueryParam("os") String os, @QueryParam("ram") String ram, @QueryParam("rom") String rom,
    		@QueryParam("standardi") String standardi, @QueryParam("imgUrl") String imgUrl, @QueryParam("naslov") String naslov
    		) {
 	
    	System.out.println(marka+" +++++++++++++++++++++++++++++++++++++++++++++++++++++++"+model);
    	
    	System.out.println(marka+model+cena+kategorija+os+ram+rom+standardi+naslov+imgUrl);
    	Telefon telefon = new Telefon(0, marka, model, cena, kategorija , os, ram, rom, standardi, imgUrl, naslov);
    	MyServices ms = new MyServices();
    	boolean b = ms.insertNewPhone(telefon, username, password);
    	 System.out.println(b);
   
    }
    
    
    @GET
    @Path("log/")
    //  @Path("insert/{marka}/{model}/{cena}/{kategorija}/{os}/{ram}/{rom}/{standardi}/{image}/{naslov}")
    @Produces(MediaType.APPLICATION_JSON)
    public boolean insertPhone(@QueryParam("username") String username, @QueryParam("password") String password ) {
 	
    	MyServices ms = new MyServices();
    
   return ms.isAdminValid(ms.getListaAdmina(), username, password);
    } 
    
    @DELETE
    @Path("delete/")
    //  @Path("insert/{marka}/{model}/{cena}/{kategorija}/{os}/{ram}/{rom}/{standardi}/{image}/{naslov}")
    @Produces(MediaType.APPLICATION_JSON)
    public boolean deletePhone(@QueryParam("id") String id, @QueryParam("username") String username, @QueryParam("password") String password) {
 	
    	MyServices ms = new MyServices();
    
  return ms.deletePhone(Integer.parseInt(id), username, password);
    } 
    
    
    
    
    //
    
    
    
//    @POST
//    @Path("/pdf")
//    @Consumes({MediaType.MULTIPART_FORM_DATA})
//    public Response uploadPdfFile(  @FormDataParam("file") InputStream fileInputStream,
//            @FormDataParam("file") FormDataContentDisposition fileMetaData) throws Exception
//    {
//        String UPLOAD_PATH = "C:/Users/Milosevic/Desktop/uploadproba/";
//        String UPLOAD_PATH2 = "   C:\\Users\\Milosevic\\Desktop\\uploadproba";
//     
//        try
//        {
//            int read = 0;
//            byte[] bytes = new byte[1024];
//     
//            OutputStream out = new FileOutputStream(new File(UPLOAD_PATH + fileMetaData.getFileName()));
//            System.out.println(UPLOAD_PATH + fileMetaData.getFileName());
//            while ((read = fileInputStream.read(bytes)) != -1) 
//            {
//                out.write(bytes, 0, read);
//            }
//            out.flush();
//            out.close();
//        } catch (IOException e) 
//        {
//            throw new WebApplicationException("Error while uploading file. Please try again !!");
//        }
//        return Response.ok("Data uploaded successfully !!").build();
//    }
    

}
