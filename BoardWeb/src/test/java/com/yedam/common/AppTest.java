package com.yedam.common;

import com.yedam.service.ReplyService;
import com.yedam.service.ReplyServiceImpl;
import com.yedam.vo.ReplyVO;

public class AppTest {
	public static void main(String[] args) {
		ReplyService svc = new ReplyServiceImpl();
//		svc.replyList(148).forEach(reply -> System.out.println(reply));
		
		ReplyVO replyVO = new ReplyVO();
		replyVO.setReplyer("user01");
		replyVO.setBoardNo(Integer.parseInt("148"));
		replyVO.setReply("안녕하세요01");
		
		svc.addReply(replyVO);
	}
}
