package com.rafa.youse.mapper;

import org.apache.ibatis.annotations.Select;

public interface SystemMapper {
    @Select("select isnull(值,'') as memValue from 内存变量 where 变量名=#{memName}")
    public System getSystemSettingByName(String memName);
}
