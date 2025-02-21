import {useState, useEffect} from "react";
import styles from "./components/TodoTable.module.css";
import Header from "./components/Header.tsx";
import Table from "./components/Table.tsx";
import {User, Todo} from "./types";


const App = () => {
	const [tableData, setTableData] = useState<User[]>([]);
	const [loading, setLoading] = useState<boolean>(false);
	const [error, setError] = useState<string | null>(null);
	
	useEffect(() => {
		const fetchData = async () => {
			setLoading(true);
			setError(null);
			
			try {
				const usersResponse = await fetch("https://jsonplaceholder.typicode.com/users");
				const users: User[] = await usersResponse.json();
				
				const todosResponse = await fetch("https://jsonplaceholder.typicode.com/todos");
				const todos: Todo[] = await todosResponse.json();
				
				const updatedUsers = users.map(user => ({
					...user,
					todoCount: todos.filter(todo => todo.userId === user.id).length,
				}));
				
				setTableData(updatedUsers);
			}
			catch {
				setError("Произошла ошибка при получении данных ;(");
			} finally {
				setLoading(false);
			}
		};
		
		fetchData();
	}, []);
	
	return (
		<div className={styles.container}>
			<div className={styles.content}>
				<Header/>
				{loading && <div>Загрузка...</div>}
				{!loading && !error && tableData.length === 0 && (
					<div>Нет данных для отображения.</div>
				)}
				{error && <div style={{color: "red"}}>{error}</div>}
				<Table users={tableData}/>
			</div>
		</div>
	);
};

export default App;
