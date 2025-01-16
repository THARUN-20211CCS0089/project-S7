import React from "react";

const Dashboard = ({ systemStatus }) => {
  if (!systemStatus) return <p>No system data available.</p>;

  return (
    <div>
      <h1 className="text-3xl font-bold mb-6">System Dashboard</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* System Uptime */}
        <div className="bg-blue-100 p-6 rounded-lg shadow">
          <h2 className="text-lg font-semibold">System Uptime</h2>
          <p className="text-2xl font-bold">{systemStatus.uptime || "N/A"}</p>
        </div>

        {/* CPU Usage */}
        <div className="bg-green-100 p-6 rounded-lg shadow">
          <h2 className="text-lg font-semibold">CPU Usage</h2>
          <p className="text-2xl font-bold">{systemStatus.cpu_usage}%</p>
        </div>

        {/* Memory Usage */}
        <div className="bg-yellow-100 p-6 rounded-lg shadow">
          <h2 className="text-lg font-semibold">Memory Usage</h2>
          <p className="text-2xl font-bold">{systemStatus.mem_usage}%</p>
        </div>

        {/* Disk Usage */}
        <div className="bg-red-100 p-6 rounded-lg shadow">
          <h2 className="text-lg font-semibold">Disk Usage</h2>
          <p className="text-2xl font-bold">{systemStatus.disk_usage}%</p>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
