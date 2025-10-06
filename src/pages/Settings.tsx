import { Settings as SettingsIcon } from "lucide-react";

const Settings = () => {
  return (
    <div className="space-y-6">
      <div className="flex items-center gap-3">
        <div className="p-2 rounded-lg bg-muted/50">
          <SettingsIcon className="w-6 h-6 text-muted-foreground" />
        </div>
        <div>
          <h1 className="text-3xl font-bold tracking-tight">Settings</h1>
          <p className="text-muted-foreground">System configuration and preferences</p>
        </div>
      </div>

      <div className="glass-card rounded-xl p-8 text-center">
        <SettingsIcon className="w-16 h-16 text-muted-foreground mx-auto mb-4" />
        <h3 className="text-xl font-semibold mb-2">Settings Panel</h3>
        <p className="text-muted-foreground">
          Configure thresholds, users, devices, and system preferences
        </p>
      </div>
    </div>
  );
};

export default Settings;
