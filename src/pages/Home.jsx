import React from 'react';
import { Link } from 'react-router-dom';
import MetricCard from '../components/MetricCard';

export default function Home() {
  return (
    <div className="page-container">
      <section className="hero-section">
        <h1>React.js Threat Intelligence Hub</h1>
        <p>A multi-page React application consuming real-time security telemetry and threat metadata.</p>
        <Link to="/threats" className="btn btn-primary">Browse Threat Catalog</Link>
      </section>

      <section className="metrics-grid">
        <MetricCard label="Total Cataloged Threats" value="24" color="#3b82f6" />
        <MetricCard label="Critical Severity Vulnerabilities" value="8" color="#ef4444" />
        <MetricCard label="Active API Connections" value="Online" color="#10b981" />
      </section>
    </div>
  );
}