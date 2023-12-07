package com.example.miniassignment.Entity;

// Page info class so that we can have page info with every user data in json reuslt
public class PageInfo {
    private boolean hasNextPage;
    private boolean hasPrevPage;
    private int total;

    public PageInfo(){
        
    }
    public PageInfo(boolean hasNextPage, boolean hasPrevPage, int total) {
        this.hasNextPage = hasNextPage;
        this.hasPrevPage = hasPrevPage;
        this.total = total;
    }

    public boolean isHasNextPage() {
        return hasNextPage;
    }

    public void setHasNextPage(boolean hasNextPage) {
        this.hasNextPage = hasNextPage;
    }

    public boolean isHasPrevPage() {
        return hasPrevPage;
    }

    public void setHasPrevPage(boolean hasPrevPage) {
        this.hasPrevPage = hasPrevPage;
    }

    public int getTotal() {
        return total;
    }

    public void setTotal(int total) {
        this.total = total;
    }

    
}
