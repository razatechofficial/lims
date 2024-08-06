import Footer from "@/components/Footer/Footer";
import NavBar from "@/components/NavBar/NavBar";
import Sidebar from "@/components/Sidebar/Sidebar";
import SpeedDialBtn from "@/components/SpeedDial/SpeedDialBtn";
import BasicModal from "@/components/ui/BasicModal";
import ContextProviders from "@/context/ContextProviders";
import { SidebarProvider } from "@/context/SidebarContext";

// import { Suspense } from "react";
// import Loading from "./loading";

export default function DefaultLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <ContextProviders>
        <div className="flex h-screen dark:bg-slate-900 dark:text-gray-200 duration-300">
          <Sidebar />
          <div className="flex-1 overflow-auto transition-all duration-300">
            <NavBar />
            <main className="top-50 p-4 pb-24 overflow-auto lg:ml-0 transition-all duration-300 lg:pl-4 pl-20 lg:pr-4">
              {/* <Suspense fallback={<Loading/>}> */}
              {children}
              {/* </Suspense> */}
            </main>
            <SpeedDialBtn />
            <Footer />
            <BasicModal/>
          </div>
        </div>
      </ContextProviders>
    </>
  );
}
