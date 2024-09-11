<%@page import="com.yedam.vo.MemberVO"%>
<%@page import="java.util.List"%>
<%@page import="com.yedam.service.MemberService"%>
<%@page import="com.yedam.service.MemberServiceImpl"%>
<%@ page language="java" contentType="text/html; charset=UTF-8"
	pageEncoding="UTF-8"%>
<%@ taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c"%>
<%@ taglib uri="http://java.sun.com/jsp/jstl/fmt" prefix="fmt"%>
<h3>게시글 목록</h3>
<div class="center">
	<form action="">
		<div class="row">
			<!-- 검색조건(title, writer 검색) -->
			<div class="col-sm-4">
				<select name="searchChondition" class="form-control">
					<option value="">선택하세요.</option>
					<option value="T">제목</option>
					<option value="W">작성자</option>
					<option value="TW">제목 & 작성자</option>
				</select>
			</div>
			<!-- 키워드 -->
			<div class="col-sm-5">
				<input type="text" name="keyword" class="form-control">
			</div>
			<!-- 조회버튼 -->
			<div class="col-sm-2">
				<input type="submit" value="조회" class="btn btn-primary">
			</div>
		</div>
		<!-- end of div.row -->
	</form>
</div>
<!-- end of div.center -->

<c:choose>
	<c:when test="${!empty message }">
		<p>no data</p>
	</c:when>

	<c:otherwise>
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
						<td><a
							href="getBoard.do?keyword=${kw }&searchChondition=${sc }&bno=${board.boardNo }&page=${paging.page }">${board.title }</a></td>
						<td>${board.writer }</td>
						<td><fmt:formatDate value="${board.creationDate}"
								pattern="yyyy.MM.dd HH:mm:ss" /></td>
					</tr>
				</c:forEach>
			</tbody>
		</table>
	</c:otherwise>
</c:choose>


<p>${paging }</p>
<nav aria-label="...">
	<ul class="pagination">
		<li class="page-item ${paging.prev ? '' : 'disabled'} "><a
			class="page-link"
			href="boardList.do?page=${pg }${paging.startPage-1 }">Previous</a></li>

		<c:forEach var="pg" begin="${paging.startPage }"
			end="${paging.endPage }">
			<c:choose>
				<c:when test="${paging.page == pg }">
					<li class="page-item active" aria-current="page"><a
						class="page-link" href="boardList.do?keyword=${kw }&searchChondition=${sc }&page=${pg }">${pg }</a></li>
				</c:when>
				<c:otherwise>
					<li class="page-item"><a class="page-link"
						href="boardList.do?keyword=${kw }&searchChondition=${sc }&page=${pg }&page=${pg }">${pg }</a></li>
				</c:otherwise>
			</c:choose>
		</c:forEach>

		<li class="page-item   ${paging.next ? '' : 'disabled'}"><a
			class="page-link" href="boardList.do?keyword=${kw }&searchChondition=${sc }&page=${pg }${paging.endPage+1 }">Next</a>
		</li>

	</ul>
</nav>
