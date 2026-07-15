"use client";

import { usePathname } from "next/navigation";
import Link from "next/link";
import { ReactNode } from "react";

type NavItem = {
  label: string;
  href: string;
  icon: ReactNode;
};

type NavGroup = {
  heading: string;
  items: NavItem[];
};

type AdminSidebarNavProps = {
  groups: NavGroup[];
};

export default function AdminSidebarNav({ groups }: AdminSidebarNavProps) {
  const pathname = usePathname();

  return (
    <>
      {groups.map((group) => (
        <div className="admin-nav-group" key={group.heading}>
          <div className="admin-nav-heading">{group.heading}</div>
          <nav className="admin-sidebar-nav">
            {group.items.map((item) => {
              // Check if current path matches href
              // For Dashboard it should match exactly /admin/dashboard
              // For others like /admin/blogs, it should match /admin/blogs and /admin/blogs/new
              const isActive = item.href === '/admin/dashboard' 
                ? pathname === item.href 
                : pathname.startsWith(item.href);

              return (
                <Link 
                  key={item.label} 
                  href={item.href} 
                  className={isActive ? 'active' : ''}
                >
                  {item.icon}
                  {item.label}
                </Link>
              );
            })}
          </nav>
        </div>
      ))}
    </>
  );
}
