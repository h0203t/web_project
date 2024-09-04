package com.yedam.mapper;

import java.util.List;

import com.yedam.vo.BoardVO;

//목록, 추가, 수정, 삭제, 단건, 
public interface BoardMapper {
	List<BoardVO> selectList();
	List<BoardVO> selectListPaging(int page);
	int insertBoard(BoardVO board);
	int updateBoard(BoardVO board);
	int deleteBoard(int boarNo);
	BoardVO selectBoard(int boardNo);
	
	//페이지 계산을 위한 전체건수
	int selectCount();
}
