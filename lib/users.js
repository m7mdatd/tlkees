"use client";
import { collection, getDocs, query, orderBy, limit as fbLimit } from "firebase/firestore";
import { db, isFirebaseConfigured } from "./firebase";

/* List all users — used by the admin console. Reading the whole collection
   requires Firestore rules that allow role == "admin" (see firestore.rules). */
export async function listUsers(max = 200) {
  if (!isFirebaseConfigured) return [];
  const q = query(collection(db, "users"), orderBy("createdAt", "desc"), fbLimit(max));
  const snap = await getDocs(q);
  return snap.docs.map((d) => ({ id: d.id, ...d.data() }));
}
