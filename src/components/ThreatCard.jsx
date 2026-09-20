import React from 'react';

export default function ThreatCard({ threat, onDelete }) {
  const getBadgeClass = (severity) => {
    switch (severity.toLowerCase()) {
      case 'critical': return 'badge-critical';
      case 'high': return 'badge-high';
      default: return 'badge-medium';
    }
  };

  return (
    <div className="threat-card">
      <div className="card-header">
        <span className="threat-id">{threat.id}</span>
        <span className={`badge ${getBadgeClass(threat.severity)}`}>{threat.severity}</span>
      </div>
      <h4>{threat.title}</h4>
      <p>{threat.description}</p>
      <div className="card-footer">
        <small>Category: {threat.category} | Date: {threat.date}</small>
        {onDelete && (
          <button className="btn-delete" onClick={() => onDelete(threat.id)}>Remove</button>
        )}
      </div>
    </div>
  );
}