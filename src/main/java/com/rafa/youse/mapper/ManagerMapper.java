package com.rafa.youse.mapper;

import org.apache.ibatis.annotations.Delete;
import org.apache.ibatis.annotations.Insert;
import org.apache.ibatis.annotations.Select;
import org.apache.ibatis.annotations.Update;

import java.util.List;
import java.util.Map;

public interface ManagerMapper {
    @Select("select a.员工编码 as managerCode,a.姓名 as name,isnull(b.factor,0) as factor,isnull(b.target,0) as target from" +
            " 员工信息 a left join managerFactor b on a.员工编码=b.managerCode order by 部门")
    List<Map<String,Object>> getManagerFactorList();

    @Delete("delete managerFactor")
    int delMaragerFactor();

    @Insert("insert into managerFactor (managerCode,factor,target) values (#{managerCode},#{factor},#{target})")
    int addMaragerFactor(Map<String,Object> paramMap);

    @Select("select * from performancefactor where type=#{type}")
    List<Map<String,Object>> getPerformanceFactorList(int type);

    @Insert("insert into performancefactor (type,performance,factor) values (#{type},#{performance},#{factor})")
    int addPerformanceFactor(Map<String,Object> paramMap);

    @Update("update performancefactor set performance=#{performance},factor=#{factor} where id=#{oldId}")
    int updatePerformanceFactor(Map<String,Object> paramMap);

    @Select("select top 1 factor from performancefactor where type=#{type} and performance=#{performance}")
    String checkPerformanceFactor(Map<String,Object> paramMap);

    @Delete("delete performancefactor where id=#{oldId}")
    int delPerformanceFactor(int id);

    @Select("exec get_employee_factor #{beginDate},#{endDate}")
    List<Map<String,Object>> getFactorList(Map<String,Object> paramMap);
}
