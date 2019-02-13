package com.rafa.youse.services;

import com.alibaba.fastjson.JSONArray;
import com.alibaba.fastjson.JSONObject;
import com.rafa.youse.entity.returnMap;
import com.rafa.youse.mapper.ManagerMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

@Service
public class ManagerService {
    @Autowired
    private ManagerMapper mm;
    public List<Map<String,Object>> getManagerFactorList(){
        return mm.getManagerFactorList();
    }

    public returnMap saveFactorList(String factorListJson){
        returnMap rm = new returnMap();

        JSONArray ja = JSONArray.parseArray(factorListJson);
        mm.delMaragerFactor();
        for(int i=0;i<ja.size();i++){
            JSONObject jo = JSONObject.parseObject(ja.get(i).toString());
            mm.addMaragerFactor(jo);
        }
        rm.setReturnCode(100);
        return rm;
    }

    public List<Map<String,Object>> getPerformanceFactorList(int type){
        return mm.getPerformanceFactorList(type);
    }

    public int addPerformanceFactor(String performance,String factor,String type,String oldId,String oldPerfor){
        Map<String,Object> paramMap = new HashMap<>();
        paramMap.put("performance",performance);
        paramMap.put("factor",factor);
        paramMap.put("type",type);
        paramMap.put("oldId",oldId);

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

    public List<Map<String,Object>> getFactorList(String beginDate,String endDate){
        Map<String,Object> paramMap = new HashMap<String,Object>();
        paramMap.put("beginDate",beginDate);
        paramMap.put("endDate",endDate);
        return mm.getFactorList(paramMap);
    }
}
