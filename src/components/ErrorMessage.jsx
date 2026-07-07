export default function ErrorMessage({ message }) {
  if (!message) return null;

  return (
    <div className="bg-red-500/10 border border-red-500/30 rounded-lg px-4 py-3 text-red-300 text-sm mb-5">
      ⚠️ {message}
    </div>
  );
}
