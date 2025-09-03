import UserListClient from "./UserListClient";
import { fetchUsers } from "@/lib/api";

const UserList = async () => {
  const { data: users, error } = await fetchUsers();

  if (error) {
    return <p className="text-red-500">Error loading users: {error}</p>;
  }

  return <UserListClient users={users} />;
};

export default UserList;
