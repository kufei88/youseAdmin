package com.rafa.youse.mapper;

import org.apache.ibatis.annotations.Select;
import org.apache.ibatis.annotations.Update;

import java.util.Map;

public interface UserMapper {
    @Select("select * from 操作员 where 操作员=#{operator}")
    Map<String,Object> getUserByOperator(String operator);

    @Update("update 操作员 set 可以做业务=#{bool} where 操作员<>'系统管理员'")
    public void closeAccount(int bool);
}
