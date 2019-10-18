package com.rafa.youse.mapper;

import com.rafa.youse.entity.Argu;
import org.apache.ibatis.annotations.*;

import java.util.List;
import java.util.Map;

public interface ManagerMapper {
    @Select("select a.员工编码 as managerCode,a.姓名 as name,isnull(b.factor,0) as factor,isnull(b.target,0) as target,isnull(leader,0) as leader from" +
            " 员工信息 a left join (select * from managerFactor where period=#{period})  b on a.员工编码=b.managerCode where a.部门=#{dept} and 离职否=0")
    List<Map<String,Object>> getManagerFactorList(@Param("dept") String dept,@Param("period")  String period);

    @Select("select a.员工编码 as managerCode,a.姓名 as name,isnull(b.factor,0) as factor,isnull(b.target,0) as target,isnull(leader,0) as leader from" +
            " 员工信息 a left join (select * from managerFactor where period=#{period}) b on a.员工编码=b.managerCode where a.职务=#{manager} ")
    List<Map<String,Object>> getManagerList(@Param("manager") String manager,@Param("period")  String period);

    @Select("select 姓名 as name from 员工信息 where 部门 in (select 部门 as dept from 部门类别 where " +
            "left(部门编码,6)=(select 部门编码 from 部门类别 where 部门='销售部') and 部门<>'销售部')")
    List<Map<String,Object>> getHandlerList();

    @Select("select 部门 as dept from 部门类别 where left(部门编码,6)=(select 部门编码 from 部门类别 where 部门='销售部') and 部门<>'销售部'")
    List<Map<String,Object>> getDeptList();

    @Delete("delete managerFactor where period=#{period}")
    int delMaragerFactor(String period);

    @Insert("insert into managerFactor (managerCode,factor,target,leader,period) values (#{managerCode},#{factor},#{target},#{leader},#{period})")
    int addMaragerFactor(Map<String,Object> paramMap);

    @Select("select * from performancefactor where type=#{type} and period=#{period} order by performance")
    List<Map<String,Object>> getPerformanceFactorList(@Param("type") int type,@Param("period") String period);

    @Insert("insert into performancefactor (type,performance,factor,period,factor_1) values (#{type},#{performance},#{factor},#{period},#{factor_1})")
    int addPerformanceFactor(Map<String,Object> paramMap);

    @Update("update performancefactor set performance=#{performance},factor=#{factor},factor_1=#{factor_1} where id=#{oldId}")
    int updatePerformanceFactor(Map<String,Object> paramMap);

    @Select("select top 1 factor from performancefactor where type=#{type} and performance=#{performance} and period=#{period}")
    String checkPerformanceFactor(Map<String,Object> paramMap);

    @Delete("delete performancefactor where id=#{oldId}")
    int delPerformanceFactor(int id);

    @Delete("delete performancefactor where period=#{period}")
    int delPerformanceFactorByPeriod(String period);



    @Select("exec get_employee_factor3 #{month},#{end}")
    List<Map<String,Object>> getFactorList(Map<String,Object> paramMap);

    @Select("select convert(char(7),getdate(),120)")
    String getPeriod();

    @Select("exec get_last_three_month_per #{handler},0,0")
    List<Map<String,Object>> getLastThreeMonthPer(String handler);

    @Select("exec get_rob_pool #{handler}")
    List<Map<String,Object>> getRobPool(String handler);

    @Insert("insert into rob_tender (client,period,robmoney,state," +
            "operator,rob_time,resur_money,factor,handler) values (#{client},#{period},#{robmoney},0,#{operator},getdate(),#{resur_money},#{factor},#{handler})")
    int insert_rob(Map<String,Object> paramMap);
    @Insert("insert into tclient values (#{client},getdate(),#{handler})")
    int insert_tclient(@Param("client") String client,@Param("handler") String handler);

    @Select("select count(*) from rob_tender where client=#{client} and period=convert(char(7),getdate(),120)")
    int get_client_tender_list(String client);

    @Select("select * from rob_tender where period=(select convert(char(7),dateadd(month,-1,convert(datetime,MIN(起始日期))),120) from 会计期间 where 已核算=0) order by client")
    List<Map<String,Object>> get_rob_list();

    @Select("select distinct period from  managerFactor")
    List<Map<String,Object>> getCopyPeroidList();

    @Insert("insert into managerFactor select managerCode,factor,target,leader,#{period} from managerFactor where period=#{sourcePeriod}")
    int copyManagerFactor(@Param("period") String period,@Param("sourcePeriod") String sourcePeriod);

    @Insert("insert into performancefactor select type,performance,factor,#{period},factor_1 from performancefactor where period=#{sourcePeriod}")
    int copyPerformanceFactor(@Param("period") String period,@Param("sourcePeriod") String sourcePeriod);

    @Insert("insert into argu select #{period},firstGroup,secondGroup,leader,groupBase,minComplete,deduct,salary from argu where period=#{sourcePeriod}")
    int copyArgu(@Param("period") String period,@Param("sourcePeriod") String sourcePeriod);

    @Select("select top 1 period,firstGroup,secondGroup,leader,groupBase,minComplete,deduct,salary from argu where period=#{period}")
    Argu getArguByPeriod(String period);

    @Insert("insert into argu (period,firstGroup,secondGroup,leader,groupBase,minComplete,deduct,salary) values " +
            "(#{period},#{firstGroup},#{secondGroup},#{leader},#{groupBase},#{minComplete},#{deduct},#{salary})")
    int insertArgu(Argu argu);

    @Delete("delete from argu where period=#{period}")
    int delArguByPeriod(String period);

    @Select("select top 1 部门 as dept from 员工信息 where 姓名=#{handler}")
    String getDeptByHandler(String handler);

    @Update("update rob_tender set state= 1 where id in " +
            "(select MIN(id) from rob_tender where client+convert(char(20),robmoney) in " +
            "(select client+convert(char(20),MAX(robmoney)) from rob_tender where period=(select convert(char(7),dateadd(month,-1,convert(datetime,MIN(起始日期))),120) from 会计期间 where 已核算=0)  group by client)" +
            "group by client )")
    int updateTender();

    @Update("update 往来单位 set 经手人=b.operator from 往来单位 a right join rob_tender b on a.往来单位=b.client " +
            "where b.period=(select convert(char(7),dateadd(month,-1,convert(datetime,MIN(起始日期))),120) from 会计期间 where 已核算=0) and b.state=1")
    int update_client_handler();

}
