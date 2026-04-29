import { Routes, Route, Link } from "react-router-dom";

function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white grid place-items-center p-8">
      <div className="text-center max-w-2xl">
        <h1 className="text-5xl md:text-7xl font-extrabold mb-6 bg-gradient-to-r from-cyan-400 to-fuchsia-400 bg-clip-text text-transparent">
          Webly
        </h1>
        <p className="text-xl text-slate-300 mb-8">
          ابدأ المحادثة لبناء تطبيقك Full-Stack
        </p>
      </div>
    </div>
  );
}

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
    </Routes>
  );
}
