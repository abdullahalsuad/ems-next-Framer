"use client";

import { fetchUserById } from "@/lib/api";
import {
  ArrowLeft,
  Building,
  ExternalLink,
  Globe,
  Mail,
  MapPin,
  Phone,
  UserPen,
} from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";
import LoadingComponent from "../LoadingComponent";

interface Props {
  userId: number;
}

const UserProfile = ({ userId }: Props) => {
  const [user, setUser] = useState<any>(null);
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loadUser = async () => {
      try {
        const res = await fetchUserById(userId);
        if (res.error) throw new Error(res.error);
        setUser(res.data);
      } catch (err: any) {
        setError(err.message || "Failed to load user");
      } finally {
        setLoading(false);
      }
    };
    loadUser();
  }, [userId]);

  // loading
  if (loading) {
    return <LoadingComponent />;
  }

  // error handling
  if (error) {
    return (
      <motion.p
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-red-500 text-center text-lg"
      >
        Error: {error}
      </motion.p>
    );
  }

  return (
    <AnimatePresence mode="wait">
      <motion.div
        key="profile"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -30 }}
        transition={{ duration: 0.6 }}
        className="w-8/12 mx-auto p-6 space-y-6"
      >
        {/* go back */}
        <motion.button
          whileTap={{ scale: 0.95 }}
          whileHover={{ x: -8 }}
          onClick={() => window.history.back()}
          className="flex items-center space-x-2 px-4 py-2 text-teal-400 hover:text-teal-300 transition-colors duration-300 font-medium text-sm cursor-pointer"
        >
          <motion.div
            whileHover={{ rotate: -180 }}
            transition={{ duration: 0.3 }}
          >
            <ArrowLeft className="w-5 h-5" />
          </motion.div>
          <span>Go Back</span>
        </motion.button>
        {/* Hero Section */}
        <motion.div
          initial={{ scale: 0.8, opacity: 0, y: -30 }}
          animate={{ scale: 1, opacity: 1, y: 0 }}
          transition={{ type: "spring", stiffness: 80, damping: 12 }}
          className="bg-gradient-to-r from-teal-500 to-indigo-500 rounded-xl p-6 text-center text-white shadow-lg"
        >
          <div className="flex flex-col items-center">
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ delay: 0.3, type: "spring", stiffness: 200 }}
              className="w-20 h-20 rounded-full bg-teal-900 flex items-center justify-center text-3xl mb-4"
            >
              <UserPen />
            </motion.div>
            <motion.h2
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.4 }}
              className="text-2xl font-bold"
            >
              {user.name}
            </motion.h2>
            <motion.p
              initial={{ y: 10, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.5 }}
              className="text-sm"
            >
              @{user.username}
            </motion.p>
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ delay: 0.6 }}
              className="mt-2 bg-teal-900/80 rounded-full px-3 py-1 text-sm inline-block"
            >
              {user.company.name}
            </motion.div>
          </div>
        </motion.div>

        {/* Info Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mt-6">
          {/* Contact Info Card */}
          <motion.div
            initial={{ x: -50, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ delay: 0.4 }}
            className="bg-gray-900 p-5 rounded-xl border border-teal-500/30 shadow-lg"
          >
            <div className="flex items-center space-x-2 mb-4">
              <Mail className="w-5 h-5 text-teal-400" />
              <h3 className="font-bold text-white">Contact Information</h3>
            </div>

            <div className="space-y-4">
              {/* Email */}
              <motion.div
                initial={{ x: -20, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ delay: 0.5 }}
              >
                <div className="flex items-start space-x-2">
                  <Mail className="w-4 h-4 text-teal-400 mt-1" />
                  <div>
                    <p className="text-sm text-gray-400">Email</p>
                    <a
                      href={`mailto:${user.email}`}
                      className="text-teal-400 hover:text-teal-300 transition-colors"
                    >
                      {user.email}
                    </a>
                  </div>
                </div>
              </motion.div>

              {/* Phone */}
              <motion.div
                initial={{ x: -20, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ delay: 0.6 }}
              >
                <div className="flex items-start space-x-2">
                  <Phone className="w-4 h-4 text-teal-400 mt-1" />
                  <div>
                    <p className="text-sm text-gray-400">Phone</p>
                    <a
                      href={`tel:${user.phone}`}
                      className="text-teal-400 hover:text-teal-300 transition-colors"
                    >
                      {user.phone}
                    </a>
                  </div>
                </div>
              </motion.div>

              {/* Website */}
              <motion.div
                initial={{ x: -20, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ delay: 0.7 }}
              >
                <div className="flex items-start space-x-2">
                  <Globe className="w-4 h-4 text-teal-400 mt-1" />
                  <div>
                    <p className="text-sm text-gray-400">Website</p>
                    <a
                      href={`https://${user.website}`}
                      target="_blank"
                      rel="noreferrer"
                      className="text-teal-400 hover:text-teal-300 transition-colors flex items-center"
                    >
                      {user.website}
                      <ExternalLink className="w-3 h-3 ml-1" />
                    </a>
                  </div>
                </div>
              </motion.div>
            </div>
          </motion.div>

          {/* Address Card */}
          <motion.div
            initial={{ x: 50, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ delay: 0.5 }}
            className="bg-gray-900 p-5 rounded-xl border border-teal-500/30 shadow-lg"
          >
            <div className="flex items-center space-x-2 mb-4">
              <MapPin className="w-5 h-5 text-teal-400" />
              <h3 className="font-bold text-white">Address</h3>
            </div>

            <div className="space-y-4">
              {/* Street Address */}
              <motion.div
                initial={{ x: 20, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ delay: 0.6 }}
              >
                <div className="border-b border-gray-700 pb-2">
                  <p className="text-sm text-gray-400">Street Address</p>
                  <p className="text-gray-300">
                    {user.address.street}, {user.address.suite}
                  </p>
                </div>
              </motion.div>

              {/* City & Zip */}
              <motion.div
                initial={{ x: 20, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ delay: 0.7 }}
              >
                <div className="border-b border-gray-700 pb-2">
                  <p className="text-sm text-gray-400">City & Zip Code</p>
                  <p className="text-gray-300">
                    {user.address.city}, {user.address.zipcode}
                  </p>
                </div>
              </motion.div>

              {/* Coordinates */}
              <motion.div
                initial={{ x: 20, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ delay: 0.8 }}
              >
                <div>
                  <p className="text-sm text-gray-400">Coordinates</p>
                  <p className="text-gray-300">
                    Lat: {user.address.geo.lat}, Lng: {user.address.geo.lng}
                  </p>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>

        {/* Company Info */}
        <motion.div
          initial={{ y: 30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.8, type: "spring", stiffness: 60 }}
          className="bg-gray-900 p-6 rounded-xl border border-teal-500/30 shadow-lg"
        >
          <div className="flex items-center space-x-2 mb-4">
            <Building className="w-5 h-5 text-teal-400" />
            <h3 className="font-bold text-white">Company Information</h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-4">
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.9 }}
            >
              <p className="text-sm text-gray-400">Company Name</p>
              <p className="text-teal-400 font-medium">{user.company.name}</p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.0 }}
            >
              <p className="text-sm text-gray-400">Business Focus</p>
              <p className="text-gray-300">{user.company.bs}</p>
            </motion.div>
          </div>

          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ delay: 1.1, type: "spring", stiffness: 100 }}
            className="bg-gray-800 border border-teal-500/30 rounded-lg p-4"
          >
            <p className="text-sm text-gray-400 mb-1">Company Motto</p>
            <p className="text-teal-400 italic">"{user.company.catchPhrase}"</p>
          </motion.div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
};

export default UserProfile;
