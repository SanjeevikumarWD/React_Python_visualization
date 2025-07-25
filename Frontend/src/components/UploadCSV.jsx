import React, { useState } from 'react';
import axios from 'axios';

const UploadCSV = ({ onUploadSuccess }) => {
    const [file, setFile] = useState(null);
    const [uploading, setUploading] = useState(false);

    const handleUpload = async () => {
        if (!file) return;

        const formData = new FormData();
        formData.append('file', file);

        setUploading(true);
        try {
            await axios.post('http://localhost:5000/upload', formData, {
                headers: { 'Content-Type': 'multipart/form-data' }
            });
            onUploadSuccess(); // fetch summary and chart data after upload
        } catch (error) {
            console.error('Upload error:', error);
        } finally {
            setUploading(false);
        }
    };

    return (
        <div className="upload-container">
            <h2 className="upload-title">Upload CSV</h2>
            <input
                type="file"
                accept=".csv"
                onChange={(e) => setFile(e.target.files[0])}
                className="upload-input"
            />
            <button
                onClick={handleUpload}
                disabled={!file || uploading}
                className="upload-button"
            >
                {uploading ? 'Uploading...' : 'Upload'}
            </button>
        </div>

    );
};

export default UploadCSV;
