import { ReactNode } from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";
import NeonBackground from "@/components/NeonBackground";

interface LayoutProps {
  children: ReactNode;
}

const Layout = ({ children }: LayoutProps) => {
  return (
    <div className="relative bg-[#06070F] text-white overflow-x-hidden">
      {/* Background  */}
      <div className="pointer-events-none fixed inset-0 z-0">
        <NeonBackground />
      </div>

      {/* App layout */}
      <div className="relative z-10 flex min-h-screen flex-col">
        <Navbar />
        <main className="flex-1 pt-24">
          {children}
        </main>
        <Footer />
      </div>
    </div>
  );
};


export default Layout;
