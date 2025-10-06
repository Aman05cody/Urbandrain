import { FileText, Download, TrendingUp } from "lucide-react";
import { Button } from "@/components/ui/button";

const Reports = () => {
  const reports = [
    { id: 1, title: "Weekly Maintenance Summary", date: "Oct 1-7, 2025", status: "Complete" },
    { id: 2, title: "Anomaly Detection Report", date: "October 2025", status: "In Progress" },
    { id: 3, title: "Cleaning Cycle Analysis", date: "Q3 2025", status: "Complete" },
  ];

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="p-2 rounded-lg bg-primary/10">
            <FileText className="w-6 h-6 text-primary" />
          </div>
          <div>
            <h1 className="text-3xl font-bold tracking-tight">Reports & Analytics</h1>
            <p className="text-muted-foreground">System performance insights</p>
          </div>
        </div>
        <Button>
          <TrendingUp className="w-4 h-4 mr-2" />
          Generate Report
        </Button>
      </div>

      <div className="grid grid-cols-1 gap-4">
        {reports.map((report) => (
          <div key={report.id} className="glass-card rounded-xl p-6">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-4">
                <div className="p-3 rounded-lg bg-muted/50">
                  <FileText className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <h3 className="font-semibold">{report.title}</h3>
                  <p className="text-sm text-muted-foreground">{report.date}</p>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <span className={`text-sm px-3 py-1 rounded-full ${
                  report.status === "Complete" 
                    ? "bg-success/10 text-success" 
                    : "bg-warning/10 text-warning"
                }`}>
                  {report.status}
                </span>
                <Button variant="outline" size="sm">
                  <Download className="w-4 h-4 mr-2" />
                  Download
                </Button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Reports;
