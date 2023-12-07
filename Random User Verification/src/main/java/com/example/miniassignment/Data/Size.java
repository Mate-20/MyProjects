package com.example.miniassignment.Data;

public class Size {
    private int size;

    public Size() {
    }

    public Size(int size) {
        this.size = size;
    }

    public int getSize() {
        return size;
    }

    public void setSize(int size) {
        this.size = size;
    }

    @Override
    public String toString() {
        return "Size [size=" + size + "]";
    }
    
}
