import { LucideIcon } from "lucide-react";
import { cn } from "@/lib/utils";

interface MetricCardProps {
  title: string;
  value: string;
  change: string;
  trend: "up" | "down" | "neutral";
  icon: LucideIcon;
  status: "normal" | "warning" | "alert";
}

const MetricCard = ({ title, value, change, trend, icon: Icon, status }: MetricCardProps) => {
  const statusColors = {
    normal: "text-success",
    warning: "text-warning",
    alert: "text-destructive",
  };

  const trendColors = {
    up: "text-success",
    down: "text-destructive",
    neutral: "text-muted-foreground",
  };

  return (
    <div className="metric-card group">
      <div className="flex items-start justify-between">
        <div className="space-y-1">
          <p className="text-sm text-muted-foreground font-medium">{title}</p>
          <p className="text-3xl font-bold tracking-tight">{value}</p>
        </div>
        <div className={cn("p-3 rounded-lg bg-muted/50", statusColors[status])}>
          <Icon className="w-5 h-5" />
        </div>
      </div>
      
      <div className="mt-4 flex items-center gap-2">
        <span className={cn("text-sm font-medium", trendColors[trend])}>
          {change}
        </span>
        <span className="text-sm text-muted-foreground">vs last hour</span>
      </div>

      {status !== "normal" && (
        <div className="mt-3 pt-3 border-t border-border/50">
          <div className="flex items-center gap-2">
            <div className={cn("w-2 h-2 rounded-full status-pulse", statusColors[status])} />
            <span className="text-xs text-muted-foreground">
              {status === "warning" ? "Monitoring" : "Attention required"}
            </span>
          </div>
        </div>
      )}
    </div>
  );
};

export default MetricCard;
