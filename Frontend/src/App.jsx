import React, { useEffect, useState } from 'react';
import UploadCSV from './components/UploadCSV';
import Summary from './components/Summary';
import axios from 'axios';
import Dashboard from './components/Dashboard';


function App() {
  const [triggerFetch, setTriggerFetch] = useState(false);
  const [summary, setSummary] = useState(null);


  const handleUploadSuccess = () => {
    setTriggerFetch(!triggerFetch); // signal to refresh summary + charts
  };


  useEffect(() => {
    const fetchSummary = async () => {
      try {
        const res = await axios.get('http://localhost:5000/summary');
        setSummary(res.data);
      } catch (error) {
        console.error('Error fetching summary:', error);
      }
    };
    fetchSummary()
  }, [triggerFetch])

  return (
    <div className="dashboard-container">
      <h1 className="dashboard-title">Sales Dashboard</h1>
      <UploadCSV onUploadSuccess={handleUploadSuccess} />
      <Summary data={summary} />
      <Dashboard triggerFetch={triggerFetch} />
    </div>


  );
}

export default App;
