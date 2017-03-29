package com.dao;

import java.text.ParseException;
import java.text.SimpleDateFormat;
import java.util.Date;
import java.util.List;

import javax.persistence.EntityManager;
import javax.persistence.EntityManagerFactory;
import javax.persistence.Persistence;
import javax.persistence.Query;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;

import com.domain.Reports;
import com.domain.Users;

public class BuildOnDAOImpl  implements BuildOnDAO  {
	  
	 private static final String PERSISTENCE_UNIT_NAME = "persistence-unit";
	 private static EntityManagerFactory factory=Persistence.createEntityManagerFactory(PERSISTENCE_UNIT_NAME);
	 private static final Logger logger=LoggerFactory.getLogger(BuildOnDAOImpl.class);
		@Override
		public boolean getAuth(String username, String password) {
			  logger.debug("getAuth method");
			  boolean isValid=false;
			  EntityManager em = factory.createEntityManager();
			  Query query = em.createQuery("select usr from Users usr where usr.uname= :uname and usr.upass= :upass");
			  query.setParameter("uname", username);
			  query.setParameter("upass", password);
			  List<Users> userinfo = query.getResultList();
			  if(userinfo.size() >0){
				  isValid=true;
			  }
			  em.close();
			return isValid;
		}

		@Override
		public List<Reports> getresults(Date startdate, Date enddate, String project, String branch) {
			 EntityManager em = factory.createEntityManager();
			 Query query = em.createQuery("select rep from Reports rep where rep.startDate= :startdate and rep.endDate= :enddate " );
			 query.setParameter("startdate",startdate);
			 query.setParameter("enddate",enddate);
			 List<Reports> reports = query.getResultList();
			 em.close();
			return reports;
		}

		
	 public static void main(String[] args) {
/*		 factory = Persistence.createEntityManagerFactory(PERSISTENCE_UNIT_NAME);
         EntityManager em = factory.createEntityManager();
         Query q = em.createQuery("select usr from Users usr where usr.id= :id");
         q.setParameter("id", 1);
         List<Users> todoList = q.getResultList();
         for (Users todo : todoList) {
                 System.out.println(todo);
         }
         System.out.println("Size: " + todoList.size());
         em.getTransaction().begin();
         Users todo = new Users();
         todo.setUname("test");
         todo.setUpass("test");
         em.persist(todo);
         em.getTransaction().commit();
         em.close();*/
		/* SimpleDateFormat fmt = new SimpleDateFormat("yyyy-MM-dd");
		 Date startdate=null;
		 Date enddate=null;
		  Date date = new Date();
		try {
			startdate = fmt.parse("2017-03-01");
			enddate = fmt.parse("2017-03-23");
		} catch (ParseException e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		}
		java.sql.Time  sqlDate = new java.sql.Time(new java.util.Date().getTime());
		
		 EntityManager em = factory.createEntityManager();
		 em.getTransaction().begin();
		 Query query = em.createQuery("select jobId,status,project from Reports where startDate= :startdate and endDate=:enddate " );
		 query.setParameter("startdate",startdate);
		 query.setParameter("enddate",enddate);
		 
		 List<Reports> result = query.getResultList();
		 System.out.println("result.size()>>"+result.size());
		 if(result.size()>0){
			 System.out.println("result size ::::");
			 
		 }
		
		 Reports todo = new Reports();
		 todo.setJobId(1234);
		 todo.setProject("Track");
		 todo.setBranch("master");
		 todo.setTime("2:00");
		 todo.setDuration(sqlDate);
		 todo.setCommitid(100);
		 todo.setCommitLog("this is test");
		 todo.setStartDate(startdate);
		 todo.setEndDate(enddate);
		 em.persist(todo);
         em.getTransaction().commit();
		 em.close();*/
		 
		 
		 
		 Git git = Git.cloneRepository()
				  .setURI( "https://github.com/eclipse/jgit.git" )
				  .call();

		 
		 
		
	 }



}