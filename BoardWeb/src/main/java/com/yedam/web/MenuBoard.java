package com.yedam.web;

import java.util.HashMap;
import java.util.Map;

import com.yedam.common.Control;
import com.yedam.control.board.AddBoardControl;
import com.yedam.control.board.BoardControl;
import com.yedam.control.board.BoardFormControl;
import com.yedam.control.board.BoardListControl;
import com.yedam.control.board.ModifyBoardFormControl;
import com.yedam.control.board.RemoveControl;
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
		
		//수정화면
		menu.put("/modifyBoard.do", new ModifyBoardFormControl());
		//수정실행
		
		menu.put("/removeBoard.do", new RemoveControl());
		
		// 등록(화면, 기능)
		menu.put("/addBoardForm.do", new BoardFormControl());
		menu.put("/addBoard.do", new AddBoardControl());
		

		return menu;
	}
}
