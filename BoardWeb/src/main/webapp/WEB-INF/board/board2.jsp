<%@page import="com.yedam.vo.BoardVO"%>
<%@ page language="java" contentType="text/html; charset=UTF-8"
	pageEncoding="UTF-8"%>
<%@ taglib uri="http://java.sun.com/jsp/jstl/fmt" prefix="fmt"%>
<%@ taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c"%>
<!DOCTYPE html>
<style>
div.reply div {
	margin: auto;
}

div.reply ul {
	list-style-type: none;
}

div.reply span {
	display: inline-block	;
}
</style>

<link rel="stylesheet" href="//cdn.datatables.net/2.1.5/css/dataTables.dataTables.min.css">
<script src="js/jquery-3.7.1.js"></script>
<script src="//cdn.datatables.net/2.1.5/js/dataTables.min.js"></script>

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
	<a class="btn btn-info" ${board.writer ne logid ? 'disabled' : '' }
		href="modifyBoard.do?bno=${board.boardNo }">수정</a> <a
		class="btn btn-danger" onclick="form_submit('removeBoard.do')">삭제</a>
	<c:if test="${!empty message }">
		<span style="color: rde;">${message }</span>
	</c:if>
</div>

<!-- 댓글관리 -->
<div class="container reply">
	<!-- 댓글등록 -->
	<div class="header">
	  <input type="text" id="reply" class="col-sm-08">
	  <button id="addReply" class="btn btn-primary">등록</button>
	</div>

	<!-- 댓글목록 -->
	<div class="content">
		<ul>
			<li><span class="col-sm-2">글번호</span> <span class="col-sm-5">댓글내용</span>
				<span class="col-sm-2">작성자</span> <span class="col-sm-2">삭제</span></li>
			<li>
				<hr />
			</li>
			<li id="template"><span class="col-sm-2">24</span> <span
				class="col-sm-5">테스트입니다.</span> <span class="col-sm-2">user01</span>
				<span class="col-sm-2"><button class="btn btn-danger">삭제</button></span></li>
		</ul>
	</div>
</div>

<!-- 댓글페이지 -->
<nav aria-label="Page navigation example">
  <ul class="pagination justify-content-center">
    <li class="page-item disabled">
      <a class="page-link" >Previous</a>
    </li>
    <li class="page-item"><a class="page-link" href="#">1</a></li>
    <li class="page-item"><a class="page-link" href="#">2</a></li>
    <li class="page-item"><a class="page-link" href="#">3</a></li>
    <li class="page-item">
      <a class="page-link" href="#">Next</a>
    </li>
  </ul>
</nav>

<script>
	const bno = '${board.boardNo}'; //원본 글번호
	const writer = '${logid}'; //로그인 정보

	// 매개값으로 이동할 컨트롤을 받아서 파라미터를 전달.
	function form_submit(uri) {
		document.forms.actForm.action = uri;
		document.forms.actForm.submit();
	}
</script>

<script src="https://cdn.jsdelivr.net/npm/sweetalert2@11"></script>
<script src="js/replyService.js"></script>
<script src="js/replyBoard.js"></script>

