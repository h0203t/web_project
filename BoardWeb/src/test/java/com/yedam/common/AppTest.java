package com.yedam.common;

import java.util.List;

import com.yedam.service.BoardService;
import com.yedam.service.BoardServiceImpl;
import com.yedam.vo.BoardVO;

public class AppTest {
	public static void main(String[] args) {
		
		BoardVO board = new BoardVO();
		board.setTitle("입력테스트");
		board.setContent("내용입니다.");
		board.setWriter("kim");
		board.setBoardNo(128);
		
		BoardService svc = new BoardServiceImpl();
		svc.removeBoard(3);

		svc.boardList().forEach(System.out::println);
		
		svc.modifyBoard(board);
		svc.boardList().forEach(System.out::println);
		
		System.out.println(svc.getBoard(board.getBoardNo()));
		

	}
}
