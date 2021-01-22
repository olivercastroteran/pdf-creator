import { useState } from 'react';
import axios from 'axios';
import { saveAs } from 'file-saver';
import './App.css';

function App() {
  const [data, setData] = useState({
    name: '',
    receiptId: '',
    price1: 0,
    price2: 0,
  });

  const handleChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setData({ ...data, [name]: value });
  };

  const createAndDownloadPdf = () => {
    axios.post('/create-pdf', data);
  };
  return (
    <div className="app">
      <input
        type="text"
        placeholder="Name"
        name="name"
        onChange={handleChange}
      />
      <input
        type="number"
        placeholder="Receipt ID"
        name="receiptId"
        onChange={handleChange}
      />
      <input
        type="number"
        placeholder="Price 1"
        name="price1"
        onChange={handleChange}
      />
      <input
        type="number"
        placeholder="Price 2"
        name="price2"
        onChange={handleChange}
      />

      <button onClick={createAndDownloadPdf}>Download PDF</button>
    </div>
  );
}

export default App;
