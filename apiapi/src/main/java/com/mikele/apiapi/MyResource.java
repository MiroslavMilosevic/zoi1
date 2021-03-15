package com.mikele.apiapi;

import java.io.File;
import java.io.FileOutputStream;
import java.io.IOException;
import java.io.InputStream;
import java.io.OutputStream;
import java.sql.SQLException;
import java.util.ArrayList;

import org.glassfish.jersey.media.multipart.FormDataContentDisposition;
import org.glassfish.jersey.media.multipart.FormDataParam;

import jakarta.ws.rs.Consumes;
import jakarta.ws.rs.FormParam;
import jakarta.ws.rs.GET;
import jakarta.ws.rs.POST;
import jakarta.ws.rs.Path;
import jakarta.ws.rs.PathParam;
import jakarta.ws.rs.Produces;
import jakarta.ws.rs.WebApplicationException;
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
    @Path("all/objects/{username}/{password}")
    @Produces(MediaType.APPLICATION_JSON)
    public ArrayList<Telefon> getIt(@PathParam("username") String username, @PathParam("password") String password) throws SQLException {
 	   	
    	
    	MyServices myServices = new MyServices();
    	
// /   	Service service = new Service();
       // return service.returnCovekListFromDatabase();
        return myServices.returnList(username, password);
    }
    
    @POST
    @Path("insert/{marka}/{model}")
//    @Produces(MediaType.APPLICATION_JSON)
//    @Consumes(MediaType.TEXT_PLAIN)
    public void insertPhone(@PathParam("marka") String marka, @PathParam("model") String model ) {
 	
    	System.out.println(marka+" +++++++++++++++++++++++++++++++++++++++++++++++++++++++"+model);
    	
   
    }
    
    
    
    
    
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
