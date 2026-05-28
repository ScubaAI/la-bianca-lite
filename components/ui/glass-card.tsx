// Contenedor glassmorphism (Día/Noche)
export default function GlassCard({ children, ...props }: { children: React.ReactNode; [key: string]: any }) {
  return (
    <div className="bg-white/30 backdrop-blur-md border border-white/20 rounded-lg shadow-inner" {...props}>
      {children}
    </div>
  );
}