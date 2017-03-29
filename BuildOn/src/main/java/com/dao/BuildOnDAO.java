package com.dao;

import java.util.ArrayList;
import java.util.Date;
import java.util.List;

import com.domain.Reports;
import com.domain.SearchResults;

public interface BuildOnDAO {
	
	public boolean getAuth(String username, String password);
	
	public List<Reports> getresults(Date startdate,Date enddate,String project,String branch);

}
