import Headers from "@/components/header";
import Navbar from "@/components/navbar";

export default function Home() {
  return (
    <main className="flex h-screen bg-black text-white flex-col items-center justify-between p-10 px-24">
      <Navbar/>
      <Headers/>
    </main>
  );
}
