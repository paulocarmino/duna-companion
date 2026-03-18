import { Outlet } from "react-router-dom";
import { SidebarProvider } from "@/contexts/SidebarContext";
import { SlideOverProvider } from "@/contexts/SlideOverContext";
import { ReferenceProvider } from "@/contexts/ReferenceContext";
import { Sidebar } from "@/components/navigation/Sidebar";
import { CommandBar } from "@/components/navigation/CommandBar";
import { ReferenceFab } from "@/components/navigation/ReferenceFab";
import { SlideOverPanel } from "@/components/layout/SlideOverPanel";
import { ReferencePanel, ReferencePanelMobile } from "@/components/layout/ReferencePanel";
import { ScrollToTop } from "@/components/ui/ScrollToTop";
import { Footer } from "@/components/layout/Footer";

export function RootLayout() {
  return (
    <SidebarProvider>
      <SlideOverProvider>
        <ReferenceProvider>
          <ScrollToTop />

          {/* Atmospheric background */}
          <div className="fixed inset-0 -z-10 atmo-gradient" />

          {/* Sidebar (desktop: fixed, mobile: drawer) */}
          <Sidebar />

          {/* Main area with optional reference panel */}
          <div className="min-h-screen lg:pl-72">
            <div className="xl:flex xl:gap-6 xl:pr-6">
              <div className="min-w-0 flex-1">
                <Outlet />
              </div>
              <ReferencePanel />
            </div>

            {/* Footer — full-width within the main area */}
            <Footer />
          </div>

          {/* Slide-over reference panel */}
          <SlideOverPanel />

          {/* Mobile: FAB + bottom sheet */}
          <ReferenceFab />
          <ReferencePanelMobile />

          {/* Mobile command bar */}
          <CommandBar />
        </ReferenceProvider>
      </SlideOverProvider>
    </SidebarProvider>
  );
}
