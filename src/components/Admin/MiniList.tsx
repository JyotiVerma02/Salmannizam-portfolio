type MiniListProps = {
  items: string[];
  tone: string;
};

export default function MiniList({ items, tone }: MiniListProps) {
  return (
    <div className="admin-mini-list">
      {items.map((item, index) => (
        <article className={`admin-mini-card tone-${tone}`} key={item}>
          <span>{String(index + 1).padStart(2, "0")}</span>
          <strong>{item}</strong>
          <p>Manage, update, and keep this portfolio area production-ready.</p>
        </article>
      ))}
    </div>
  );
}