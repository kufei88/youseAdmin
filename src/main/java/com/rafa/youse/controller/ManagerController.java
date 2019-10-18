package com.rafa.youse.controller;

import com.alibaba.fastjson.JSONObject;
import com.rafa.youse.entity.Argu;
import com.rafa.youse.entity.System;
import com.rafa.youse.entity.returnMap;
import com.rafa.youse.services.ManagerService;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.autoconfigure.EnableAutoConfiguration;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import javax.servlet.http.HttpServletRequest;
import java.io.UnsupportedEncodingException;
import java.net.URLDecoder;
import java.util.List;
import java.util.Map;

@RestController
@EnableAutoConfiguration
@RequestMapping("/manager")
public class ManagerController {
    private static final Logger log = LoggerFactory.getLogger(ManagerController.class);
    @Autowired
    private ManagerService ms;

    @RequestMapping(value="/getManagerFactorList",method = RequestMethod.GET)
    public List<Map<String,Object>> getManagerFactorList(HttpServletRequest request){
        String period = request.getParameter("period");
         return ms.getManagerFactorList(period);
    }

    @RequestMapping(value="/saveFactorList",method = RequestMethod.GET)
    public returnMap saveFactorList(HttpServletRequest request){
        String factorList = "";
        String period = request.getParameter("period");
        try {
            factorList = URLDecoder.decode(request.getParameter("factorList"),"utf-8");
        } catch (UnsupportedEncodingException e) {
            e.printStackTrace();
        }

        return ms.saveFactorList(factorList,period);
    }

    @RequestMapping(value="/getPerformanceFactorList",method = RequestMethod.GET)
    public List<Map<String,Object>> getPerformanceFactorList(HttpServletRequest request){
        int type = Integer.parseInt(request.getParameter("type"));
        String period = request.getParameter("period");
        return ms.getPerformanceFactorList(type,period);
    }
    @RequestMapping(value="/addPerformanceFactor",method = RequestMethod.POST)
    public returnMap addPerformanceFactor(HttpServletRequest request){
        log.info("-------------------------------");
        String type = request.getParameter("type");
        String performance = request.getParameter("performance");
        String factor = request.getParameter("factor");
        String factor_1 = request.getParameter("factor_1");
        String oldId = request.getParameter("oldId");
        String oldPerfor = request.getParameter("oldPerfor");
        String period = request.getParameter("period");
        int resultCode = ms.addPerformanceFactor(performance,factor,type,oldId,oldPerfor,period,factor_1);
        returnMap rm = new returnMap();
        rm.setReturnCode(resultCode);
        return rm;
    }

    @RequestMapping(value="/delPerformanceFactor",method = RequestMethod.GET)
    public returnMap delPerformanceFactor(HttpServletRequest request){
        String oldId = request.getParameter("oldId");
        int resultCode = ms.delPerformanceFactor(Integer.parseInt(oldId));
        returnMap rm = new returnMap();
        rm.setReturnCode(resultCode);
        return rm;
    }
    @RequestMapping(value="/getFactorList",method = RequestMethod.GET)
    public List<Map<String,Object>> getFactorList(HttpServletRequest request){
        String month = request.getParameter("month");
        return ms.getFactorList(month);
    }

    @RequestMapping(value="/getLastThreeMonthPer",method = RequestMethod.GET)
    public List<Map<String,Object>> getLastThreeMonthPer(HttpServletRequest request){
        String handler = request.getParameter("handler");
        return ms.getLastThreeMonthPer(handler);
    }

    @RequestMapping(value="/getRobPool",method = RequestMethod.GET)
    public List<Map<String,Object>> getRobPool(HttpServletRequest request){
        String handler =  request.getParameter("handler");
        return ms.getRobPool(handler);
    }

    @RequestMapping(value="/insert_rob",method = RequestMethod.POST)
    public int insert_rob(HttpServletRequest request){
        String client = request.getParameter("client");
        String robmoney = request.getParameter("robmoney");
        String operator = request.getParameter("operator");
        String resur_money = request.getParameter("resur_money");
        String factor = request.getParameter("factor");
        String handler = request.getParameter("handler");
        String period = request.getParameter("period");
        return ms.insert_rob(client,robmoney,operator,resur_money,factor,handler,period);

    }

    @RequestMapping(value="/insert_tclient",method = RequestMethod.POST)
    public int insert_tclient(HttpServletRequest request){
        String client = request.getParameter("client");
        String handler = request.getParameter("handler");
        return ms.insert_tclient(client,handler);
    }

    @RequestMapping(value="/get_rob_list",method = RequestMethod.GET)
    public List<Map<String,Object>> get_rob_list(){
        return ms.get_rob_list();
    }

    @RequestMapping(value="/get_rob_result",method = RequestMethod.GET)
    public List<Map<String,Object>> get_rob_result(){
        return ms.get_rob_result();
    }

    @RequestMapping(value="/getHandlerList",method = RequestMethod.GET)
    public List<Map<String,Object>> getHandlerList(HttpServletRequest request){
        return ms.getHandlerList();
    }

    @RequestMapping(value="/getMemValueByName",method = RequestMethod.GET)
    public System getMemValueByName(HttpServletRequest request){
        String memName = request.getParameter("memName");
        log.info(memName);
        return ms.getMemValueByName(memName);
    }

    @RequestMapping(value="/saveMemValue",method = RequestMethod.POST)
    public int saveMemValue(HttpServletRequest request){
        String memName = request.getParameter("memName");
        String memValue = request.getParameter("memValue");

        return  ms.saveMemValue(memName,memValue);
    }

    @RequestMapping(value="/getCopyPeroidList",method = RequestMethod.GET)
    public List<Map<String,Object>> getCopyPeroidList(HttpServletRequest request){
        return ms.getCopyPeroidList();
    }

    @RequestMapping(value="/saveCopyFactor",method = RequestMethod.POST)
    public int saveCopyFactor(HttpServletRequest request){
        String period = request.getParameter("period");
        String sourcePeriod = request.getParameter("sourcePeriod");
        return  ms.saveCopyFactor(period,sourcePeriod);
    }

    @RequestMapping(value="/getArguByPeriod",method = RequestMethod.GET)
    Argu getArguByPeriod(HttpServletRequest request){
        String period = request.getParameter("period");
        return ms.getArguByPeriod(period);
    }
    @RequestMapping(value="/saveArgu",method = RequestMethod.POST)
    public int saveArgu(HttpServletRequest request){
        String json = request.getParameter("json");
        Argu argu = JSONObject.parseObject(json,Argu.class);
        return ms.saveArgu(argu);
    }

    @RequestMapping(value="/getDeptByHandler",method = RequestMethod.GET)
    public String getDeptByHandler(HttpServletRequest request){
        String handler = request.getParameter("handler");
        return ms.getDeptByHandler(handler);
    }
}
