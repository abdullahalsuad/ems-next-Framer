"use client";

import { useState } from "react";
import { User } from "@/types/user";
import Link from "next/link";
import PaginationButton from "../pagination/PaginationButton";
import SearchBar from "./SearchBar";
import { useRouter } from "next/navigation";

const UserListClient = ({ users }: { users: User[] }) => {
  const router = useRouter();
  const [searchTerm, setSearchTerm] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const usersPerPage = 6;

  // Filter users
  const filteredUsers = users.filter(
    (user) =>
      user.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      user.email.toLowerCase().includes(searchTerm.toLowerCase()) ||
      user.username.toLowerCase().includes(searchTerm.toLowerCase())
  );

  // Pagination
  const totalPages = Math.ceil(filteredUsers.length / usersPerPage);
  const startIndex = (currentPage - 1) * usersPerPage;
  const currentUsers = filteredUsers.slice(
    startIndex,
    startIndex + usersPerPage
  );

  const goToPage = (page: number) => {
    if (page >= 1 && page <= totalPages) {
      setCurrentPage(page);
    }
  };

  return (
    <div className="w-full overflow-hidden rounded-xl shadow-lg border border-gray-700 bg-gray-900">
      {/* Search Bar */}
      <div className="p-6">
        <SearchBar
          value={searchTerm}
          onChange={(value) => {
            setSearchTerm(value);
          }}
          placeholder="Search users by name, email, or username..."
        />
      </div>

      {/* Responsive Table/Card Container */}
      <div className="overflow-x-auto">
        {/* Desktop Table View */}
        <div className="hidden sm:table w-full">
          <table className="w-full border-collapse">
            <thead className="bg-gray-800 text-gray-300 uppercase text-sm font-semibold tracking-wide">
              <tr>
                <th className="px-6 py-4 text-left">Name</th>
                <th className="px-6 py-4 text-left">Email</th>
                <th className="px-6 py-4 text-left">Phone</th>
                <th className="px-6 py-4 text-left">Company</th>
              </tr>
            </thead>
            <tbody>
              {currentUsers.length > 0 ? (
                currentUsers.map((user) => (
                  <tr
                    key={user.id}
                    onClick={() => router.push(`/${user.id}`)}
                    className="border-b border-gray-700 hover:bg-gray-800/70 transition duration-200 cursor-pointer group"
                  >
                    <td className="px-6 py-4">
                      <div className="font-semibold text-white">
                        {user.name}
                      </div>
                      <div className="text-sm text-gray-400">
                        @{user.username}
                      </div>
                    </td>
                    <td className="px-6 py-4">{user.email}</td>
                    <td className="px-6 py-4">{user.phone}</td>
                    <td className="px-6 py-4">
                      <span className="inline-flex px-3 py-1 bg-teal-900/60 text-teal-200 text-xs font-medium rounded-full">
                        {user.company.name}
                      </span>
                    </td>
                  </tr>
                ))
              ) : (
                <tr>
                  <td
                    colSpan={4}
                    className="px-6 py-8 text-center text-gray-400 italic"
                  >
                    No users found matching &ldquo;{searchTerm}&rdquo;
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>

        {/* Mobile Card View */}
        <div className="sm:hidden divide-y divide-red-700 ">
          {currentUsers.length > 0 ? (
            currentUsers.map((user) => (
              <Link
                key={user.id}
                href={`/${user.id}`}
                className="block p-4 hover:bg-gray-800/70 transition duration-200 focus:outline-none focus:ring-2 focus:ring-teal-500 rounded-lg"
              >
                <div className="flex justify-between items-start mb-2">
                  <div>
                    <h3 className="font-semibold text-white">{user.name}</h3>
                    <p className="text-sm text-gray-400">@{user.username}</p>
                  </div>
                  <span className="inline-flex px-2 py-1 bg-teal-900/60 text-teal-200 text-xs font-medium rounded-full">
                    {user.company.name}
                  </span>
                </div>
                <div className="space-y-1 text-sm text-gray-300">
                  <div>
                    <strong>Email:</strong> {user.email}
                  </div>
                  <div>
                    <strong>Phone:</strong> {user.phone}
                  </div>
                </div>
              </Link>
            ))
          ) : (
            <div className="px-4 py-8 text-center text-gray-400 italic">
              No users found matching &ldquo;{searchTerm}&rdquo;
            </div>
          )}
        </div>
      </div>

      {/* Pagination */}
      {totalPages > 1 && (
        <>
          <PaginationButton
            currentPage={currentPage}
            totalPages={totalPages}
            startIndex={startIndex}
            usersPerPage={usersPerPage}
            filteredUsersLength={filteredUsers.length}
            goToPage={goToPage}
          />
        </>
      )}
    </div>
  );
};

export default UserListClient;
