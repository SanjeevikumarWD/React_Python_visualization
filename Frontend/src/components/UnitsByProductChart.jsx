import { Bar } from 'react-chartjs-2';
import { Chart as ChartJS, BarElement, CategoryScale, LinearScale } from 'chart.js';

ChartJS.register(BarElement, CategoryScale, LinearScale);

export default function UnitsByProductChart({ data }) {
    const chartData = {
        labels: data?.Product || [],
        datasets: [
            {
                label: 'Units Sold',
                data: data?.['Units Sold'] || [],
                backgroundColor: '#10b981',
            },
        ],
    };

    return (
        <div className="chart-card">
            <Bar data={chartData} />
        </div>
    );
}
