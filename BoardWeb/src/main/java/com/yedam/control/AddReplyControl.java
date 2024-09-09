package com.yedam.control;

import java.io.IOException;

import javax.servlet.ServletException;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import com.yedam.common.Control;
import com.yedam.service.ReplyService;
import com.yedam.service.ReplyServiceImpl;
import com.yedam.vo.ReplyVO;

public class AddReplyControl implements Control {

	@Override
	public void exec(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
		//댓글작성자, 원본글번호, 댓글내용
		String bno = request.getParameter("bno");
		String reply = request.getParameter("reply");
		String replyer = request.getParameter("replyer");
		
		ReplyVO replyVO = new ReplyVO();
		replyVO.setBoardNo(Integer.parseInt(bno));
		replyVO.setReply(reply);
		replyVO.setReplyer(replyer);
		
		ReplyService svc = new ReplyServiceImpl();
		if(svc.addReply(replyVO)) {
			// {"retCode" : "OK", "retVal :" {\"replyNo\" 19,
			
			response.getWriter().print("{\"retCode\":\"OK\"}");
		} else {
			response.getWriter().print("");
		}
		svc.addReply(replyVO);
		
		
		//retCode=OK, retCode=NG

	}

}
