package com.rafa.youse.services;

import com.rafa.youse.entity.returnMap;
import com.rafa.youse.mapper.UserMapper;
import com.rafa.youse.utils.securityUtil;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.Map;

@Service
public class UserService {
    @Autowired
    private UserMapper um;

    public returnMap login(String username,String password){
        returnMap rm = new returnMap();
        Map<String,Object> user = um.getUserByOperator(username);
        if(user == null){
            rm.setReturnCode(404);
        }else{
            if(user.get("终端口令") != null && securityUtil.decrypt(user.get("终端口令").toString(),"13579asdfgh24680").equals(password)){
                rm.setReturnCode(100);
                rm.setMsg(user.get("操作级别").toString());
            }
            else{
                rm.setReturnCode(500);
            }
        }
        return rm;
    }

    public void closeAccount(int bool){
        um.closeAccount(bool);
    }
}
