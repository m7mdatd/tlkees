"use client";
import React, { useEffect } from "react";
import { useRouter } from "next/navigation";
import { useAuth } from "@/lib/auth";
import { Logo } from "@/components/ds";

/* Client-side route guard. Redirects unauthenticated users to /login,
   and non-admins away from admin-only pages. */
export default function RequireAuth({ children, requireAdmin = false }) {
  const router = useRouter();
  const { user, profile, loading } = useAuth();

  useEffect(() => {
    if (loading) return;
    if (!user) { router.replace("/login"); return; }
    if (requireAdmin && profile && profile.role !== "admin") { router.replace("/dashboard"); }
  }, [loading, user, profile, requireAdmin, router]);

  if (loading || !user || (requireAdmin && (!profile || profile.role !== "admin"))) {
    return <Splash />;
  }
  return children;
}

function Splash() {
  return (
    <div style={{ minHeight: "100vh", display: "flex", flexDirection: "column", alignItems: "center",
      justifyContent: "center", gap: "16px", background: "var(--surface-page)" }}>
      <Logo variant="full" size={26} />
      <div style={{ width: "28px", height: "28px", border: "3px solid var(--gray-200)",
        borderTopColor: "var(--brand-accent)", borderRadius: "50%", animation: "tlkhs-spin 0.7s linear infinite" }}>
        <style>{`@keyframes tlkhs-spin{to{transform:rotate(360deg)}}`}</style>
      </div>
    </div>
  );
}
