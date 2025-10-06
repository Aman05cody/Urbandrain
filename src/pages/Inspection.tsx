import { Shield, CheckCircle2, XCircle } from "lucide-react";
import { Button } from "@/components/ui/button";

const Inspection = () => {
  const safetyChecks = [
    { id: 1, name: "Oxygen Level", value: "20.8%", status: "pass", threshold: "> 19.5%" },
    { id: 2, name: "Carbon Monoxide", value: "0 ppm", status: "pass", threshold: "< 35 ppm" },
    { id: 3, name: "Hydrogen Sulfide", value: "2 ppm", status: "pass", threshold: "< 10 ppm" },
    { id: 4, name: "Temperature", value: "24°C", status: "pass", threshold: "< 40°C" },
    { id: 5, name: "Humidity", value: "65%", status: "pass", threshold: "< 90%" },
  ];

  const allPassed = safetyChecks.every(check => check.status === "pass");

  return (
    <div className="space-y-6">
      <div className="flex items-center gap-3">
        <div className="p-2 rounded-lg bg-success/10">
          <Shield className="w-6 h-6 text-success" />
        </div>
        <div>
          <h1 className="text-3xl font-bold tracking-tight">Safety Inspection</h1>
          <p className="text-muted-foreground">Pre-entry safety verification system</p>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="lg:col-span-2 space-y-4">
          {safetyChecks.map((check) => (
            <div key={check.id} className="glass-card rounded-xl p-6">
              <div className="flex items-center justify-between">
                <div className="space-y-1">
                  <h3 className="font-semibold">{check.name}</h3>
                  <p className="text-sm text-muted-foreground">Threshold: {check.threshold}</p>
                </div>
                <div className="flex items-center gap-4">
                  <span className="text-2xl font-bold">{check.value}</span>
                  {check.status === "pass" ? (
                    <CheckCircle2 className="w-6 h-6 text-success" />
                  ) : (
                    <XCircle className="w-6 h-6 text-destructive" />
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="glass-card rounded-xl p-6">
          <h3 className="text-lg font-semibold mb-6">Entry Permit</h3>
          
          <div className="space-y-6">
            <div className={`p-6 rounded-xl text-center ${
              allPassed ? 'bg-success/10 border border-success/20' : 'bg-destructive/10 border border-destructive/20'
            }`}>
              {allPassed ? (
                <CheckCircle2 className="w-12 h-12 text-success mx-auto mb-3" />
              ) : (
                <XCircle className="w-12 h-12 text-destructive mx-auto mb-3" />
              )}
              <h4 className="font-semibold text-lg mb-2">
                {allPassed ? "Safe to Enter" : "Entry Not Safe"}
              </h4>
              <p className="text-sm text-muted-foreground">
                {allPassed 
                  ? "All safety parameters within acceptable limits"
                  : "Safety parameters need attention"
                }
              </p>
            </div>

            <Button 
              className="w-full h-12" 
              disabled={!allPassed}
              variant={allPassed ? "default" : "destructive"}
            >
              {allPassed ? "Grant Entry Permit" : "Entry Denied"}
            </Button>

            <div className="p-4 rounded-lg bg-muted/20">
              <p className="text-xs text-muted-foreground text-center">
                Last inspection: 5 minutes ago
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Inspection;
