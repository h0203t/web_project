<%@page import="com.yedam.vo.MemberVO"%>
<%@ page language="java" contentType="text/html; charset=UTF-8"
	pageEncoding="UTF-8"%>
<jsp:include page="../includes/header.jsp"></jsp:include>
<h3>회원수정화면</h3>
<%
	MemberVO member = (MemberVO)request.getAttribute("memberInfo");
%>
<form action="modifyMember.do">
<input type="hidden" name="id" value="<%=member.getMemberName() %>">
<table class="table">
	<tr>
		<th>회원아이디</th>
		<td><%=member.getMemberId() %></td>
	</tr>
	<tr>
		<th>회원이름</th>
		<td><input class="from-control type="text" name="name" value="<%=member.getMemberName() %>"></td>
	</tr>
	<tr>
		<th>비밀번호</th>
		<td><input class="from-control type="password" name="pass" value="<%=member.getPassword() %>"></td>
	</tr>
	<tr>
		<th>이메일</th>
		<td><input class="from-control" type="email" name="email" value="<%=member.getEmail() %>"></td>
	</tr>
	<tr>
		<th>가입일자</th>
		<td><%=member.getCreationDate() %></td>
	</tr>
	<tr>
		<td colspan="2" align="center">
		<button type="submit" class="btn btn-info">저장</button>
		<button class="btn btn-secondary">취소</button>
		</td>
	</tr>
</table>
</form>
</body>
</html>
<jsp:include page="../includes/footer.jsp"></jsp:include>