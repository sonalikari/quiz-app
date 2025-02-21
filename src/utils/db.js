import { openDB } from "idb";

export async function initDB() {
  return openDB("QuizDB", 1, {
    upgrade(db) {
      if (!db.objectStoreNames.contains("attempts")) {
        db.createObjectStore("attempts", {
          keyPath: "id",
          autoIncrement: true,
        });
      }
    },
  });
}

export async function saveAttempt(attempt) {
  const db = await initDB();
  const tx = db.transaction("attempts", "readwrite");
  const store = tx.objectStore("attempts");
  await store.add(attempt);
  await tx.done;
}

export async function getAttempts() {
  const db = await initDB();
  return await db.getAll("attempts");
}
