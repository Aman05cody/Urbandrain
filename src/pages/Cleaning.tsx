import { Wrench, Power, Pause, Play } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useState } from "react";

const Cleaning = () => {
  const [isRunning, setIsRunning] = useState(false);

  return (
    <div className="space-y-6">
      <div className="flex items-center gap-3">
        <div className="p-2 rounded-lg bg-accent/10">
          <Wrench className="w-6 h-6 text-accent" />
        </div>
        <div>
          <h1 className="text-3xl font-bold tracking-tight">Cleaning Control</h1>
          <p className="text-muted-foreground">Automated drainage cleaning system</p>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div className="glass-card rounded-xl p-6">
          <h3 className="text-lg font-semibold mb-6">Cleaning Status</h3>
          
          <div className="space-y-4">
            <div className="flex items-center justify-between p-4 rounded-lg bg-muted/20">
              <span className="text-sm font-medium">Pump Status</span>
              <div className="flex items-center gap-2">
                <div className={`w-2 h-2 rounded-full ${isRunning ? 'bg-success status-pulse' : 'bg-muted-foreground'}`} />
                <span className="text-sm text-muted-foreground">{isRunning ? 'Active' : 'Idle'}</span>
              </div>
            </div>

            <div className="flex items-center justify-between p-4 rounded-lg bg-muted/20">
              <span className="text-sm font-medium">Hose Pressure</span>
              <span className="text-sm text-muted-foreground">2.5 bar</span>
            </div>

            <div className="flex items-center justify-between p-4 rounded-lg bg-muted/20">
              <span className="text-sm font-medium">Water Flow</span>
              <span className="text-sm text-muted-foreground">45 L/min</span>
            </div>
          </div>
        </div>

        <div className="glass-card rounded-xl p-6">
          <h3 className="text-lg font-semibold mb-6">Manual Control</h3>
          
          <div className="space-y-4">
            <Button
              className="w-full h-16 text-lg"
              variant={isRunning ? "destructive" : "default"}
              onClick={() => setIsRunning(!isRunning)}
            >
              {isRunning ? (
                <>
                  <Pause className="w-5 h-5 mr-2" />
                  Stop Cleaning
                </>
              ) : (
                <>
                  <Play className="w-5 h-5 mr-2" />
                  Start Cleaning
                </>
              )}
            </Button>

            <Button className="w-full h-12" variant="outline">
              <Power className="w-4 h-4 mr-2" />
              Emergency Stop
            </Button>
          </div>

          <div className="mt-6 p-4 rounded-lg bg-warning/10 border border-warning/20">
            <p className="text-sm text-warning-foreground">
              ⚠️ Ensure manhole area is clear before starting cleaning operations
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cleaning;
