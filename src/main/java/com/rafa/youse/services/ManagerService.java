package com.rafa.youse.services;

import com.alibaba.fastjson.JSONArray;
import com.alibaba.fastjson.JSONObject;
import com.rafa.youse.entity.Argu;
import com.rafa.youse.entity.returnMap;
import com.rafa.youse.mapper.ManagerMapper;
import com.rafa.youse.mapper.SystemMapper;
import com.rafa.youse.mapper.UserMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import com.rafa.youse.entity.System;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

@Service
public class ManagerService {
    @Autowired
    private ManagerMapper mm;
    @Autowired
    private SystemMapper sm;

    @Autowired
    private UserMapper um;

    public List<Map<String,Object>> getManagerFactorList(String period){
        List<Map<String,Object>> deptList = mm.getDeptList();
        for (Map<String,Object> dept:deptList){
            dept.put("list",mm.getManagerFactorList(dept.get("dept").toString(),period));
        }
        Map<String,Object> managerList = new HashMap<String,Object>();
        managerList.put("dept","销售经理");
        managerList.put("list",mm.getManagerList("销售经理",period));
        deptList.add(managerList);
        Map<String,Object> auterList = new HashMap<String,Object>();
        auterList.put("dept","审核员");
        auterList.put("list",mm.getManagerList("统计员",period));
        deptList.add(auterList);
        return deptList;
    }

    public returnMap saveFactorList(String factorListJson,String period){
        returnMap rm = new returnMap();

        JSONArray ja = JSONArray.parseArray(factorListJson);
        mm.delMaragerFactor(period);
        for(int i=0;i<ja.size();i++){

            JSONObject jo = JSONObject.parseObject(ja.get(i).toString());
            JSONArray ja1 = JSONArray.parseArray(jo.get("list").toString());
            for(int j=0;j<ja1.size();j++){
                JSONObject jo1 = JSONObject.parseObject(ja1.get(j).toString());
                jo1.put("period",period);
                mm.addMaragerFactor(jo1);
            }

        }
        rm.setReturnCode(100);
        return rm;
    }

    public List<Map<String,Object>> getPerformanceFactorList(int type,String period){
        return mm.getPerformanceFactorList(type,period);
    }

    public int addPerformanceFactor(String performance,String factor,String type,String oldId,String oldPerfor,String period,String factor_1){
        Map<String,Object> paramMap = new HashMap<>();
        paramMap.put("performance",performance);
        paramMap.put("factor",factor);
        paramMap.put("type",type);
        paramMap.put("oldId",oldId);
        paramMap.put("period",period);
        paramMap.put("factor_1",factor_1);
        if(oldId.equals("0")){
            String check = mm.checkPerformanceFactor(paramMap);
            if(check != null){
                return 0;
            }
            return mm.addPerformanceFactor(paramMap);
        }
        else{
            if(!oldPerfor.equals(performance)&&mm.checkPerformanceFactor(paramMap)!=null){
                return 0;
            }
            return  mm.updatePerformanceFactor(paramMap);
        }

    }

    public int delPerformanceFactor(int id){
        return mm.delPerformanceFactor(id);
    }

    public List<Map<String,Object>> getFactorList(String Month){
        Map<String,Object> paramMap = new HashMap<String,Object>();
        paramMap.put("month",Month);
        paramMap.put("end",false);
        return mm.getFactorList(paramMap);
    }

    public List<Map<String,Object>> getLastThreeMonthPer(String handler){
        return mm.getLastThreeMonthPer(handler);
    }

    public List<Map<String,Object>> getRobPool(String handler){
        return mm.getRobPool(handler);
    }

    public List<Map<String,Object>> get_rob_list(){
        return mm.get_rob_list();
    }

    public List<Map<String,Object>> get_rob_result(){
        System system = sm.getSystemSettingByName("closeAccount");
        if(!system.getMemValue().equals("true")){
            return mm.get_rob_list();
        }
        else return null;

    }

    public int insert_rob(String client,String robmoney,String operator,String resur_money,
                          String factor,String handler,String period){
        Map<String,Object> paramMap = new HashMap<String,Object>();
        paramMap.put("client",client);
        paramMap.put("robmoney",robmoney);
        paramMap.put("operator",operator);
        paramMap.put("resur_money",resur_money);
        paramMap.put("factor",factor);
        paramMap.put("handler",handler);
        paramMap.put("period",period);
        return mm.insert_rob(paramMap);
    }

    public int insert_tclient(String client,String handler){
        return mm.insert_tclient(client,handler);
    }

    public int get_client_tender_list(String client){
        return mm.get_client_tender_list(client);
    }

    public int update_render(){
        mm.updateTender();
        return mm.update_client_handler();
    }

    public List<Map<String,Object>> getHandlerList(){
        return mm.getHandlerList();
    }

    public System getMemValueByName(String memName){
        System system = sm.getSystemSettingByName(memName);
        if(system == null){
            return new System(memName,"");
        }
        else{
            return system;
        }
    }

    public int saveMemValue(String memName,String memValue){
        System newSystem = new System(memName,memValue);
        um.closeAccount(memValue.equals("true")?0:1);
        if(memValue.equals("true")){
            HashMap<String,Object> paramMap = new HashMap<String,Object>();
            paramMap.put("month",mm.getPeriod());
            paramMap.put("end",true);
            mm.getFactorList(paramMap);
        }else{
            update_render();
        }
        System system = sm.getSystemSettingByName(memName);
        if (system == null){
            return sm.insertSystemSetting(newSystem);
        }
        else{
            return sm.setSystemSetting(newSystem);
        }
    }

    public List<Map<String,Object>> getCopyPeroidList(){
        return mm.getCopyPeroidList();
    }

    public int saveCopyFactor(String period,String sourcePeriod){
        mm.delMaragerFactor(period);
        mm.delPerformanceFactorByPeriod(period);
        mm.delArguByPeriod(period);
        mm.copyArgu(period,sourcePeriod);
        mm.copyManagerFactor(period,sourcePeriod);
        return mm.copyPerformanceFactor(period,sourcePeriod);
    }

    public Argu getArguByPeriod(String period){
        Argu argu = mm.getArguByPeriod(period);
        if (argu == null){
            argu = new Argu();
        }
        return argu;
    }

    public int saveArgu(Argu argu){
        mm.delArguByPeriod(argu.getPeriod());
        return mm.insertArgu(argu);
    }

    public String getDeptByHandler(String handler){
        return mm.getDeptByHandler(handler);
    }
}
