"use client";

import { motion, Variants } from "framer-motion";
import { User, Mail, Phone, MapPin, Globe } from "lucide-react";
import Link from "next/link";

type UserCardProps = {
  Userid: number;
  name: string;
  username: string;
  email: string;
  phone: string;
  address: string;
  website: string;
  company: string;
};

const slideLeft: Variants = {
  hidden: { opacity: 0, x: -50 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.5, ease: "easeOut" } },
};

export default function UserCard({
  Userid,
  name,
  username,
  email,
  phone,
  address,
  website,
  company,
}: UserCardProps) {
  return (
    <motion.div
      variants={slideLeft}
      initial="hidden"
      animate="visible"
      className="bg-gray-900 border border-teal-500/30 rounded-xl p-6  shadow-lg hover:shadow-xl transition-shadow duration-300"
    >
      {/* Profile Icon */}
      <div className="flex items-center space-x-3 mb-4">
        <div className="w-10 h-10 bg-gradient-to-br from-teal-500 to-teal-800 rounded-full flex items-center justify-center">
          <User className="w-5 h-5 text-white" />
        </div>
        <div>
          <h3 className="text-lg font-semibold text-white">{name}</h3>
          <p className="text-sm text-gray-400">@{username}</p>
        </div>
      </div>

      {/* Info List */}
      <ul className="space-y-3 mb-5">
        <li className="flex items-center space-x-2 text-sm text-gray-300">
          <Mail className="w-4 h-4 text-teal-400" />
          <span>{email}</span>
        </li>
        <li className="flex items-center space-x-2 text-sm text-gray-300">
          <Phone className="w-4 h-4 text-teal-400" />
          <span>{phone}</span>
        </li>
        <li className="flex items-center space-x-2 text-sm text-gray-300">
          <MapPin className="w-4 h-4 text-teal-400" />
          <span>{address}</span>
        </li>
        <li className="flex items-center space-x-2 text-sm text-gray-300">
          <Globe className="w-4 h-4 text-teal-400" />
          <span>{website}</span>
        </li>
      </ul>

      {/* Company Tag */}
      <div className="mb-4">
        <span className="inline-block px-3 py-1 bg-teal-800 text-white text-xs font-medium rounded-full">
          {company}
        </span>
      </div>

      {/* View Details Button */}
      <Link
        href={`/${Userid}`}
        className="w-full py-3 px-4 bg-gradient-to-r from-teal-500 to-teal-800 hover:from-teal-600 hover:to-teal-800 text-white font-medium rounded-lg transition-all duration-200 transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-teal-500 focus:ring-offset-2 focus:ring-offset-gray-900 cursor-pointer"
      >
        View Details
      </Link>
    </motion.div>
  );
}
