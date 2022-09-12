package youCanDoIt;

import java.io.IOException;
import java.util.List;

import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import com.google.gson.Gson;
import com.google.gson.GsonBuilder;
import com.google.gson.JsonArray;
import com.google.gson.JsonObject;

@WebServlet("/board")
public class BoardServlet extends HttpServlet {
	private static final long serialVersionUID = 1L;

	public BoardServlet() {
		super();
	}

//	 bno number primary key,
//	 title varchar2(100),
//	 content varchar2(300),
//	 writer varchar2(30),
//	 creation_date date
	protected void doGet(HttpServletRequest request, HttpServletResponse response)
			throws ServletException, IOException {
		// 조회의 기능 구현.
		response.setContentType("text/json;charset=utf-8");

		BoardDAO dao = new BoardDAO();
		List<Board> list = dao.getBoardList();
		String json = "[";

		for(int i =0; i<list.size(); i++) {
			json += "{\"bno\":\""+list.get(i).getBno()+"\",\"title\":\""+list.get(i).getTitle()+"\",\"content\":\""+list.get(i).getContent()+
					"\",\"writer\":\""+list.get(i).getWriter()+"\",\"creation_date\":\""+list.get(i).getCreationDate()+"\"}";
			if(i != list.size()-1) {
				json += ","; 
			}
		}
		json += "]";

		response.getWriter().print(json);
		
	}

	protected void doPost(HttpServletRequest request, HttpServletResponse response)
			throws ServletException, IOException {
		request.setCharacterEncoding("utf-8");

		// 추가, 삭제의 기능을 구현.
		String job = request.getParameter("job");
		if (job.equals("insert")) {
			Board board = new Board();
			// board.setBno(Integer.parseInt(request.getParameter("bno")));
			board.setTitle(request.getParameter("title"));
			board.setContent(request.getParameter("content"));
			board.setWriter(request.getParameter("writer"));
			board.setCreationDate("creation_date");
			BoardDAO dao = new BoardDAO();
			if (dao.insertBoard(board)) {
				response.getWriter().print("success");
			} else {
				response.getWriter().print("fail");
			}
			;
			// int age = Integer.parseInt(request.getParameter("age"));
		} else if (job.equals("delete")) {
			int bno = Integer.parseInt(request.getParameter("bno"));
			BoardDAO dao = new BoardDAO();
			if (dao.deleteBoard(bno)) {
				response.getWriter().print("success");
			} else {
				response.getWriter().print("fail");
			}
			;

		}

	}

}
