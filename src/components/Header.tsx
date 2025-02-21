import styles from "./TodoTable.module.css";


const Header = () => {
	return (
		<header className={styles.header}>
			<h1>User To-Do Table</h1>
			<p>User task table for effective planning.</p>
		</header>
	);
};

export default Header;