'use client';
import { usePathname } from 'next/navigation';
import Link from 'next/link';
import {
  LayoutDashboard, Heart, Folder, Users, Calendar,
  Target, Image, FileText, UserRound, Settings, LogOut,
  Inbox, MessageSquare, FileInput
} from 'lucide-react';

const navItems = [
  { name: 'Dashboard', href: '/admin', icon: <LayoutDashboard size={18} /> },
  { name: 'Applications', href: '/admin/applications', icon: <Heart size={18} /> },
  { name: 'Projects', href: '/admin/dnoation', icon: <Folder size={18} /> },
  { name: 'Volunteers', href: '/admin/volunteers', icon: <Users size={18} /> },
  { name: 'Events', href: '/admin/events', icon: <Calendar size={18} /> },
  { name: 'Impact', href: '/admin/impact', icon: <Target size={18} /> },
  { name: 'Gallery', href: '/admin/gallery', icon: <Image size={18} /> },
  { name: 'Reports', href: '/admin/reports', icon: <FileText size={18} /> },
  { name: 'Users', href: '/admin/users', icon: <UserRound size={18} /> },
  { name: 'Messages', href: '/admin/contactMessage', icon: <MessageSquare size={18} /> },
  { name: 'Comments', href: '/admin/comment', icon: <FileInput size={18} /> },
  { name: 'Donations', href: '/admin/dnoation', icon: <Inbox size={18} /> },
  { name: 'Settings', href: '/admin/settings', icon: <Settings size={18} /> },
];

export default function AdminSidebar() {
  const pathname = usePathname();

  return (
    <aside className="w-[240px] h-screen bg-gradient-to-b from-white to-gray-50 border-r shadow-md flex flex-col justify-between fixed left-0 top-0 z-40">
      {/* Top: Logo and Navigation */}
      <div className="flex flex-col h-full">
        {/* Logo */}
        <div className="flex items-center px-6 py-5 gap-3 border-b shadow-sm">
          <div className="bg-gradient-to-r from-blue-500 to-indigo-500 p-2 rounded-xl shadow-lg">
            <Heart className="text-white" size={20} />
          </div>
          <div>
            <h1 className="text-lg font-bold text-gray-800">Hope Foundation</h1>
            <p className="text-xs text-gray-500">Admin Portal</p>
          </div>
        </div>

        {/* Navigation */}
        <div className="flex-1 overflow-auto px-4 pt-6">
          <p className="text-xs font-semibold text-gray-500 mb-3 uppercase tracking-wide">
            Main Navigation
          </p>
          <nav className="space-y-2">
            {navItems.map(({ name, href, icon }) => {
              const isActive = pathname === href;
              return (
                <Link
                  href={href}
                  key={name}
                  className={`group relative flex items-center px-4 py-2 rounded-lg text-sm font-medium gap-3 transition-all duration-300
                    ${
                      isActive
                        ? 'bg-blue-100 text-blue-700'
                        : 'text-gray-700 hover:bg-gray-100 hover:text-blue-600'
                    }`}
                >
                  {isActive && (
                    <span className="absolute left-0 h-full w-1 rounded-r-full bg-blue-600"></span>
                  )}
                  {icon}
                  <span className="group-hover:scale-105 transition-transform">{name}</span>
                </Link>
              );
            })}
          </nav>
        </div>

        {/* User Info + Logout */}
        <div className="px-4 py-5 border-t bg-white shadow-inner">
          <div className="mb-3">
            <p className="text-sm font-semibold text-gray-800">👤 Founder</p>
            <p className="text-xs text-gray-500 truncate">visokawelfarefoundation@gmail.com</p>
          </div>
          <button
            className="flex items-center w-full px-3 py-2 text-sm text-red-600 font-medium bg-red-50 hover:bg-red-100 rounded-lg gap-2 transition-all"
          >
            <LogOut size={16} />
            Sign Out
          </button>
        </div>
      </div>
    </aside>
  );
}
