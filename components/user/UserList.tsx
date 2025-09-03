import { fetchUsers } from "@/lib/api";
import UserCard from "./UserCard";

const UserList = async () => {
  const { data: users, error } = await fetchUsers();

  if (error) {
    return <p className="text-red-500">Error: {error}</p>;
  }

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
      {users.map((user) => (
        <UserCard
          key={user.id}
          name={user.name}
          username={user.username}
          email={user.email}
          phone={user.phone}
          address={user.address.city}
          website={user.website}
          company={user.company.name}
        />
      ))}
    </div>
  );
};

export default UserList;
