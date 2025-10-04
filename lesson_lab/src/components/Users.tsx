import React, { useEffect, useState } from "react";

interface User {
  id: number;
  name: string;
  phone: string;
  website: string;
}

const Users: React.FC = () => {
  const [users, setUsers] = useState<User[]>([]);
  const [selectedUser, setSelectedUser] = useState<User | null>(null);

  // Gọi API khi component mount
  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((res) => res.json())
      .then((data: User[]) => setUsers(data))
      .catch((err) => console.error("Lỗi khi tải dữ liệu:", err));
  }, []);

  return (
    <div style={{ padding: "20px", fontFamily: "Arial" }}>
      <h1>useEffect</h1>
      <ul>
        {users.map((user) => (
          <li
            key={user.id}
            onClick={() => setSelectedUser(user)}
            style={{
              cursor: "pointer",
              marginBottom: "8px",
              fontSize: "18px",
            }}
          >
            {user.id}. {user.name} | {user.phone}
          </li>
        ))}
      </ul>

      <h2>Thông tin chi tiết</h2>
      {selectedUser ? (
        <div style={{ fontSize: "18px" }}>
          <p>
            <strong>Họ và tên:</strong> {selectedUser.name}
          </p>
          <p>
            <strong>Số điện thoại:</strong> {selectedUser.phone}
          </p>
          <p>
            <strong>Website:</strong> {selectedUser.website}
          </p>
        </div>
      ) : (
        <p>Hãy click vào một user để xem chi tiết.</p>
      )}
    </div>
  );
};

export default Users;
