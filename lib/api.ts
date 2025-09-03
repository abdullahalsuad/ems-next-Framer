import { User, ApiResponse } from "@/types/user";

export const fetchUsers = async (): Promise<ApiResponse<User[]>> => {
  try {
    const res = await fetch("https://jsonplaceholder.typicode.com/users", {
      next: { revalidate: 60 }, // ISR for 1 minute
    });

    if (!res.ok) {
      throw new Error("Failed to fetch users");
    }

    const data: User[] = await res.json();

    return {
      data,
      loading: false,
      error: null,
    };
  } catch (error) {
    return {
      data: [],
      loading: false,
      error: (error as Error).message,
    };
  }
};
