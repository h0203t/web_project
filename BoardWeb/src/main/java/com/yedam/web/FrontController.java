package com.yedam.web;

import java.io.IOException;
import java.util.HashMap;
import java.util.Map;

import javax.servlet.ServletConfig;
import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import com.yedam.common.Control;
import com.yedam.control.member.AddFormControl;
import com.yedam.control.member.AddMemberControl;
import com.yedam.control.member.GetMemberControl;
import com.yedam.control.member.IntroControl;
import com.yedam.control.member.MainControl;
import com.yedam.control.member.MemberListControl;
import com.yedam.control.member.ModifyFormControl;
import com.yedam.control.member.ModifyMemberControl;
import com.yedam.control.member.RemoveMemberControl;
import com.yedam.control.member.SubControl;

@WebServlet("*.do")
public class FrontController extends HttpServlet {

	// url pattern - 실행되는 기능 -> map 컬렉션에 지정.
	Map<String, Control> map;

	public FrontController() {
		map = new HashMap<>();
	}

	@Override
	public void init(ServletConfig config) throws ServletException {
		map.put("/main.do", new MainControl());
		map.put("/sub.do", new SubControl());
		map.put("/intro.do", new IntroControl());

		Map<String, Control> memberMenu = MenuMember.getInstance().menuMap();
		Map<String, Control> boardMenu = MenuBoard.getInstance().menuMap();
		
		
		map.putAll(memberMenu); //멤버관련 메뉴
		map.putAll(boardMenu); //멤버관련 메뉴
		
	}

	// HttpServletRequest
	// HttpServletResponse

	@Override
	protected void service(HttpServletRequest req, HttpServletResponse resp) throws ServletException, IOException {
		req.setCharacterEncoding("utf-8");
		
		String uri = req.getRequestURI();// /BoardWeb/main.do
		String context = req.getContextPath(); // /BoardWeb
		String page = uri.substring(context.length()); // /main.do
		System.out.println(page);

		Control control = map.get(page);
		control.exec(req, resp);
	}
}
