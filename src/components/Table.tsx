import avatarplaceholder from "../assets/avatarplaceholder.svg";
import styles from "./TodoTable.module.css";
import {User} from "../types";


interface TableProps {
	users: User[];
}

const Table = ({users}: TableProps) => {
	return (
		<div className={styles.tableWrapper}>
			<div className={styles.tableContainer}>
				<table className={styles.table}>
					<thead>
					<tr className={styles.tableHead}>
						<th className={styles.numberHeader}>#</th>
						<th className={styles.userHeader}>USERNAME</th>
						<th className={styles.countHeader}>TO-DO COUNT</th>
					</tr>
					</thead>
					<tbody>
					{users.map((user) => (
						<tr key={user.id}>
							<td className={styles.numberCell}>{user.id}</td>
							<td className={styles.userCell}>
								<div className={styles.userInfo}>
									<div className={styles.avatar}>
										<img src={avatarplaceholder} alt="user avatar"/>
									</div>
									<div className={styles.userDetails}>
										<div className={styles.userName}>{user.name}</div>
										<div className={styles.userEmail}>{user.email}</div>
									</div>
								</div>
							</td>
							<td className={styles.countCell}>{user.todoCount}</td>
						</tr>
					))}
					</tbody>
				</table>
			</div>
		</div>
	);
};

export default Table;
