"use client";
import React from "react";
import RequireAuth from "@/components/RequireAuth";
import AdminDashboard from "@/components/screens/AdminDashboard";

export default function AdminPage() {
  return (
    <RequireAuth requireAdmin>
      <AdminDashboard />
    </RequireAuth>
  );
}
