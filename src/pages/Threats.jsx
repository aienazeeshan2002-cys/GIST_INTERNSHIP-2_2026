import React, { useState, useMemo } from 'react';
import ThreatCard from '../components/ThreatCard';
import { initialThreats } from '../data/mockData';

export default function Threats() {
  const [threats, setThreats] = useState(initialThreats);
  const [search, setSearch] = useState('');
  const [filterSeverity, setFilterSeverity] = useState('ALL');

  const filteredThreats = useMemo(() => {
    return threats.filter((item) => {
      const matchesSearch = item.title.toLowerCase().includes(search.toLowerCase()) || 
                            item.id.toLowerCase().includes(search.toLowerCase());
      const matchesSeverity = filterSeverity === 'ALL' || item.severity === filterSeverity;
      return matchesSearch && matchesSeverity;
    });
  }, [threats, search, filterSeverity]);

  const handleDelete = (id) => {
    setThreats((prev) => prev.filter((item) => item.id !== id));
  };

  return (
    <div className="page-container">
      <h2>Security Threat Catalog</h2>
      <div className="controls-bar">
        <input 
          type="text" 
          placeholder="Search by ID or Title..." 
          value={search} 
          onChange={(e) => setSearch(e.target.value)} 
          className="input-field"
        />
        <select 
          value={filterSeverity} 
          onChange={(e) => setFilterSeverity(e.target.value)} 
          className="input-field"
        >
          <option value="ALL">All Severities</option>
          <option value="Critical">Critical</option>
          <option value="High">High</option>
          <option value="Medium">Medium</option>
        </select>
      </div>

      <div className="cards-grid">
        {filteredThreats.length > 0 ? (
          filteredThreats.map((threat) => (
            <ThreatCard key={threat.id} threat={threat} onDelete={handleDelete} />
          ))
        ) : (
          <p>No matching threat records found.</p>
        )}
      </div>
    </div>
  );
}