package com.yedam.service;

import java.util.List;

import com.yedam.common.SearchDTO;
import com.yedam.vo.BoardVO;

public interface BoardService {
	List<BoardVO> boardList(SearchDTO search); //목록
	boolean addBoard(BoardVO board);//추가
	boolean modifyBoard(BoardVO board); //수정
	boolean removeBoard(int boardNo);//삭제
	BoardVO getBoard(int boardNo);//단건조회
	
	int getTotalCnu(SearchDTO search);
}
