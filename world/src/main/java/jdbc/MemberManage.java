package jdbc;

import java.sql.SQLException;
import java.util.ArrayList;
import java.util.List;

public class MemberManage extends DAO {

	// 싱글톤
	private static MemberManage mm = new MemberManage();

	private MemberManage() {
	}

	public static MemberManage getInstance() {
		return mm;
	}

	// 풀캘린더 관련(from).
	public List<FullCalendar> scheduleList() {

		String sql = "select * from my_calendar";
		List<FullCalendar> list = new ArrayList<>();
		conn();

		try {
			pstmt = conn.prepareStatement(sql);
			rs = pstmt.executeQuery();

			while (rs.next()) {
				FullCalendar cal = new FullCalendar();
				cal.setTitle(rs.getString("title"));
				cal.setStartDate(rs.getString("start_date"));
				cal.setEndDate(rs.getString("end_date"));
				list.add(cal);
			}
		} catch (Exception e) {
			e.printStackTrace();
		} finally {
			disconnect();
		}
		return list;
	}

	public boolean insertCalendar(FullCalendar full) {
		String sql = "insert into my_calendar values(?,?,?)";
		conn();
		try {
			pstmt = conn.prepareStatement(sql);
			pstmt.setString(1, full.getTitle());
			pstmt.setString(2, full.getStartDate());
			pstmt.setString(3, full.getEndDate());

			int r = pstmt.executeUpdate();
			if (r > 0)
				return true;
		} catch (Exception e) {
			e.printStackTrace();
		} finally {
			disconnect();
		}
		return false;
	}
	
	public boolean deleteCalendar(String title) {
		String sql = "delete from my_calendar where title =?";
		conn();
		try {
			pstmt = conn.prepareStatement(sql);
			pstmt.setString(1, title);
			
			int r = pstmt.executeUpdate();
			if(r>0)
				return true;
		}catch (Exception e) {
			e.printStackTrace();
		} finally {
			disconnect();
		}
		return false;
	}
	// 풀캘린더 관련(to).

	//////////////////////////////////////////////////////////////////////

	// 로그인 메소드
	public Member loginInfo(String id) {
		Member member = null;
		try {
			conn();

			// id -> pk
			// 1개의 row 반환

			String sql = "select * from bankmember where member_id=?";
			pstmt = conn.prepareStatement(sql);
			pstmt.setString(1, id);
			rs = pstmt.executeQuery();

			if (rs.next()) {
				member = new Member();
				// MemberManage -> 로그인 메소드
				// setAccountId -> setMemberId
				member.setMemberId(rs.getString("member_id"));
				member.setMemberPw(rs.getString("member_pw"));
				member.setMemberName(rs.getString("member_name"));
				member.setRole(rs.getString("role"));

			}

		} catch (Exception e) {
			e.printStackTrace();
		} finally {
			disconnect();
		}
		return member;
	}

	// 고객 등록 메소드
	public int registCustomer(Member member) {
		int result = 0;
		try {
			conn();
			String sql = "insert into bankmember (member_id, member_pw,member_name, role) values (?,?,?,?)";
			pstmt = conn.prepareStatement(sql);
			pstmt.setString(1, member.getMemberId());
			pstmt.setString(2, member.getMemberPw());
			pstmt.setString(3, member.getMemberName());
			pstmt.setString(4, member.getRole());

			result = pstmt.executeUpdate();

		} catch (Exception e) {
			e.printStackTrace();
		} finally {
			disconnect();
		}
		return result;
	}

	// 전체 멤버를 반환
	public List<Member> getMembers() {
		List<Member> list = new ArrayList<>();

		conn();
		try {
			pstmt = conn.prepareStatement("select * from bankmember");
			rs = pstmt.executeQuery();

			while (rs.next()) {
				Member mem = new Member();
				mem.setMemberId(rs.getString("member_id"));
				mem.setMemberName(rs.getString("member_name"));
				mem.setMemberPw(rs.getString("member_pw"));
				mem.setRole(rs.getString("role"));
				list.add(mem);
			}
		} catch (SQLException e) {
			e.printStackTrace();
		} finally {
			disconnect();
		}
		return list;
	}

	// 아이디를 기준으로 삭제처리 후 정상처리되면 true or false 반환.
	public boolean delMember(String id) {
		conn();
		String sql = "delete from bankmember where member_id = ?";
		try {
			pstmt = conn.prepareStatement(sql);
			pstmt.setString(1, id);

			int r = pstmt.executeUpdate();

			if (r > 0) {
				return true;
			}
		} catch (SQLException e) {
			e.printStackTrace();
		} finally {
			disconnect();
		}
		return false; // 정상처리 안된 경우.
	}

	// 수정
	public boolean updateMember(Member member) {
		conn();
		String sql = "update bankmember set member_pw=?,member_name=? where member_id=?";

		try {
			pstmt = conn.prepareStatement(sql);
			pstmt.setString(1, member.getMemberPw());
			pstmt.setString(2, member.getMemberName());
			pstmt.setString(3, member.getMemberId());

			int result = pstmt.executeUpdate();

			if (result > 0) {
				return true;
			}

		} catch (SQLException e) {
			e.printStackTrace();
		} finally {
			disconnect();
		}

		return false;
	}
}
