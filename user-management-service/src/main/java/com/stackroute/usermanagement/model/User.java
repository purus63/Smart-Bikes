package com.stackroute.usermanagement.model;

import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;
import org.springframework.web.multipart.MultipartFile;

import java.lang.String;
import java.math.BigInteger;
import java.util.Arrays;
import java.util.Date;

@Document(collection = "user")
public class User {

    @Id
    private String username;
    private long aadharNo;
    private BigInteger number;
    private String firstname;
    private String lastname;
    private String email;
    private String gender;
    private String file1;
    private String image;
    private MultipartFile file;
    //@DateTimeFormat(pattern="dd.MM.yyyy")
    private Date dob;
    private Date submittedOn;
    private Date updatedAt;
    private byte[] logo;
    private byte[] logos;
    private String image1;
    private String extension;
    public BigInteger getNumber() {
        return number;
    }

    public void setNumber(BigInteger number) {
        this.number = number;
    }

    public String getExtension() {
        return extension;
    }

    public void setExtension(String extension) {
        this.extension = extension;
    }

    public Date getDob() {
        return dob;
    }

    public void setDob(Date dob) {
        this.dob = dob;
    }
    public String getFile1() {
        return file1;
    }

    public void setFile1(String file1) {
        this.file1 = file1;
    }

    public MultipartFile getFile() {
        return file;
    }

    public void setFile(MultipartFile file) {
        this.file = file;
    }
    public String getImage1() {
        return image1;
    }
    public String getImage() {
        return image;
    }

    public void setImage(String image) {
        this.image = image;
    }

    public byte[] getLogos() {
        return logos;
    }

    public void setLogos(byte[] logos) {
        this.logos = logos;
    }

    private String fileDl;

    public String getFileDlb() {
        return fileDlb;
    }

    public void setFileDlb(String fileDlb) {
        this.fileDlb = fileDlb;
    }

    private String fileDlb;
    private String isBlocked;

    public String getIsBlocked() {
        return this.isBlocked;
    }

    public void setIsBlocked(String isBlocked) {
        this.isBlocked = isBlocked;
    }

    @Override
    public String toString() {
        return "User{" +
                "number=" + number +
                ", username=" + username +
                ", aadharNo=" + aadharNo +
                ", firstname='" + firstname + '\'' +
                ", lastname='" + lastname + '\'' +
                ", email='" + email + '\'' +
                ", gender='" + gender + '\'' +
                ", submittedOn=" + submittedOn +
                ", updatedAt=" + updatedAt +
                ", logo=" + Arrays.toString(logo) +
                ", fileDl='" + fileDl + '\'' +
                ", isBlocked=" + isBlocked +
                ", date =" + dob +
                '}';
    }


    public User() {
    }


    public User(String username, String isBlocked, long aadharNo, String firstname, String lastname, String email, String gender, Date submittedOn, Date updatedAt, byte[] logo, String fileDl) {
        this.username = username;
        this.aadharNo = aadharNo;
        this.firstname = firstname;
        this.lastname = lastname;
        this.email = email;
        this.gender = gender;
        this.submittedOn = submittedOn;
        this.updatedAt = updatedAt;
        this.logo = logo;
        this.fileDl = fileDl;
        this.isBlocked = isBlocked;
    }

    public String getusername() {
        return username;
    }

    public void setusername(String username) {
        this.username = username;
    }

    public long getAadharNo() {
        return aadharNo;
    }

    public void setAadharNo(long aadharNo) {
        this.aadharNo = aadharNo;
    }

    public String getFirstname() {
        return firstname;
    }

    public void setFirstname(String firstname) {
        this.firstname = firstname;
    }

    public String getLastname() {
        return lastname;
    }

    public void setLastname(String lastname) {
        this.lastname = lastname;
    }

    public String getEmail() {
        return email;
    }

    public void setEmail(String email) {
        this.email = email;
    }

    public String getGender() {
        return gender;
    }

    public void setGender(String gender) {
        this.gender = gender;
    }

    public Date getSubmittedOn() {
        return submittedOn;
    }

    public void setSubmittedOn(Date submittedOn) {
        this.submittedOn = submittedOn;
    }

    public Date getUpdatedAt() {
        return updatedAt;
    }

    public void setUpdatedAt(Date updatedAt) {
        this.updatedAt = updatedAt;
    }

    public byte[] getLogo() {
        return logo;
    }

    public void setLogo(byte[] logo) {
        this.logo = logo;
    }

    public String getFileDl() {
        return fileDl;
    }

    public void setFileDl(String fileDl) {
        this.fileDl = fileDl;
    }

    public void setImage1(String s1) { this.image1 = s1;
    }
}
