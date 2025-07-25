import { Line } from 'react-chartjs-2';
import { Chart as ChartJS, LineElement, PointElement, CategoryScale, LinearScale } from 'chart.js';

ChartJS.register(LineElement, PointElement, CategoryScale, LinearScale);

export default function RevenueOverTimeChart({ data }) {
    const chartData = {
        labels: data?.Date || [],
        datasets: [
            {
                label: 'Revenue Over Time',
                data: data?.Revenue || [],
                fill: false,
                borderColor: '#3b82f6',
                tension: 0.2,
            },
        ],
    };

    return (
        <div className="chart-card">
            <Line data={chartData} />
        </div>
    );
}
