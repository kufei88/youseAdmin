package com.rafa.youse.test;

import com.rafa.youse.entity.System;

import java.io.FileOutputStream;
import java.io.IOException;
import java.io.ObjectOutputStream;

public class ioCase {
    public static void main(String[] args) {
        System s = new System("123","xxx");
        ObjectOutputStream oos;
        try {
            oos = new ObjectOutputStream(new FileOutputStream("c:/1.txt"));
            oos.writeObject(s);
            oos.flush();
        } catch (IOException e) {
            e.printStackTrace();
        }
    }
}
