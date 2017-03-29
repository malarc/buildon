package com.services;

import java.util.ArrayList;
import java.util.Date;
import java.util.List;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;

import com.dao.BuildOnDAO;
import com.dao.BuildOnDAOImpl;
import com.domain.Reports;
import com.domain.SearchResults;

public class BuildOnServiceImpl implements BuildOnService {

	private static final Logger logger=LoggerFactory.getLogger(BuildOnServiceImpl.class);	
	private BuildOnDAO buildOnDao=new BuildOnDAOImpl();
	
	@Override
	public boolean getAuth(String username, String password) {
		return buildOnDao.getAuth(username, password);	
	}
	
	@Override
	public List<Reports> getresults(Date startdate, Date enddate, String project, String branch) {
		return buildOnDao.getresults(startdate,enddate,project,branch);	
	}



}
