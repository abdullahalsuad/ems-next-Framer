import UserProfile from "@/components/user/UserProfile";

interface PageProps {
  params: { id: string };
}

const UserPage = async ({ params }: PageProps) => {
  return <UserProfile userId={Number(params.id)} />;
};

export default UserPage;
