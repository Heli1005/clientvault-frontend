import { useState } from "react";
import { Outlet } from "react-router-dom";
import { Sidebar } from "@/components/sidebar";
import { MobileMenu } from "@/components/mobile-menu";

function AppLayout() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <div className="relative flex h-screen overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-secondary/5 pointer-events-none" />
      <div className="absolute inset-0 opacity-20 pointer-events-none">
        <svg className="h-full w-full" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern
              id="main-grid"
              width="60"
              height="60"
              patternUnits="userSpaceOnUse"
            >
              <path
                d="M 60 0 L 0 0 0 60"
                fill="none"
                stroke="currentColor"
                strokeWidth="0.5"
                className="text-primary/10"
              />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#main-grid)" />
        </svg>
      </div>

      <MobileMenu
        isOpen={isMobileMenuOpen}
        onToggle={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
      >
        <Sidebar onNavigate={() => setIsMobileMenuOpen(false)} />
      </MobileMenu>

      <main className="relative z-10 flex-1 overflow-y-auto p-4 sm:p-6 lg:p-8">
        <div className="mx-auto max-w-7xl">
          <Outlet />
        </div>
      </main>
    </div>
  );
}

export default AppLayout;
