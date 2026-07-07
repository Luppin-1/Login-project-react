export default function InputField({ label, type, placeholder, value, onChange, onKeyDown }) {
  return (
    <div className="mb-5">
      <label className="block text-xs text-right font-semibold text-white/60 mb-2 mr-1">
        {label}
      </label>
      <input
        type={type}
        dir="ltr"
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        onKeyDown={onKeyDown}
        className="w-full px-4 py-3 rounded-xl text-right bg-white/8 border border-white/15 text-white placeholder-white/25 text-sm outline-none focus:border-blue-400 transition-all"
      />
    </div>
  );
}
