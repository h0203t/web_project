<%@page import="com.yedam.vo.MemberVO"%>
<%@page import="java.util.List"%>
<%@page import="com.yedam.service.MemberService"%>
<%@page import="com.yedam.service.MemberServiceImpl"%>
<%@ page language="java" contentType="text/html; charset=UTF-8"
	pageEncoding="UTF-8"%>
<%@ taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c"%>
<%@ taglib uri="http://java.sun.com/jsp/jstl/fmt" prefix="fmt"%>

<jsp:include page="../includes/header.jsp"></jsp:include>
<h3>게시글 목록</h3>

<table class="table">
	<thead>
		<tr>
			<th>글번호</th>
			<th>제목</th>
			<th>작성자</th>
			<th>작성일시</th>
		</tr>
	</thead>
	<tbody>
		<c:forEach var="board" items="${list }">
			<tr>
				<td><c:out value="${board.boardNo }" /></td>
				<td><a href="getBoard.do?bno=${board.boardNo }&page=${paging.page }">${board.title }</a></td>
				<td>${board.writer }</td>
				<td><fmt:formatDate value="${board.creationDate}"
						pattern="yyyy.MM.dd HH:mm:ss" /></td>
			</tr>
		</c:forEach>
	</tbody>
</table>

<p>${paging }</p>
<nav aria-label="...">
	<ul class="pagination">
		<li class="page-item ${paging.prev ? '' : 'disabled'} ">
		<a class="page-link" href="boardList.do?page=${pg }${paging.startPage-1 }">Previous</a>
		</li>

		<c:forEach var="pg" begin="${paging.startPage }"
			end="${paging.endPage }">
			<c:choose>
				<c:when test="${paging.page == pg }">
					<li class="page-item active" aria-current="page">
					<a class="page-link" href="boardList.do?page=${pg }">${pg }</a>
					</li>
				</c:when>
				<c:otherwise>
					<li class ="page-item">
						<a class="page-link"href="boardList.do?page=${pg }">${pg }</a>
					</li>
				</c:otherwise>
			</c:choose>
		</c:forEach>
		
		<li class="page-item   ${paging.next ? '' : 'disabled'}">
		<a class="page-link" href="boardList.do?page=${pg }${paging.endPage+1 }">Next</a>
		</li>
		
	</ul>
</nav>


<jsp:include page="../includes/footer.jsp"></jsp:include>
