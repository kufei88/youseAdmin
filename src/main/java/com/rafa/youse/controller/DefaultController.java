package com.rafa.youse.controller;

import com.alibaba.fastjson.JSON;
import com.rafa.youse.entity.GroupDeduct;
import com.rafa.youse.entity.GroupStand;
import com.rafa.youse.entity.HandlerGroup;
import com.rafa.youse.mapper.DefaultMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.autoconfigure.EnableAutoConfiguration;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import javax.servlet.http.HttpServletRequest;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

@RestController
@EnableAutoConfiguration
@RequestMapping("/default")
public class DefaultController {
    @Autowired
    private DefaultMapper dm;

    @RequestMapping(value="/getGroupDeductList",method = RequestMethod.GET)
    public List<GroupDeduct> getGroupDeductList(HttpServletRequest request){
        String period = request.getParameter("period");
        return dm.getGroupDeduct(period);
    }

    @RequestMapping(value="/getGroupList",method = RequestMethod.GET)
    List<String> getGroupList(){
        return dm.getGroupList();
    }
    @RequestMapping(value="/addGroupDudect",method = RequestMethod.POST)
    public Map<String,Object> addGroupDudect(HttpServletRequest request){
        Map<String,Object> result = new HashMap<>();
        String groupDudectStr = request.getParameter("groupDeduceStr");
        System.out.println(groupDudectStr);
        GroupDeduct gd = JSON.parseObject(groupDudectStr,GroupDeduct.class);
        if(gd.getId()>0){
            result.put("returnCode",dm.updateGroupDeduct(gd));
        }
        else{
            result.put("returnCode",dm.addGroupDeduct(gd));
        }

        return result;
    }

    @RequestMapping(value="/delGroupDudect",method = RequestMethod.GET)
    public Map<String,Object> delGroupDudect(HttpServletRequest request){
        Map<String,Object> result = new HashMap<>();
        String id = request.getParameter("id");
        result.put("returnCode",dm.delGroupDeduct(id));
        return result;
    }

    @RequestMapping(value="/getGroupStandList",method = RequestMethod.GET)
    public List<GroupStand> getGroupStandList(HttpServletRequest request){
        String period = request.getParameter("period");
        return dm.getGroupStand(period);
    }

    @RequestMapping(value="/addGroupStand",method = RequestMethod.POST)
    public Map<String,Object> addGroupStand(HttpServletRequest request){
        Map<String,Object> result = new HashMap<>();
        String groupDudectStr = request.getParameter("groupDeduceStr");
        System.out.println(groupDudectStr);
        GroupStand gd = JSON.parseObject(groupDudectStr,GroupStand.class);
        if(gd.getId()>0){
            result.put("returnCode",dm.updateGroupStand(gd));
        }
        else{
            result.put("returnCode",dm.addGroupStand(gd));
        }

        return result;
    }

    @RequestMapping(value="/delGroupStand",method = RequestMethod.GET)
    public Map<String,Object> delGroupStand(HttpServletRequest request){
        Map<String,Object> result = new HashMap<>();
        String id = request.getParameter("id");
        result.put("returnCode",dm.delGroupStand(id));
        return result;
    }

    @RequestMapping(value="/getHandlerGroupList",method = RequestMethod.GET)
    public List<HandlerGroup> getHandlerGroupList(HttpServletRequest request){
        String period = request.getParameter("period");
        return dm.getHandlerGroup(period);
    }

    @RequestMapping(value="/addHandlerGroup",method = RequestMethod.POST)
    public Map<String,Object> addHandlerGroup(HttpServletRequest request){
        Map<String,Object> result = new HashMap<>();
        String groupDudectStr = request.getParameter("groupDeduceStr");
        System.out.println(groupDudectStr);
        HandlerGroup gd = JSON.parseObject(groupDudectStr,HandlerGroup.class);
        if(gd.getId()>0){
            result.put("returnCode",dm.updateHandlerGroup(gd));
        }
        else{
            result.put("returnCode",dm.addHandlerGroup(gd));
        }

        return result;
    }

    @RequestMapping(value="/delHandlerGroup",method = RequestMethod.GET)
    public Map<String,Object> delHandlerGroup(HttpServletRequest request){
        Map<String,Object> result = new HashMap<>();
        String id = request.getParameter("id");
        result.put("returnCode",dm.delHandlerGroup(id));
        return result;
    }

    @RequestMapping(value="/getHandlerList",method = RequestMethod.GET)
    List<Map<String,Object>> getHandlerList(HttpServletRequest request){
        return dm.getHandlerList();
    }
}
