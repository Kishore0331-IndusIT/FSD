import java.io.*;
import javax.servlet.*;
import javax.servlet.http.*;

public class LogoutServlet extends HttpServlet {

    protected void doPost(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
        // Get the session
        HttpSession session = request.getSession(false);

        if (session != null) {
            // Get the user's name and session start time from the session
            String name = (String) session.getAttribute("name");
            long startTime = (Long) session.getAttribute("startTime");

            // Calculate the session duration in seconds
            long duration = (System.currentTimeMillis() - startTime) / 1000;  // in seconds

            // Invalidate the session (log out)
            session.invalidate();

            // Set content type and response writer
            response.setContentType("text/html");
            PrintWriter out = response.getWriter();

            // Display the Thank You message with the session duration
            out.println("<html>");
            out.println("<head><title>Logout Page</title></head>");
            out.println("<body>");
            out.println("<h1>Thank You " + name + "</h1>");
            out.println("<p>Your session lasted for " + duration + " seconds.</p>");
            out.println("</body>");
            out.println("</html>");
        }
    }
}
