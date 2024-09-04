<%@page import="com.yedam.vo.BoardVO"%>
<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<%@ taglib uri="http://java.sun.com/jsp/jstl/fmt" prefix="fmt"%>
<!DOCTYPE html>
<jsp:include page="../includes/header.jsp"></jsp:include>

<h3>글 상세 페이지</h3>
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
	<tr >
		<td>
		<button class="btn btn-secondary" onclick="location.href = 'boardList.do?page=${page}'">목록</button>
		<button class="btn btn-info" onclick="location.href = ">수정</button>
		<button class="btn btn-danger" onclick="location.href = ">삭제</button>
		</td>
	</tr>
  </table>
  
</body>
</html>


<jsp:include page="../includes/footer.jsp"></jsp:include>