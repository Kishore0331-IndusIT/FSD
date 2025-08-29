package com.helloworld;

import java.io.*;
import javax.servlet.*;
import javax.servlet.http.*;

public class HelloWorldServlet extends HttpServlet {
    protected void doGet(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
        // Set the content type of the response
        response.setContentType("text/html");

        // Get the output stream to send the response to the client
        PrintWriter out = response.getWriter();

        // Write the HTML content to the response
        out.println("<html><body>");
        out.println("<h1><font size=\"4\" color=\"red\">&quot;Hello World&quot; from Servlet!</font></h1>");
        out.println("</body></html>");
    }
}
