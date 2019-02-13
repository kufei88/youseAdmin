package com.rafa.youse.mapper;

import org.apache.ibatis.annotations.Select;

import java.util.Map;

public interface UserMapper {
    @Select("select * from 操作员 where 操作员=#{operator}")
    Map<String,Object> getUserByOperator(String operator);
}
