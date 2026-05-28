// "⚡ Lightning Accepted" + Link aceptabitcoin.org
export function TrustBadge() {
  return (
    <section id="bitcoin" className="py-12 px-4 flex justify-center">
      <div className="flex items-center space-x-3 px-6 py-3 bg-terracota/20 border border-terracota/50 rounded-full">
        <span>⚡</span>
        <a 
          href="https://aceptabitcoin.org" 
          target="_blank" 
          rel="noopener noreferrer" 
          className="font-space-grotesk text-terracota hover:underline"
        >
          Lightning Accepted
        </a>
      </div>
    </section>
  );
}