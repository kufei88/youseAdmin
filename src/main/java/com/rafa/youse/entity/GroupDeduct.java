package com.rafa.youse.entity;

public class GroupDeduct {
    private int id;
    private String groupname;
    private float sale;

    public float getSale() {
        return sale;
    }

    public void setSale(float sale) {
        this.sale = sale;
    }

    public float getDeduct() {
        return deduct;
    }

    public void setDeduct(float deduct) {
        this.deduct = deduct;
    }

    private String period;

    public String getPeriod() {
        return period;
    }

    public void setPeriod(String period) {
        this.period = period;
    }

    public int getId() {
        return id;
    }

    public void setId(int id) {
        this.id = id;
    }

    public String getGroupname() {
        return groupname;
    }

    public void setGroupname(String groupname) {
        this.groupname = groupname;
    }



    private float deduct;
}
