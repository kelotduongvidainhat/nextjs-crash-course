export default async function Users() {
    const response = await fetch('https://jsonplaceholder.typicode.com/users');
    const users = await response.json();
    return (
        <div>
            <h1>Users</h1>
            <ul>
                {users.map((user: any) => (
                    <li key={user.id}>{user.name}</li>
                ))}
            </ul>
        </div>
    )
}