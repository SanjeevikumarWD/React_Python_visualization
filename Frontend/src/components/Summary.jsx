import React from 'react';

const Summary = ({ data }) => {
    if (!data) return null;

    return (
        <div className="summary-container">
            <h2 className="summary-title">📋 Data Summary</h2>

            <div className="summary-item">
                <span className="label">Total Rows:</span>
                <span className="value">{data.row_count}</span>
            </div>

            <div className="summary-item">
                <span className="label">Columns:</span>
                <span className="value">{data.columns.join(', ')}</span>
            </div>

            <div className="summary-item">
                <span className="label">Null Values:</span>
                <pre className="code-block">{JSON.stringify(data.nulls, null, 2)}</pre>
            </div>

            <div className="summary-item">
                <span className="label">Averages (numeric columns):</span>
                <pre className="code-block">{JSON.stringify(data.averages, null, 2)}</pre>
            </div>
        </div>

    );
};

export default Summary;
