package com.yedam.common;

import java.util.List;

import com.yedam.service.BoardService;
import com.yedam.service.BoardServiceImpl;
import com.yedam.vo.BoardVO;

public class AppTest {
	public static void main(String[] args) {
		SearchDTO search = new SearchDTO();
		search.setSearchChondition("T");
		search.setKeyword("Java");
		search.setPage(1);
		
		BoardService svc = new BoardServiceImpl();
		svc.boardList(search).forEach(System.out::println);


	}
}
