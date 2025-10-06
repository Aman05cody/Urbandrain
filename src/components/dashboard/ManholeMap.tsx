import { MapPin } from "lucide-react";
import { cn } from "@/lib/utils";

interface Manhole {
  id: string;
  name: string;
  status: "normal" | "warning" | "critical";
  position: { x: number; y: number };
}

const manholes: Manhole[] = [
  { id: "M001", name: "Main Street 1", status: "normal", position: { x: 20, y: 30 } },
  { id: "M002", name: "Main Street 2", status: "warning", position: { x: 45, y: 25 } },
  { id: "M003", name: "Park Avenue", status: "normal", position: { x: 70, y: 40 } },
  { id: "M004", name: "Industrial Zone", status: "critical", position: { x: 35, y: 65 } },
  { id: "M005", name: "Residential 1", status: "normal", position: { x: 60, y: 70 } },
];

const ManholeMap = () => {
  const statusStyles = {
    normal: "bg-success text-success-foreground",
    warning: "bg-warning text-warning-foreground",
    critical: "bg-destructive text-destructive-foreground animate-pulse",
  };

  return (
    <div className="chart-container">
      <div className="flex items-center justify-between mb-6">
        <div className="flex items-center gap-3">
          <div className="p-2 rounded-lg bg-accent/10">
            <MapPin className="w-5 h-5 text-accent" />
          </div>
          <div>
            <h3 className="font-semibold text-lg">Manhole Locations</h3>
            <p className="text-sm text-muted-foreground">System status overview</p>
          </div>
        </div>
        <div className="flex items-center gap-4 text-xs">
          <div className="flex items-center gap-2">
            <div className="w-3 h-3 rounded-full bg-success" />
            <span className="text-muted-foreground">Normal</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-3 h-3 rounded-full bg-warning" />
            <span className="text-muted-foreground">Warning</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-3 h-3 rounded-full bg-destructive" />
            <span className="text-muted-foreground">Critical</span>
          </div>
        </div>
      </div>

      <div className="relative w-full h-[300px] bg-muted/20 rounded-lg overflow-hidden">
        {/* Grid pattern */}
        <div className="absolute inset-0 opacity-10">
          <div className="w-full h-full" style={{
            backgroundImage: 'linear-gradient(hsl(var(--border)) 1px, transparent 1px), linear-gradient(90deg, hsl(var(--border)) 1px, transparent 1px)',
            backgroundSize: '20px 20px'
          }} />
        </div>

        {/* Manholes */}
        {manholes.map((manhole) => (
          <div
            key={manhole.id}
            className="absolute group cursor-pointer"
            style={{
              left: `${manhole.position.x}%`,
              top: `${manhole.position.y}%`,
              transform: 'translate(-50%, -50%)',
            }}
          >
            <div className={cn(
              "w-8 h-8 rounded-full flex items-center justify-center transition-all duration-300 hover:scale-125",
              statusStyles[manhole.status]
            )}>
              <MapPin className="w-4 h-4" />
            </div>
            
            {/* Tooltip */}
            <div className="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none">
              <div className="glass-card px-3 py-2 whitespace-nowrap text-sm">
                <div className="font-semibold">{manhole.id}</div>
                <div className="text-muted-foreground text-xs">{manhole.name}</div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ManholeMap;
