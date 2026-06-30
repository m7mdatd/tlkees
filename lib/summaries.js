"use client";
import {
  collection, addDoc, getDocs, query, where, orderBy, limit as fbLimit,
  serverTimestamp, doc, updateDoc, increment,
} from "firebase/firestore";
import { db, isFirebaseConfigured } from "./firebase";

/* Firestore data layer for summaries (collection: "summaries"). */

export async function createSummary(uid, data) {
  if (!isFirebaseConfigured) throw new Error("Firebase غير مهيّأ.");
  const ref = await addDoc(collection(db, "summaries"), {
    userId: uid,
    title: data.title || "ملخّص بدون عنوان",
    type: data.type || "نص",
    sourceText: data.sourceText || "",
    summary: data.summary || "",
    points: data.points || [],
    length: data.length || "متوسط",
    style: data.style || "رسمي",
    wordCount: data.wordCount || 0,
    ratio: data.ratio || "—",
    status: data.status || "مكتمل",
    createdAt: serverTimestamp(),
  });
  // bump the user's running counter (best-effort)
  try {
    await updateDoc(doc(db, "users", uid), { summaryCount: increment(1) });
  } catch {
    /* ignore — counter is non-critical */
  }
  return ref.id;
}

export async function listSummaries(uid, max = 50) {
  if (!isFirebaseConfigured) return [];
  const q = query(
    collection(db, "summaries"),
    where("userId", "==", uid),
    orderBy("createdAt", "desc"),
    fbLimit(max),
  );
  const snap = await getDocs(q);
  return snap.docs.map((d) => ({ id: d.id, ...d.data() }));
}
