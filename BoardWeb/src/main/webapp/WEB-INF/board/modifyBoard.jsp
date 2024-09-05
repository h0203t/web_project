<%@ page language="java" contentType="text/html; charset=UTF-8"
	pageEncoding="UTF-8"%>
<!DOCTYPE html>
<jsp:include page="../includes/header.jsp"></jsp:include>

<form action="modifyBoard.do">

	<table class="table">
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
</form>
</body>
</html>




</body>
</html>
<jsp:include page="../includes/footer.jsp"></jsp:include>