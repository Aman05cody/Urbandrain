import { Activity, Droplets, Wind, AlertTriangle } from "lucide-react";
import MetricCard from "@/components/dashboard/MetricCard";
import LiveChart from "@/components/dashboard/LiveChart";
import ManholeMap from "@/components/dashboard/ManholeMap";
import AlertsList from "@/components/dashboard/AlertsList";

const Dashboard = () => {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold tracking-tight">Drainage Management System</h1>
        <p className="text-muted-foreground mt-2">Real-time monitoring and control dashboard</p>
      </div>

      {/* Key Metrics */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <MetricCard
          title="Flow Rate"
          value="3.2 L/s"
          change="+12%"
          trend="up"
          icon={Droplets}
          status="normal"
        />
        <MetricCard
          title="UV Intensity"
          value="245 mW/cm²"
          change="-5%"
          trend="down"
          icon={Activity}
          status="normal"
        />
        <MetricCard
          title="Gas Levels"
          value="0.02 ppm"
          change="+2%"
          trend="up"
          icon={Wind}
          status="warning"
        />
        <MetricCard
          title="Active Alerts"
          value="3"
          change="0"
          trend="neutral"
          icon={AlertTriangle}
          status="alert"
        />
      </div>

      {/* Charts and Map */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <LiveChart />
        <ManholeMap />
      </div>

      {/* Alerts Feed */}
      <AlertsList />
    </div>
  );
};

export default Dashboard;
