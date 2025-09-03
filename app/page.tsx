import Hero from "@/components/user/Hero";
import UserList from "@/components/user/UserList";

export default function Home() {
  return (
    <div className="w-10/12 mx-auto mb-30">
      <Hero />
      <UserList />
    </div>
  );
}
