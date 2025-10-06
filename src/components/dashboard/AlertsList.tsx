import { AlertCircle, CheckCircle, AlertTriangle, Clock } from "lucide-react";
import { cn } from "@/lib/utils";

interface Alert {
  id: string;
  type: "critical" | "warning" | "info" | "resolved";
  manhole: string;
  message: string;
  timestamp: string;
}

const alerts: Alert[] = [
  {
    id: "1",
    type: "warning",
    manhole: "M002",
    message: "Gas levels approaching threshold - monitoring required",
    timestamp: "2 mins ago",
  },
  {
    id: "2",
    type: "critical",
    manhole: "M004",
    message: "Flow rate anomaly detected - immediate attention required",
    timestamp: "15 mins ago",
  },
  {
    id: "3",
    type: "resolved",
    manhole: "M001",
    message: "Cleaning cycle completed successfully",
    timestamp: "1 hour ago",
  },
  {
    id: "4",
    type: "info",
    manhole: "M003",
    message: "Scheduled maintenance reminder",
    timestamp: "2 hours ago",
  },
];

const AlertsList = () => {
  const getAlertIcon = (type: Alert["type"]) => {
    switch (type) {
      case "critical":
        return <AlertCircle className="w-5 h-5 text-destructive" />;
      case "warning":
        return <AlertTriangle className="w-5 h-5 text-warning" />;
      case "resolved":
        return <CheckCircle className="w-5 h-5 text-success" />;
      default:
        return <Clock className="w-5 h-5 text-primary" />;
    }
  };

  const getAlertStyle = (type: Alert["type"]) => {
    switch (type) {
      case "critical":
        return "border-l-4 border-l-destructive bg-destructive/5";
      case "warning":
        return "border-l-4 border-l-warning bg-warning/5";
      case "resolved":
        return "border-l-4 border-l-success bg-success/5";
      default:
        return "border-l-4 border-l-primary bg-primary/5";
    }
  };

  return (
    <div className="glass-card rounded-xl p-6">
      <div className="flex items-center justify-between mb-6">
        <div>
          <h3 className="font-semibold text-lg">Recent Alerts</h3>
          <p className="text-sm text-muted-foreground">System notifications and events</p>
        </div>
        <button className="text-sm text-primary hover:underline">View all</button>
      </div>

      <div className="space-y-3">
        {alerts.map((alert) => (
          <div
            key={alert.id}
            className={cn(
              "p-4 rounded-lg transition-all duration-300 hover:shadow-lg",
              getAlertStyle(alert.type)
            )}
          >
            <div className="flex items-start gap-4">
              <div className="mt-0.5">{getAlertIcon(alert.type)}</div>
              <div className="flex-1 min-w-0">
                <div className="flex items-center justify-between gap-2 mb-1">
                  <span className="font-medium text-sm">{alert.manhole}</span>
                  <span className="text-xs text-muted-foreground whitespace-nowrap">
                    {alert.timestamp}
                  </span>
                </div>
                <p className="text-sm text-muted-foreground">{alert.message}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AlertsList;
