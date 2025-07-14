import React, { useState, useEffect } from "react";
import './output.css';

function App() {
  const [fileSize, setFileSize] = useState("");
  const [finishedFileSize, setFinishedFileSize] = useState("");
  const [speed, setSpeed] = useState("");
  const [time, setTime] = useState(null);

  useEffect(() => {
    if (!fileSize || !speed) {
      setTime(null);
      return;
    }
    const sizeMB = parseFloat(fileSize-finishedFileSize) * 1024;
    const speedMBps = parseFloat(speed);
    if (speedMBps === 0) {
      setTime(null);
      return;
    }
    const seconds = sizeMB / speedMBps;
    const hours = Math.floor(seconds / 3600);
    const minutes = Math.floor((seconds % 3600) / 60);
    const remainingSeconds = Math.floor(seconds % 60);
    setTime(`${hours}h ${minutes}m ${remainingSeconds}s`);
  }, [fileSize, speed , finishedFileSize]);

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="bg-white border shadow-lg rounded-lg p-8 w-full max-w-lg">
        <h2 className="text-2xl font-bold mb-6 text-center text-blue-600">Download Time Estimator</h2>
        <div className="flex flex-row items-center mb-4 justify-between gap-5 ">
        <div className="mb-4">
          <label className="block text-gray-700 mb-2">Total File size (Gb)</label>
          <input
            type="number"
            value={fileSize}
            onChange={(e) => setFileSize(e.target.value)}
            placeholder="Enter file size in GB"
            className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-400"
          />
        </div>
        
        <div className="mb-4">
          <label className="block text-gray-700 mb-2">Finished File size (Gb)</label>
          <input
            type="number"
            value={finishedFileSize}
            onChange={(e) => setFinishedFileSize(e.target.value)}
            placeholder="Enter file size in GB"
            className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-400"
          />
        </div>
        </div>
        <div className="mb-6">
          <label className="block text-gray-700 mb-2">Speed (Mbps)</label>
          <input
            type="number"
            value={speed}
            onChange={(e) => setSpeed(e.target.value)}
            placeholder="Enter speed in Mbps"
            className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-400"
          />
        </div>
        {time && (
          <div className="bg-blue-50 text-blue-700 px-4 py-3 rounded text-center font-medium">
            Estimated Time: {time}
          </div>
        )}
      </div>
    </div>
  );
}

export default App;