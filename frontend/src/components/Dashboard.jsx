import React, { useState, useEffect } from 'react';

const Dashboard = () => {
  const [missions, setMissions] = useState([]);
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');

  const fetchMissions = async () => {
    const res = await fetch('/api/missions', {
      headers: { Authorization: 'Bearer ' + localStorage.getItem('token') }
    });
    const data = await res.json();
    setMissions(data);
  };

  const createMission = async () => {
    await fetch('/api/missions', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Authorization: 'Bearer ' + localStorage.getItem('token')
      },
      body: JSON.stringify({ title, description })
    });
    setTitle('');
    setDescription('');
    fetchMissions();
  };

  useEffect(() => {
    fetchMissions();
  }, []);

  return (
    <div className="p-4">
      <h2>Dashboard</h2>

      <div>
        <input placeholder="Title" value={title} onChange={e => setTitle(e.target.value)} />
        <input placeholder="Description" value={description} onChange={e => setDescription(e.target.value)} />
        <button onClick={createMission}>Create Mission</button>
      </div>

      <ul>
        {missions.map((m) => (
          <li key={m.id}>
            <strong>{m.title}</strong>: {m.description}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Dashboard;
