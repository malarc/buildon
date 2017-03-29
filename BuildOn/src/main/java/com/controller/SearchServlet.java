package com.controller;

import java.io.IOException;
import java.io.PrintWriter;
import java.text.ParseException;
import java.text.SimpleDateFormat;
import java.util.ArrayList;
import java.util.Date;
import java.util.List;
import java.util.Locale;

import javax.json.JsonArray;
import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import javax.servlet.http.HttpSession;

import org.hibernate.dialect.identity.SybaseAnywhereIdentityColumnSupport;

import com.domain.Reports;
import com.domain.SearchResults;
import com.google.gson.Gson;
import com.services.BuildOnService;
import com.services.BuildOnServiceImpl;

/**
 * Servlet implementation class SearchServlet
 */
@WebServlet("/SearchServlet")
public class SearchServlet extends HttpServlet {
	private static final long serialVersionUID = 1L;
	private BuildOnService service=new BuildOnServiceImpl();    
    /**
     * @see HttpServlet#HttpServlet()
     */
    public SearchServlet() {
        super();
        // TODO Auto-generated constructor stub
    }

	/**
	 * @see HttpServlet#doGet(HttpServletRequest request, HttpServletResponse response)
	 */
	protected void doGet(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
		// TODO Auto-generated method stub
		response.getWriter().append("Served at: ").append(request.getContextPath());
	}

	/**
	 * @see HttpServlet#doPost(HttpServletRequest request, HttpServletResponse response)
	 */
	protected void doPost(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
		// TODO Auto-generated method stub
		//doGet(request, response);
		List<Reports> list=new ArrayList<Reports>();
		SimpleDateFormat in = new SimpleDateFormat("yyyy-MM-dd",Locale.ENGLISH);
				
		String startdate=request.getParameter("startdate");
		String enddate=request.getParameter("enddate");
		String project=request.getParameter("project");
		String branch=request.getParameter("branch");
		Date sdate=new Date();
		Date edate=new Date();
		try {
			sdate = in.parse(startdate);
			edate = in.parse(enddate);
		} catch (ParseException e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		}
		list=service.getresults(sdate,edate,project,branch);
		String json = new Gson().toJson(list);
		response.getWriter().write(json);
		
		
	}

}
