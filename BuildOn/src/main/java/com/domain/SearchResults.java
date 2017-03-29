package com.domain;

import java.sql.Time;

public class SearchResults {

	private int jobId;
	private String status;
	private String project;
	private String branch;
	private String time ;
	private Time duration;
	private int commitid;
	private String commitLog;

	public int getJobId() {
		return jobId;
	}
	public void setJobId(int jobId) {
		this.jobId = jobId;
	}
	public String getStatus() {
		return status;
	}
	public void setStatus(String status) {
		this.status = status;
	}
	public String getProject() {
		return project;
	}
	public void setProject(String project) {
		this.project = project;
	}
	public String getBranch() {
		return branch;
	}
	public void setBranch(String branch) {
		this.branch = branch;
	}
	public String getTime() {
		return time;
	}
	public void setTime(String time) {
		this.time = time;
	}
	public Time getDuration() {
		return duration;
	}
	public void setDuration(Time duration) {
		this.duration = duration;
	}
	public int getCommitid() {
		return commitid;
	}
	public void setCommitid(int commitid) {
		this.commitid = commitid;
	}
	public String getCommitLog() {
		return commitLog;
	}
	public void setCommitLog(String commitLog) {
		this.commitLog = commitLog;
	}

}
