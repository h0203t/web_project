<%@page import="com.yedam.vo.BoardVO"%>
<%@ page language="java" contentType="text/html; charset=UTF-8"
	pageEncoding="UTF-8"%>
<%@ taglib uri="http://java.sun.com/jsp/jstl/fmt" prefix="fmt"%>
<%@ taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c"%>
<!DOCTYPE html>

<h3>글 상세 페이지</h3>
<p>searchChondition : ${sc }, keyword: ${kw }</p>
<table class="table table-striped-columns">
	<tr>
		<th>글번호</th>
		<td>${board.boardNo}</td>
	</tr>
	<tr>
		<th>제목</th>
		<td>${board.title}</td>
	</tr>
	<tr>
		<th>내용</th>
		<td>${board.content}</td>
	</tr>
	<tr>
		<td><img width="150px" src="images/${board.image }"></td>
	</tr>
	<tr>
		<th>작성자</th>
		<td>${board.writer }</td>
	</tr>
	<tr>
		<th>조회수</th>
		<td>${board.viewCount}</td>
	</tr>
	<tr>
		<th>작성일시</th>
		<td><fmt:formatDate value="${board.creationDate}"
				pattern="yyyy.MM.dd HH:mm:ss" /></td>
	</tr>
</table>
<form action="removeBoard.do" name="actForm">
	<input type="hidden" name="keyword" value="${kw }"> <input
		type="hidden" name="searchChondition" value="${sc }"> <input
		type="hidden" name="page" value="${page }"> <input
		type="hidden" name="bno" value="${board.boardNo }">
</form>
<div>
	<a class="btn btn-secondary" onclick="form_submit('boardList.do')">목록</a>
	<a class="btn btn-info" ${board.writer ne logid ? 'disabled' : '' } href="modifyBoard.do?bno=${board.boardNo }">수정</a>
	<a class="btn btn-danger" onclick="form_submit('removeBoard.do')">삭제</a>
	<c:if test="${!empty message }">
		<span style="color: rde;">${message }</span>
	</c:if>
</div>

<script>
	// 매개값으로 이동할 컨트롤을 받아서 파라미터를 전달.
	function form_submit(uri) {
		document.forms.actForm.action = uri;
		document.forms.actForm.submit();
	}
</script>
</body>
</html>
