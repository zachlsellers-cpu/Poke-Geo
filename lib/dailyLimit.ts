const STORAGE_KEY = "pokegeo_last_played";

function todayString(): string {
  return new Date().toISOString().slice(0, 10); // "YYYY-MM-DD"
}

export function hasPlayedToday(): boolean {
  if (typeof window === "undefined") return false;
  return localStorage.getItem(STORAGE_KEY) === todayString();
}

export function markPlayedToday(): void {
  if (typeof window === "undefined") return;
  localStorage.setItem(STORAGE_KEY, todayString());
}

export function timeUntilReset(): string {
  const now = new Date();
  const tomorrow = new Date(now);
  tomorrow.setDate(tomorrow.getDate() + 1);
  tomorrow.setHours(0, 0, 0, 0);
  const ms = tomorrow.getTime() - now.getTime();
  const h = Math.floor(ms / 3600000);
  const m = Math.floor((ms % 3600000) / 60000);
  return `${h}h ${m}m`;
}
