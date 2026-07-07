export default function DashboardPage({ username, onLogout }) {
  return (
    <div className="min-h-screen flex items-center justify-center bg-linear-to-br from-slate-900 via-blue-950 to-slate-900 px-4">
      <div className="w-full max-w-sm bg-white/5 border border-white/10 rounded-2xl p-10 shadow-2xl text-center">

        <h2 className="text-2xl font-bold text-white mb-2">سلام، {username}!</h2>
        <p className="text-white/40 text-sm mb-8">ورود موفقیت‌آمیز بود. به داشبورد خوش آمدید.</p>

        <button
          onClick={onLogout}
          className="px-8 py-2.5 rounded-xl border border-white/15 text-white/50 text-sm hover:text-white/80 hover:border-white/30 transition-all">
          خروج از حساب
        </button>

      </div>
    </div>
  );
}
