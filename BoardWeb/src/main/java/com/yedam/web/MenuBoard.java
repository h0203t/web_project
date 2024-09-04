package com.yedam.web;

import java.util.HashMap;
import java.util.Map;

import com.yedam.common.Control;
import com.yedam.control.board.BoardControl;
import com.yedam.control.board.BoardListControl;
import com.yedam.control.member.AddFormControl;
import com.yedam.control.member.AddMemberControl;
import com.yedam.control.member.GetMemberControl;
import com.yedam.control.member.MemberListControl;
import com.yedam.control.member.ModifyFormControl;
import com.yedam.control.member.ModifyMemberControl;
import com.yedam.control.member.RemoveMemberControl;

public class MenuBoard {
	private static MenuBoard instance = new MenuBoard();

	private MenuBoard() {
	}

	public static MenuBoard getInstance() {
		return instance;
	}

	public Map<String, Control> menuMap() {
		Map<String, Control> menu = new HashMap<>();

		// 기능등록.
		menu.put("/boardList.do", new BoardListControl());
		menu.put("/getBoard.do", new BoardControl());
		

		return menu;
	}
}
