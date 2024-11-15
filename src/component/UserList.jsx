import { UserRow } from './UserRow';

export function UserList() {
    const users = [
        { id: 1, name: "Pedro", lastMS: "Vai na festa?", min: 2 },
        { id: 2, name: "Henrique", lastMS: "De boa?", min: 5 },
        { id: 3, name: "João", lastMS: "Td certo aqui!", min: 12 }
    ];

    return (
        <div className="rows">
            <UserRow user={users[0]} />
        </div>
    );
}
