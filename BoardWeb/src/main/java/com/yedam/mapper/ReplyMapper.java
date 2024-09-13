package com.yedam.mapper;

import java.util.List;
import java.util.Map;

import com.yedam.common.SearchDTO;
import com.yedam.vo.ReplyVO;

public interface ReplyMapper {
	//댓글목록
	List<ReplyVO> selectList(int bno);
	List<ReplyVO> selectListPageing(SearchDTO search);
	//삭제
	int deleteReply(int rno);
	//다건 삭제.
	int deleteReplys(String[] array);
	//댓글등록
	int selectKey();
	int insertReply(ReplyVO rvo);
	
	//댓글 건수
	int selectReplyCount(int bno);
	
	//캘린더
	List<Map<String, Object>> selectEvent();
	int insertEvent(SearchDTO event);
	int deleteEvent(SearchDTO event);
	
	//글작성건수와 작성자 차트.
	List<Map<String, Object>> countRerWriter();
}
