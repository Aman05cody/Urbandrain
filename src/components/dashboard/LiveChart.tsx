import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Legend } from "recharts";
import { Activity } from "lucide-react";

// Mock data for demonstration
const generateMockData = () => {
  const data = [];
  const now = Date.now();
  for (let i = 30; i >= 0; i--) {
    data.push({
      time: new Date(now - i * 60000).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
      flow: 2.5 + Math.random() * 1.5,
      uv: 200 + Math.random() * 100,
      gas: 0.01 + Math.random() * 0.03,
    });
  }
  return data;
};

const LiveChart = () => {
  const data = generateMockData();

  return (
    <div className="chart-container">
      <div className="flex items-center justify-between mb-6">
        <div className="flex items-center gap-3">
          <div className="p-2 rounded-lg bg-primary/10">
            <Activity className="w-5 h-5 text-primary" />
          </div>
          <div>
            <h3 className="font-semibold text-lg">Live Sensor Data</h3>
            <p className="text-sm text-muted-foreground">Real-time monitoring</p>
          </div>
        </div>
        <div className="flex items-center gap-2">
          <div className="w-2 h-2 rounded-full bg-primary status-pulse" />
          <span className="text-sm text-muted-foreground">Live</span>
        </div>
      </div>

      <ResponsiveContainer width="100%" height={300}>
        <LineChart data={data}>
          <CartesianGrid strokeDasharray="3 3" stroke="hsl(var(--border))" opacity={0.3} />
          <XAxis 
            dataKey="time" 
            stroke="hsl(var(--muted-foreground))"
            tick={{ fill: 'hsl(var(--muted-foreground))' }}
            fontSize={12}
          />
          <YAxis 
            stroke="hsl(var(--muted-foreground))"
            tick={{ fill: 'hsl(var(--muted-foreground))' }}
            fontSize={12}
          />
          <Tooltip
            contentStyle={{
              backgroundColor: 'hsl(var(--popover))',
              border: '1px solid hsl(var(--border))',
              borderRadius: '8px',
            }}
          />
          <Legend 
            wrapperStyle={{
              paddingTop: '20px',
            }}
          />
          <Line 
            type="monotone" 
            dataKey="flow" 
            stroke="hsl(var(--chart-1))" 
            strokeWidth={2}
            dot={false}
            name="Flow (L/s)"
          />
          <Line 
            type="monotone" 
            dataKey="uv" 
            stroke="hsl(var(--chart-2))" 
            strokeWidth={2}
            dot={false}
            name="UV (mW/cm²)"
          />
          <Line 
            type="monotone" 
            dataKey="gas" 
            stroke="hsl(var(--chart-4))" 
            strokeWidth={2}
            dot={false}
            name="Gas (ppm)"
          />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
};

export default LiveChart;
