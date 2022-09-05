package youCanDoIt;

import java.sql.SQLException;
import java.util.ArrayList;
import java.util.List;

public class BoardDAO extends DAO {

	public List<Board> getBoardList() {
		String sql = "select * from tbl_board";
		List<Board> list = new ArrayList<>();
		
		conn();
		try {
			pstmt = conn.prepareStatement(sql);
			rs = pstmt.executeQuery();
//			 bno number primary key,
//			 title varchar2(100),
//			 content varchar2(300),
//			 writer varchar2(30),
//			 creation_date date
			while(rs.next()) {
				Board board = new Board();
				board.setBno(rs.getInt("bno"));
				board.setTitle(rs.getString("title"));
				board.setContent(rs.getString("content"));
				board.setWriter(rs.getString("writer"));
				board.setCreationDate(rs.getDate("creation_date"));
				
				list.add(board);
			}
		} catch (SQLException e) {
			e.printStackTrace();
		}
		return list;
	}
	
	// 삭제
	public boolean deleteBoard(int bno) {
		String sql = "delete from tbl_board where bno = ?";
		conn();
		try {
			pstmt = conn.prepareStatement(sql);
			pstmt.setInt(1, bno);
			
			int result = pstmt.executeUpdate();
			
			if(result > 0)
				return true;
		}catch (SQLException e) {
			e.printStackTrace();
		}
		return false;
	}
	
	// 입력
	public boolean insertBoard(Board board) {
		String sql = "insert into tbl_board values(?, ?, ?, ?, ?)";
		conn();
		try {
			pstmt=conn.prepareStatement(sql);
			pstmt.setInt(1, board.getBno());
			pstmt.setString(2, board.getTitle());
			pstmt.setString(3, board.getContent());
			pstmt.setString(4, board.getWriter());
			pstmt.setDate(5, board.getCreationDate());
			
			int result = pstmt.executeUpdate();
			if(result > 0)
				return true;
//			 bno number primary key,
//			 title varchar2(100),
//			 content varchar2(300),
//			 writer varchar2(30),
//			 creation_date date
		}catch (SQLException e) {
			e.printStackTrace();
		}
		return false;
	}
}
