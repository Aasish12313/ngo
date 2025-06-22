'use client';
import AdminSidebar from '../../components/AdminSidebar';
import AdminFooter from '../../components/AdminFooter';

export default function AdminLayout({ children }) {
  return (
    <div className="flex h-screen overflow-hidden font-sans">
      {/* 🧭 Sidebar (Fixed Left) */}
      <div className="w-[240px] fixed inset-y-0 left-0 z-30 bg-white shadow-xl border-r border-gray-200">
        <AdminSidebar />
      </div>

      {/* 📄 Main Content */}
      <div className="flex flex-col flex-1 ml-[240px] h-screen overflow-y-auto bg-gradient-to-br from-gray-50 to-white transition-all duration-300 ease-in-out">
        <main className="flex-1 px-6 py-6">{children}</main>
        <AdminFooter />
      </div>
    </div>
  );
}
