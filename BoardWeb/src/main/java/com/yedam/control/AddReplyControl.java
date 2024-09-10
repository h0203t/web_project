package com.yedam.control;

import java.io.IOException;
import java.util.Date;
import java.util.Map;

import javax.servlet.ServletException;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import org.apache.commons.collections.map.HashedMap;

import com.google.gson.Gson;
import com.google.gson.GsonBuilder;
import com.yedam.common.Control;
import com.yedam.service.ReplyService;
import com.yedam.service.ReplyServiceImpl;
import com.yedam.vo.ReplyVO;

public class AddReplyControl implements Control {
	

	@Override
	public void exec(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
		
		
		Gson gson = new GsonBuilder().setPrettyPrinting().create();
		
		Map<String, Object> map = new HashedMap(); //json객체를 생성하기 위한 map 선언
		
		
		//댓글작성자, 원본글번호, 댓글내용
		String replyer = request.getParameter("replyer");
		String reply = request.getParameter("reply");
		String bno = request.getParameter("bno");
		
		ReplyVO replyVO = new ReplyVO();
		replyVO.setBoardNo(Integer.parseInt(bno));
		replyVO.setReply(reply);
		replyVO.setReplyer(replyer);
		replyVO.setReplyDate(new Date());
		
		ReplyService svc = new ReplyServiceImpl();
		if (svc.addReply(replyVO)) { // replyNo에 값이 지정.
			// {"retCode": "OK", "retVal": {"replyNo": 19, "reply": "reply", "replyer" :
			// "replyer", "boardNo": 148}}

//			response.getWriter().print("{\"retCode\": \"OK\"," //
//					+ " \"retVal\": {\"replyDate\": \"" + replyVO.getReplyDate()//
//					+ "\" ,          \"replyNo\": " + replyVO.getReplyNo()//
//					+ ",             \"reply\": \"" + replyVO.getReply()//
//					+ "\",           \"replyer\" : \"" + replyVO.getReplyer()//
//					+ "\",           \"boardNo\": " + replyVO.getBoardNo()//
//					+ "}}");
			map.put("retCode", "OK");
			map.put("retVal", replyVO);
		} else {
			map.put("retCode", "NO");
			response.getWriter().print("{\retCode\":\"NG\"");

		}
		
		
		//retCode=OK, retCode=NG
		String json = gson.toJson(map);
		response.getWriter().print(json);

	}

}
