import React from "react";

type PaginationButtonProps = {
  currentPage: number;
  totalPages: number;
  startIndex: number;
  usersPerPage: number;
  filteredUsersLength: number;
  goToPage: (page: number) => void;
};

const PaginationButton = ({
  currentPage,
  totalPages,
  startIndex,
  usersPerPage,
  filteredUsersLength,
  goToPage,
}: PaginationButtonProps) => {
  return (
    <div className="flex flex-col sm:flex-row justify-between items-center gap-4 px-6 py-5 bg-gray-800/50">
      {/* Results Info */}
      <p className="text-sm text-gray-400">
        Showing <span className="text-white">{startIndex + 1}</span> to{" "}
        <span className="text-white">
          {Math.min(startIndex + usersPerPage, filteredUsersLength)}
        </span>{" "}
        of <span className="text-white">{filteredUsersLength}</span> results
      </p>

      {/* Pagination Controls */}
      <div className="flex items-center gap-2">
        <button
          onClick={() => goToPage(currentPage - 1)}
          disabled={currentPage === 1}
          className="px-4 py-2 bg-gray-800 border border-gray-600 rounded-lg disabled:opacity-50 disabled:cursor-not-allowed hover:bg-gray-700 transition duration-200 text-sm font-medium text-gray-200 cursor-pointer"
        >
          Previous
        </button>

        <span className="text-sm text-gray-300">
          Page <span className="font-semibold">{currentPage}</span> of{" "}
          {totalPages}
        </span>

        <button
          onClick={() => goToPage(currentPage + 1)}
          disabled={currentPage === totalPages}
          className="px-4 py-2 bg-gray-800 border border-gray-600 rounded-lg disabled:opacity-50 disabled:cursor-not-allowed hover:bg-gray-700 transition duration-200 text-sm font-medium text-gray-200 cursor-pointer"
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default PaginationButton;
