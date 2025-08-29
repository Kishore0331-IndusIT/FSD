<%@ page language="java" contentType="text/html; charset=ISO-8859-1" pageEncoding="ISO-8859-1"%>
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Factorial Calculator</title>
</head>
<body>
    <h2 align="center">Factorial Calculator</h2>
    
    <form action="factorial.jsp" method="POST">
       <p align="center"> Enter a number: <input type="number" name="number" required>
          <input type="submit" value="Calculate Factorial"></p>
    </form>

    <%
        // Check if the request has the "number" parameter
        String numberParam = request.getParameter("number");
        if (numberParam != null && !numberParam.isEmpty()) {
            try {
                int number = Integer.parseInt(numberParam);
                
                // Method to calculate factorial
                long factorial = 1;
                for (int i = 1; i <= number; i++) {
                    factorial *= i;
                }
                
                out.println("<h3 align=center>Factorial of " + number + " is: " + +factorial + "</h3>");
               
            } catch (NumberFormatException e) {
                out.println("<h3>Please enter a valid number.</h3>");
            }
        }
    %>
</body>
</html>
