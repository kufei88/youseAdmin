package com.rafa.youse.entity;

import java.io.Serializable;

public class System implements Serializable {
    public String getMemName() {
        return memName;
    }

    public void setMemName(String memName) {
        this.memName = memName;
    }

    public String getMemValue() {
        return memValue;
    }

    public void setMemValue(String memValue) {
        this.memValue = memValue;
    }

    private String memName;

    public System(String memName, String memValue) {
        this.memName = memName;
        this.memValue = memValue;
    }

    private String memValue;
}
