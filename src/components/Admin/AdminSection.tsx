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
          <span className="admin-page-eyebrow">{eyebrow}</span>
          <h1>{title}</h1>
          <p>{description}</p>
        </div>
      </div>
      {children}
    </div>
  );
}