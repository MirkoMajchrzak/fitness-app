import Navbar from "../components/Navbar";

export default function DefaultLayout({ className, children }) {
  return (
    <div className={`bg-bgdark text-white px-6 ${className}`}>
      {children}
      <Navbar />
    </div>
  );
}
