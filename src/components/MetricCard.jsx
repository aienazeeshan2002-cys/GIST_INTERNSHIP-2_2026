import React from 'react';

export default function MetricCard({ label, value, color }) {
  return (
    <div className="metric-card" style={{ borderLeft: `4px solid ${color}` }}>
      <span className="metric-label">{label}</span>
      <h3 className="metric-value">{value}</h3>
    </div>
  );
}