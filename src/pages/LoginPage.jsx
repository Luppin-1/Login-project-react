import { useState } from "react";
import InputField from "../components/InputField";
import ErrorMessage from "../components/ErrorMessage";
import { loginRequest } from "../api/auth.jsx";

export default function LoginPage({ onLogin }) {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError]       = useState("");
  const [loading, setLoading]   = useState(false);

  async function handleLogin() {
    if (!username || !password) {
      setError("لطفاً نام کاربری و رمز عبور را وارد کنید.");
      return;
    }

    setLoading(true);
    setError("");

    try {
      const data = await loginRequest(username, password);
      onLogin(data.username);
    } catch (err) {
      setError(err.message || "خطا در اتصال به سرور. دوباره تلاش کنید.");
    } finally {
      setLoading(false);
    }
  }

  function handleKey(e) {
    if (e.key === "Enter") handleLogin();
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-linear-to-br from-slate-900 via-blue-950 to-slate-900 px-4">
      <div className="w-full max-w-sm bg-white/5 border border-white/10 rounded-2xl p-10 shadow-2xl">

        <h1 className="text-2xl font-bold text-white mb-1 text-center">خوش آمدید</h1>
        <p className="text-sm text-white/40 mb-8 text-center">برای ادامه وارد حساب خود شوید</p>

        <ErrorMessage message={error} />

        <InputField
          label="نام کاربری"
          type="text"
          placeholder="username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          onKeyDown={handleKey}
        />

        <InputField
          label="رمز عبور"
          type="password"
          placeholder="••••••••"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          onKeyDown={handleKey}
        />

        <button
          onClick={handleLogin}
          disabled={loading}
          className="w-full py-3 rounded-xl bg-linear-to-r from-blue-500 to-indigo-600 text-white font-bold text-sm hover:opacity-90 active:scale-95 transition-all disabled:opacity-60"
        >
          {loading ? "در حال بررسی..." : "ورود به سیستم"}
        </button>

      </div>
    </div>
  );
}
