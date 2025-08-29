import java.io.*;
import javax.servlet.*;
import javax.servlet.http.*;
import java.time.LocalTime;

public class LoginServlet extends HttpServlet {

    protected void doPost(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
        // Get the name from the request
        String name = request.getParameter("name");

        // Create a new session or get the existing one
        HttpSession session = request.getSession();

        // Store the name and current time in the session
        session.setAttribute("name", name);
        session.setAttribute("startTime", System.currentTimeMillis()); // Current time in milliseconds

        // Set content type and response writer
        response.setContentType("text/html");
        PrintWriter out = response.getWriter();

        // Generate the welcome page
        out.println("<html>");
        out.println("<head><title>Welcome Page</title></head>");
        out.println("<body>");
        out.println("<h1>Hello " + name + "</h1>");
        
        // Display the start time in the top-right corner
        out.println("<div style='position: absolute; top: 10px; right: 10px;'>Start Time: " + LocalTime.now() + "</div>");
        
        // Button for logging out
        out.println("<form action='LogoutServlet' method='POST'>");
        out.println("<input type='submit' value='Logout'>");
        out.println("</form>");
        
        out.println("</body>");
        out.println("</html>");
    }
}
