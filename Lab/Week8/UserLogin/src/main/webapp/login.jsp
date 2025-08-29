<!DOCTYPE html>
<html>
<head>
    <title>User Login</title>
</head>
<body>
    <h2 align="center">User Login</h2>
    <form action="login" method="POST">
        <p align="center"> <label for="username">Username: </label>
        <input type="text" id="username" name="username" required><br><br>
        
        <label for="password">Password: </label>
        <input type="password" id="password" name="password" required><br><br>
        
        <button type="submit">Login</button></p>
    </form>
    <p style="color: red;" align="center"><%= request.getAttribute("errorMessage") != null ? request.getAttribute("errorMessage") : "" %></p>
</body>
</html>
