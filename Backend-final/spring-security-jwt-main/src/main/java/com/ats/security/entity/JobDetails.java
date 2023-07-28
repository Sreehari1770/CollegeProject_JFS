package com.ats.security.entity;


import jakarta.persistence.CascadeType;
import jakarta.persistence.Entity;
import jakarta.persistence.FetchType;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.Id;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.ManyToOne;
import jakarta.persistence.Table;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@Builder
@NoArgsConstructor
@AllArgsConstructor
@Entity
@Table(name="jobdetails")
public class JobDetails {
  @Id
  @GeneratedValue
  private int id;
  private String role;
  private String company;
  private String location;
  private String address;
  private int exp;
  private int salary;
  private String des;
  private String responsibilities;
  private String requirements;
  private boolean isClosed;
  private boolean isSaved;
  private boolean isApplied;
  
  @ManyToOne(fetch = FetchType.LAZY, cascade=CascadeType.ALL)
  @JoinColumn(name = "user_id", nullable = false)
  private User user;
}
