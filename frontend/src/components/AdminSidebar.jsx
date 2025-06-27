'use client';

import { usePathname } from 'next/navigation';
import Link from 'next/link';
import {
  LayoutDashboard, Heart, Folder, Users, Calendar,
  Target, Image, Settings, LogOut, Inbox, MessageSquare, FileInput,
  Menu, X
} from 'lucide-react';

const navItems = [
  { name: 'Dashboard', href: '/admin', icon: <LayoutDashboard size={18} /> },
  { name: 'Applications', href: '/admin/applications', icon: <Heart size={18} /> },
  { name: 'Projects', href: '/admin/dnoation', icon: <Folder size={18} /> },
  { name: 'Events', href: '/admin/events', icon: <Calendar size={18} /> },
  { name: 'Impact', href: '/admin/impact', icon: <Target size={18} /> },
  { name: 'Gallery', href: '/admin/gallery', icon: <Image size={18} /> },
  { name: 'Messages', href: '/admin/contactMessage', icon: <MessageSquare size={18} /> },
  { name: 'Comments', href: '/admin/comments', icon: <FileInput size={18} /> },
  { name: 'Donations', href: '/admin/dnoation', icon: <Inbox size={18} /> },
  { name: 'Settings', href: '/admin/settings', icon: <Settings size={18} /> },
];

export default function AdminSidebar({ isOpen, toggleSidebar }) {
  const pathname = usePathname();

  return (
    <>
      {/* Mobile Hamburger Icon */}
      <div className="md:hidden fixed top-4 left-4 z-50 bg-white p-2 rounded-full shadow-md text-black">
        <button onClick={toggleSidebar} className="text-black">
          <Menu size={24} />
        </button>
      </div>

      {/* Sidebar */}
      <aside
        className={`
          fixed top-0 left-0 z-40 h-full w-[240px] bg-gradient-to-b from-white to-gray-50 border-r shadow-md flex flex-col justify-between
          transition-transform duration-300 ease-in-out
          ${isOpen ? 'translate-x-0' : '-translate-x-full'}
          md:translate-x-0 md:static
        `}
      >
        <div className="flex flex-col h-full">
          {/* Logo + Close Icon */}
          <div className="flex items-center px-6 py-5 gap-4 border-b shadow-sm relative">
            <img
              src="/images/vishoka_logo.png"
              alt="Logo"
              className="w-10 h-10 object-contain"
            />
            <div>
              <h1 className="text-lg font-bold text-gray-800 leading-tight">
                Visoka Welfare<br />Foundation
              </h1>
              <p className="text-sm text-gray-500">Admin Portal</p>
            </div>
            {/* Close Icon (mobile only) */}
            <button
              className="absolute right-4 top-1 md:hidden text-gray-600"
              onClick={toggleSidebar}
            >
              <X size={20} />
            </button>
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
                      ${isActive
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

          {/* Footer */}
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
    </>
  );
}