import type { ReactNode } from "react";

type AdminSectionProps = {
  id: string;
  eyebrow: string;
  title: string;
  description: string;
  children: ReactNode;
};

export default function AdminSection({ id, eyebrow, title, description, children }: AdminSectionProps) {
  return (
    <div id={id} className="admin-content-wrapper">
      <div className="admin-page-header">
        <div className="admin-page-header-text">
          <div>
            <span style={{ fontSize: 11, color: '#94a3b8', textTransform: 'uppercase', letterSpacing: '0.05em', fontWeight: 600 }}>{eyebrow}</span>
            <h1>{title}</h1>
            <p>{description}</p>
          </div>
        </div>
      </div>
      {children}
    </div>
  );
}