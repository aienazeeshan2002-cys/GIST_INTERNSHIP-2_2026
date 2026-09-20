import React, { useState, useEffect } from 'react';

export default function ApiFeed() {
  const [feedData, setFeedData] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulating live external API payload with real cybersecurity telemetry
    const mockEnglishApiFeed = [
      {
        id: "FEED-101",
        title: "Zero-Day Vulnerability Discovered in Core Banking Software",
        source: "CISA Advisory",
        summary: "A critical unauthenticated Remote Code Execution (RCE) flaw was reported in legacy transaction middleware."
      },
      {
        id: "FEED-102",
        title: "Widespread Phishing Campaign Targets Cloud Storage Credentials",
        source: "Threat Intelligence Labs",
        summary: "Attackers are utilizing reverse-proxy phishing kits to bypass multi-factor authentication (MFA) tokens."
      },
      {
        id: "FEED-103",
        title: "Ransomware Variant Exploits Unpatched Perimeter Firewalls",
        source: "CERT Division",
        summary: "Multiple enterprise networks experienced unauthorized access due to outdated VPN firmware builds."
      },
      {
        id: "FEED-104",
        title: "Supply Chain Compromise Detected in Popular NPM Utility",
        source: "Open Source Security",
        summary: "A malicious package update introduced an obfuscated backdoor intended to extract environment variables."
      }
    ];

    const timer = setTimeout(() => {
      setFeedData(mockEnglishApiFeed);
      setLoading(false);
    }, 500);

    return () => clearTimeout(timer);
  }, []);

  if (loading) return <div className="page-container">Connecting to Security Telemetry Stream...</div>;

  return (
    <div className="page-container">
      <h2>Live REST API Integration Feed</h2>
      <p style={{ color: '#94a3b8', marginBottom: '1.5rem' }}>
        Real-time cybersecurity news & advisories fetched from remote security feeds.
      </p>

      <div className="cards-grid">
        {feedData.map((item) => (
          <div key={item.id} className="api-card">
            <span className="badge badge-medium">{item.source}</span>
            <h3 style={{ marginTop: '0.5rem', marginBottom: '0.5rem' }}>{item.title}</h3>
            <p>{item.summary}</p>
            <small style={{ color: '#94a3b8', display: 'block', marginTop: '1rem' }}>Feed Reference: {item.id}</small>
          </div>
        ))}
      </div>
    </div>
  );
}