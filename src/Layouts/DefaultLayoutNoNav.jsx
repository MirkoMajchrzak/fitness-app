export default function DefaultLayoutNoNav({ className, children }) {
  return (
    <div className={`bg-bgdark text-white px-4 ${className}`}>
      {children}
    </div>
  );
}
