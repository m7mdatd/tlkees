"use client";
import React, { createContext, useContext, useEffect, useState } from "react";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
  onAuthStateChanged,
  updateProfile,
} from "firebase/auth";
import { doc, getDoc, setDoc, serverTimestamp } from "firebase/firestore";
import { auth, db, isFirebaseConfigured } from "./firebase";

const AuthContext = createContext(null);

const NOT_CONFIGURED =
  "Firebase غير مهيّأ. أضف متغيّرات NEXT_PUBLIC_FIREBASE_* في ملف .env.local أو في إعدادات Vercel.";

export function AuthProvider({ children }) {
  const [user, setUser] = useState(null);     // Firebase user
  const [profile, setProfile] = useState(null); // Firestore users/{uid} doc
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (!isFirebaseConfigured) {
      setLoading(false);
      return;
    }
    const unsub = onAuthStateChanged(auth, async (fbUser) => {
      setUser(fbUser);
      if (fbUser) {
        try {
          const snap = await getDoc(doc(db, "users", fbUser.uid));
          setProfile(snap.exists() ? { id: fbUser.uid, ...snap.data() } : null);
        } catch {
          setProfile(null);
        }
      } else {
        setProfile(null);
      }
      setLoading(false);
    });
    return () => unsub();
  }, []);

  async function register({ name, email, password }) {
    if (!isFirebaseConfigured) throw new Error(NOT_CONFIGURED);
    const cred = await createUserWithEmailAndPassword(auth, email, password);
    if (name) await updateProfile(cred.user, { displayName: name });
    const profileDoc = {
      name: name || "",
      email,
      role: "member",
      plan: "free",
      summaryCount: 0,
      createdAt: serverTimestamp(),
    };
    await setDoc(doc(db, "users", cred.user.uid), profileDoc);
    setProfile({ id: cred.user.uid, ...profileDoc });
    return cred.user;
  }

  async function login({ email, password }) {
    if (!isFirebaseConfigured) throw new Error(NOT_CONFIGURED);
    const cred = await signInWithEmailAndPassword(auth, email, password);
    return cred.user;
  }

  async function logout() {
    if (!isFirebaseConfigured) return;
    await signOut(auth);
  }

  const value = { user, profile, loading, register, login, logout, isFirebaseConfigured };
  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}

export function useAuth() {
  const ctx = useContext(AuthContext);
  if (!ctx) throw new Error("useAuth must be used within AuthProvider");
  return ctx;
}
