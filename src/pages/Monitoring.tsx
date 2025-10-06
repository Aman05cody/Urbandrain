import { Activity } from "lucide-react";

const Monitoring = () => {
  return (
    <div className="space-y-6">
      <div className="flex items-center gap-3">
        <div className="p-2 rounded-lg bg-primary/10">
          <Activity className="w-6 h-6 text-primary" />
        </div>
        <div>
          <h1 className="text-3xl font-bold tracking-tight">Live Monitoring</h1>
          <p className="text-muted-foreground">Advanced real-time sensor analytics</p>
        </div>
      </div>

      <div className="glass-card rounded-xl p-8 text-center">
        <Activity className="w-16 h-16 text-muted-foreground mx-auto mb-4" />
        <h3 className="text-xl font-semibold mb-2">Advanced Monitoring View</h3>
        <p className="text-muted-foreground">
          Detailed sensor analytics and historical data visualization coming soon
        </p>
      </div>
    </div>
  );
};

export default Monitoring;
