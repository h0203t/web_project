<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
    
<jsp:include page="../includes/header.jsp"></jsp:include>

  <%
     // 자바영역.
     String message = (String) request.getAttribute("message");
  %>
  <%if(message != null){ %>
  <p style="color: red;"><%=message %></p>
  <%} %>
  <!-- 주석구문. -->
  <form action="addMember.do" method="get">
  <table class="table">
    <tr><th>회원아이디:</th><td><input class="form-control" type="text" name="id"></td></tr>
    <tr><th>회원이름: </th><td><input class="form-control" type="text" name="name"></td></tr>
    <tr><th>비밀번호: </th><td><input class="form-control" type="password" name="pass"></td></tr>
    <tr><th>이메일: </th><td><input class="form-control" type="email" name="email"></td></tr>
    <tr><td colspan="2" align="center">
    					<input class="form-control btn btn-primary col-sm-9" type="submit">
    					<input class="form-control btn btn-secondary col-sm-9" type="reset">
    </td></tr>
  </table>
  </form>
  
</body>
</html>

<jsp:include page="../includes/footer.jsp"></jsp:include>
