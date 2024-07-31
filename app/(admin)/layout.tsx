import Footer from "@/components/Footer/Footer";
import NavBar from "@/components/NavBar/NavBar";
import Sidebar from "@/components/Sidebar/Sidebar";
import SpeedDialBtn from "@/components/SpeedDial/SpeedDialBtn";

export default function DefaultLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <div className="flex h-screen dark:bg-slate-900 dark:text-gray-200 duration-300">
        <Sidebar />
        <div className="flex-1 overflow-auto transition-all duration-300">
          <NavBar />
          <main className="p-4 overflow-auto lg:ml-0 transition-all duration-300 lg:pl-4 pl-20 lg:pr-4">
            {children}
          </main>
          <SpeedDialBtn />
          <Footer />
        </div>
      </div>
    </>
  );
}
