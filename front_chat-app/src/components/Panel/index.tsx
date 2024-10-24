// Props
interface PanelProps {
  children: React.ReactNode;
}

function Panel({ children }: PanelProps) {
  return (
    <div className="p-4 w-5/6 bg-gray-200">
      <div className="pt-2">{children}</div>
    </div>
  );
}

// Exports
export default Panel;
