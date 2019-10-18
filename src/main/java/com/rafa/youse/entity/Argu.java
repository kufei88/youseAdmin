package com.rafa.youse.entity;

public class Argu {
    private String period;
    private float firstGroup;
    private float secondGroup;
    private float leader;
    private float groupBase;
    private float salary;

    public float getSalary() {
        return salary;
    }

    public void setSalary(float salary) {
        this.salary = salary;
    }

    public float getFirstGroup() {
        return firstGroup;
    }

    public void setFirstGroup(float firstGroup) {
        this.firstGroup = firstGroup;
    }

    public float getSecondGroup() {
        return secondGroup;
    }

    public void setSecondGroup(float secondGroup) {
        this.secondGroup = secondGroup;
    }

    private float minComplete;
    private float deduct;

    public String getPeriod() {
        return period;
    }

    public void setPeriod(String period) {
        this.period = period;
    }



    public float getLeader() {
        return leader;
    }

    public void setLeader(float leader) {
        this.leader = leader;
    }

    public float getGroupBase() {
        return groupBase;
    }

    public void setGroupBase(float groupBase) {
        this.groupBase = groupBase;
    }

    public float getMinComplete() {
        return minComplete;
    }

    public void setMinComplete(float minComplete) {
        this.minComplete = minComplete;
    }

    public float getDeduct() {
        return deduct;
    }

    public void setDeduct(float deduct) {
        this.deduct = deduct;
    }
}
