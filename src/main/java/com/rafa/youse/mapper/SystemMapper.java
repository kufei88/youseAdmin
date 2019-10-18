package com.rafa.youse.mapper;

import com.rafa.youse.entity.System;
import org.apache.ibatis.annotations.Insert;
import org.apache.ibatis.annotations.Select;
import org.apache.ibatis.annotations.Update;

public interface SystemMapper {
    @Select("select isnull(值,'') as memValue,变量名 as memName from 内存变量 where 变量名=#{memName}")
    public System getSystemSettingByName(String memName);

    @Update("update 内存变量 set 值=#{memValue} where 变量名=#{memName}")
    public int setSystemSetting(System system);

    @Insert("insert into 内存变量 (变量名,值) values (#{memName},#{memValue})")
    public int insertSystemSetting(System system);
}
