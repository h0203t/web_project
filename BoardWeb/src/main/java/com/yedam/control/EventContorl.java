package com.yedam.control;

import java.io.IOException;
import java.lang.reflect.Method;
import java.util.List;
import java.util.Map;

import javax.servlet.ServletException;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import com.google.gson.Gson;
import com.google.gson.GsonBuilder;
import com.yedam.common.Control;
import com.yedam.common.SearchDTO;
import com.yedam.service.ReplyService;
import com.yedam.service.ReplyServiceImpl;

public class EventContorl implements Control {

	ReplyService svc = new ReplyServiceImpl();

	/*
	 * "/eventList.do" "/addEvent.do" "/removeEvent.do"
	 * 
	 */
	@Override
	public void exec(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
		response.setContentType("text/json;charset=utf-8");

		String uri = request.getRequestURI();
		String context = request.getContextPath();
		String page = uri.substring(context.length());

		// 요청 uri값에서 /와 .do 제외한 값을 실행할 메소드의 지정
		String methodName = page.substring(1, page.indexOf("."));
		System.out.println(methodName);

		try {
			Class<?> cls = Class.forName(this.getClass().getName());
			Method method = cls.getDeclaredMethod(methodName, HttpServletRequest.class // 파라미터1
					, HttpServletResponse.class // 파라미터2
			);
			method.invoke(this, request, response); // 메소드 실행

		} catch (Exception e) {
			e.printStackTrace();
		}

	}

	public void eventList(HttpServletRequest request, HttpServletResponse response) {

		ReplyService svc = new ReplyServiceImpl();

		List<Map<String, Object>> list = svc.eventList();

		Gson gson = new GsonBuilder().setPrettyPrinting().create();
		String json = gson.toJson(list);

		try {
			response.getWriter().println(json);
		} catch (IOException e) {
			e.printStackTrace();
		}

	}

	public void addEvent(HttpServletRequest request, HttpServletResponse response) {
		String title = request.getParameter("title");
		String start = request.getParameter("start");
		String end = request.getParameter("end");

		SearchDTO event = new SearchDTO();
		event.setTitle(title);
		event.setStart(start);
		event.setEnd(end);

		try {
			if (svc.addEvent(event)) {
				response.getWriter().print("{\"retCode\":\"OK\"}");
			} else {
				response.getWriter().print("{\"retCode\":\"NG\"}");
			}
		} catch (IOException e) {
			e.printStackTrace();
		}
	}

	public void removeEvent(HttpServletRequest request, HttpServletResponse response) {
		String title = request.getParameter("title");
		String start = request.getParameter("start");
		String end = request.getParameter("end");

		SearchDTO event = new SearchDTO();
		event.setTitle(title);
		event.setStart(start);
		event.setEnd(end);

		try {
			if (svc.removeEvent(event)) {
				response.getWriter().print("{\"retCode\":\"OK\"}");
			} else {
				response.getWriter().print("{\"retCode\":\"NG\"}");
			}
		} catch (IOException e) {
			e.printStackTrace();
		}
	}

	// chart의 json 데이터
	public void chart(HttpServletRequest request, HttpServletResponse response) {
	
		List<Map<String, Object>> list = svc.countPerWriter();
		
		Gson gson = new GsonBuilder().setPrettyPrinting().create();
		String json = gson.toJson(list);
		
		try {
			response.getWriter().println(json);
		} catch (IOException e) {
			e.printStackTrace();
		}
	}
	
	// chart의 페이지 호출
	public void showChart(HttpServletRequest request, HttpServletResponse response) {
		try {
			request.getRequestDispatcher("admin/chart.tiles").forward(request, response);
		} catch (Exception e) {
			e.printStackTrace();
		}
	}

}
