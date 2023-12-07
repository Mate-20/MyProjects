package com.example.miniassignment.Entity;

// This class wraps the User and Pageinfo to be returned as result
public class UserWrapper {
    private User userData;
    private PageInfo pageInfo;

    public UserWrapper(){

    }
    public UserWrapper(User userData, PageInfo pageInfo) {
        this.userData = userData;
        this.pageInfo = pageInfo;
    }
    public User getUserData() {
        return userData;
    }
    public void setUserData(User userData) {
        this.userData = userData;
    }
    public PageInfo getPageInfo() {
        return pageInfo;
    }
    public void setPageInfo(PageInfo pageInfo) {
        this.pageInfo = pageInfo;
    }

    
    
}
