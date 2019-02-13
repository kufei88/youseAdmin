package com.rafa.youse.controller;

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
        return ms.getManagerFactorList();
    }

    @RequestMapping(value="/saveFactorList",method = RequestMethod.GET)
    public returnMap saveFactorList(HttpServletRequest request){
        String factorList = "";
        try {
            factorList = URLDecoder.decode(request.getParameter("factorList"),"utf-8");
        } catch (UnsupportedEncodingException e) {
            e.printStackTrace();
        }

        return ms.saveFactorList(factorList);
    }

    @RequestMapping(value="/getPerformanceFactorList",method = RequestMethod.GET)
    public List<Map<String,Object>> getPerformanceFactorList(HttpServletRequest request){
        int type = Integer.parseInt(request.getParameter("type"));
        return ms.getPerformanceFactorList(type);
    }
    @RequestMapping(value="/addPerformanceFactor",method = RequestMethod.POST)
    public returnMap addPerformanceFactor(HttpServletRequest request){
        log.info("-------------------------------");
        String type = request.getParameter("type");
        String performance = request.getParameter("performance");
        String factor = request.getParameter("factor");
        String oldId = request.getParameter("oldId");
        String oldPerfor = request.getParameter("oldPerfor");
        int resultCode = ms.addPerformanceFactor(performance,factor,type,oldId,oldPerfor);
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
        String beginDate = request.getParameter("beginDate");
        String endDate = request.getParameter("endDate");
        return ms.getFactorList(beginDate,endDate);
    }
}
