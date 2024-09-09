package com.yedam.control;

import java.io.IOException;

import javax.servlet.ServletException;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import com.yedam.common.Control;

public class RemoveReplysContorl implements Control {

	@Override
	public void exec(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
		request.getParameterValues("rno"); //?rno=1%?rno=2&rno=3
		String[] params = request.getParameterValues("rno");
		
		

	}

}
