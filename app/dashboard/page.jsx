"use client";
import React, { useState } from "react";
import RequireAuth from "@/components/RequireAuth";
import AppShell from "@/components/screens/AppShell";
import MemberDashboard from "@/components/screens/MemberDashboard";
import EditorScreen from "@/components/screens/EditorScreen";
import LibraryScreen from "@/components/screens/LibraryScreen";
import { Card } from "@/components/ds";
import { Icon } from "@/components/Icon";

export default function DashboardPage() {
  const [tab, setTab] = useState("home");
  return (
    <RequireAuth>
      <AppShell active={tab} onNavigate={setTab}>
        {tab === "home" && <MemberDashboard onNavigate={setTab} />}
        {tab === "editor" && <EditorScreen />}
        {tab === "library" && <LibraryScreen onNavigate={setTab} />}
        {(tab === "templates" || tab === "settings") && (
          <Placeholder title={tab === "templates" ? "القوالب" : "الإعدادات"} />
        )}
      </AppShell>
    </RequireAuth>
  );
}

function Placeholder({ title }) {
  return (
    <div style={{ padding: "40px", display: "flex", justifyContent: "center" }}>
      <Card elevation="sm" style={{ maxWidth: "440px", textAlign: "center", padding: "40px" }}>
        <div style={{ width: "52px", height: "52px", borderRadius: "var(--radius-lg)", margin: "0 auto 16px",
          background: "var(--surface-brand-subtle)", display: "flex", alignItems: "center", justifyContent: "center" }}>
          <Icon name="layout-template" size={24} color="var(--navy-600)" />
        </div>
        <h2 style={{ fontSize: "var(--fs-h4)", color: "var(--text-strong)", marginBottom: "8px" }}>{title}</h2>
        <p style={{ fontSize: "var(--fs-sm)", color: "var(--text-muted)" }}>هذه الشاشة قيد التطوير — قريباً.</p>
      </Card>
    </div>
  );
}
