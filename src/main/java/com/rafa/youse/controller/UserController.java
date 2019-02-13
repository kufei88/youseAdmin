package com.rafa.youse.controller;

import com.rafa.youse.entity.returnMap;
import com.rafa.youse.services.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.autoconfigure.EnableAutoConfiguration;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import javax.servlet.http.HttpServletRequest;

@RestController
@EnableAutoConfiguration
@RequestMapping("/user")
public class UserController {
    @Autowired
    private UserService us;
    @RequestMapping(value="/login",method = RequestMethod.GET)
  public returnMap login(HttpServletRequest request){
      String username = request.getParameter("username");
      String password = request.getParameter("password");
      return us.login(username,password);
  }
}
