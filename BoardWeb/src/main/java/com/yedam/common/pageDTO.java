package com.yedam.common;

import lombok.Data;

//페이징 계산 위한 클래스
@Data
public class pageDTO {
	// 현재페이지 정보 1..2..3..10
	private int page;
	// 이전, 이후 정보
	private int startPage, endPage;
	private boolean prev, next;

	public pageDTO(int page, int totalCnt) { // page:3 totalCnt: 76건. 16페이지 필요
		this.page = page;
		this.endPage = (int) Math.ceil(page / 10.0) * 10;
		this.startPage = this.endPage - 9;
		
		
		int realEnd = (int)Math.ceil(totalCnt / 5.0); // 16
		this.endPage = this.endPage > realEnd ? realEnd : this.endPage;
	
		prev = this.startPage > 1;
		next = this.endPage < realEnd ? true : false;
	}
}