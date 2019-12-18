//package com.stackroute.usermanagement.controller;
//
//
//import com.fasterxml.jackson.databind.ObjectMapper;
//import com.stackroute.usermanagement.model.User;
//import com.stackroute.usermanagement.service.UserServiceImpl;
//import org.junit.Before;
//import org.junit.Test;
//import org.junit.runner.RunWith;
//import org.mockito.InjectMocks;
//import org.mockito.MockitoAnnotations;
//import org.springframework.beans.factory.annotation.Autowired;
//import org.springframework.boot.test.autoconfigure.web.servlet.WebMvcTest;
//import org.springframework.boot.test.mock.mockito.MockBean;
//import org.springframework.http.MediaType;
//import org.springframework.test.context.junit4.SpringRunner;
//import org.springframework.test.web.servlet.MockMvc;
//import org.springframework.test.web.servlet.request.MockMvcRequestBuilders;
//import org.springframework.test.web.servlet.result.MockMvcResultHandlers;
//import org.springframework.test.web.servlet.result.MockMvcResultMatchers;
//import org.springframework.test.web.servlet.setup.MockMvcBuilders;
//
//import java.math.BigInteger;
//import java.util.ArrayList;
//import java.util.Date;
//import java.util.List;
//
//import static org.mockito.ArgumentMatchers.any;
//import static org.mockito.Mockito.when;
//
//@RunWith(SpringRunner.class)
//@WebMvcTest
//public class UserControllerTest {
//
//    @Autowired
//
//    private MockMvc mockMvc;
//    private User user;
//    @MockBean
//    private UserServiceImpl musicService;
//
//    @InjectMocks
//    private UserController userController;
//
//    private List<User> list =null;
////    private   String fileName = "12";
//
//
//    @Before
//    public void setUp(){
//
//        MockitoAnnotations.initMocks(this);
//        mockMvc = MockMvcBuilders.standaloneSetup(userController).build();
////        String number ="12";
//        String number ="1";
//        user = new User();
//         user.setNumber(BigInteger.ONE);
//         user.setAadharNo(123456789);
//         user.setDob(new Date(2009-02-02));
//         user.setEmail("johnr@cgi.com");
//         user.setFirstname("John");
//         user.setLastname("Roy");
//         user.setIsBlocked("Blocked");
//         user.setGender("Male");
//         user.setSubmittedOn(new Date());
//         user.setUpdatedAt(new Date(2019-11-11));
//
////        File file = new File(UserController.targetFolder + fileName);
//
//        list = new ArrayList();
//        list.add(user);
//    }
//
//
//
////    @Test
////    public void saveUserFailure() throws Exception {
////        String fileName = "test.txt";
////
////        MockMultipartFile mockMultipartFile = new MockMultipartFile("user-file",fileName,
////                "text/plain", "test data".getBytes());
////        when(musicService.saveUser(any())).thenThrow(UserAlreadyExistsException.class);
////        mockMvc.perform(MockMvcRequestBuilders.post("/api/v1/saveUserProfile").file(mockMultipartFile)
////                .contentType(MediaType.APPLICATION_JSON))
////                .andExpect(MockMvcResultMatchers.status().isConflict())
////                .andDo(MockMvcResultHandlers.print());
////    }
//
//    @Test
//    public void getAllTracks() throws Exception {
//        when(musicService.getAllUsers()).thenReturn(list);
//        mockMvc.perform(MockMvcRequestBuilders.get("/api/v1/getAllUsers")
//                .contentType(MediaType.APPLICATION_JSON).content(asJsonString(user)))
//                .andExpect(MockMvcResultMatchers.status().isOk())
//                .andDo(MockMvcResultHandlers.print());
//
//    }
//
//    @Test
//    public void update() throws Exception {
//        when(musicService.updateUser(any())).thenReturn(user);
//        mockMvc.perform(MockMvcRequestBuilders.post("/api/v1/update").content(asJsonString(user))
//                .contentType(MediaType.APPLICATION_JSON))
//                .andExpect(MockMvcResultMatchers.status().isOk())
//                .andDo(MockMvcResultHandlers.print());
//
//    }
//
////    @Test
////    public void updateStatus() throws Exception {
////        when(musicService.updateStatus(any())).thenReturn(user);
////        mockMvc.perform(MockMvcRequestBuilders.put("/api/v1/update/status").param(num,"1"))
////                .andExpect(MockMvcResultMatchers.status().isOk())
////                .andDo(MockMvcResultHandlers.print());
////
////    }
////    private byte[] asJsonString(MockMultipartFile mockMultipartFile, MockMultipartFile mockMultipartFiles, final Object user) {
////
////        try{
////            String json = new ObjectMapper().writeValueAsString(user);
////            String json1 =
////            return
////
////        }catch(Exception e){
////            throw new RuntimeException(e);
////        }
////    }
//
//    private static String asJsonString(final Object obj)
//    {
//        try{
//
//            return new ObjectMapper().writeValueAsString(obj);
//
//        }catch(Exception e){
//            throw new RuntimeException(e);
//        }
//    }
//
//
//
//
//
//
//
//
//
//
//}