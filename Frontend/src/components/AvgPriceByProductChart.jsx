import { Bar } from 'react-chartjs-2';
import { Chart as ChartJS, BarElement, CategoryScale, LinearScale } from 'chart.js';

ChartJS.register(BarElement, CategoryScale, LinearScale);

export default function AvgPriceByProductChart({ data }) {
    const chartData = {
        labels: data?.Product || [],
        datasets: [
            {
                label: 'Avg. Price',
                data: data?.['Unit Price'] || [],
                backgroundColor: '#6366f1',
            },
        ],
    };

    return (
        <div className="chart-card">
            <Bar data={chartData} />
        </div>
    );
}
