package com.rafa.youse.mapper;

import com.rafa.youse.entity.GroupDeduct;
import com.rafa.youse.entity.GroupStand;
import com.rafa.youse.entity.HandlerGroup;
import org.apache.ibatis.annotations.Delete;
import org.apache.ibatis.annotations.Insert;
import org.apache.ibatis.annotations.Select;
import org.apache.ibatis.annotations.Update;

import java.util.List;
import java.util.Map;

public interface DefaultMapper {
    @Select("select * from groupdeduct where period=#{period}")
    List<GroupDeduct> getGroupDeduct(String period);

    @Insert("insert into groupdeduct (groupname,sale,deduct,period) values (#{groupname},#{sale},#{deduct},#{period})")
    int addGroupDeduct(GroupDeduct gd);

    @Update("update groupdeduct set groupname=#{groupname},sale=#{sale},deduct=#{deduct} where id=#{id}")
    int updateGroupDeduct(GroupDeduct gd);

    @Delete("delete groupdeduct where id=#{id}")
    int delGroupDeduct(String id);

    @Select("select 部门  from 部门类别")
    List<String> getGroupList();

    @Select("select * from groupstand where period=#{period}")
    List<GroupStand> getGroupStand(String period);

    @Insert("insert into groupstand (groupname,standard,period) values (#{groupname},#{standard},#{period})")
    int addGroupStand(GroupStand gs);

    @Update("update groupstand set groupname=#{groupname},standard=#{standard} where id=#{id}")
    int updateGroupStand(GroupStand gs);

    @Delete("delete groupstand where id=#{id}")
    int delGroupStand(String id);

    @Select("select * from HandlerGroup where period=#{period}")
    List<HandlerGroup> getHandlerGroup(String period);

    @Insert("insert into HandlerGroup (handler,groupname,period) values (#{handler},#{groupname},#{period})")
    int addHandlerGroup(HandlerGroup hg);

    @Update("update HandlerGroup set handler=#{handler},groupname=#{groupname} where id=#{id}")
    int updateHandlerGroup(HandlerGroup hg);

    @Delete("delete HandlerGroup where id=#{id}")
    int delHandlerGroup(String id);

    @Select("select 姓名 as name from 员工信息 where isnull(离职否,0)=0")
    List<Map<String,Object>> getHandlerList();
}
