import { Pie } from 'react-chartjs-2';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';

ChartJS.register(ArcElement, Tooltip, Legend);

export default function RevenueBySalespersonChart({ data }) {
    const chartData = {
        labels: data?.Salesperson || [],
        datasets: [
            {
                label: 'Revenue',
                data: data?.Revenue || [],
                backgroundColor: ['#f87171', '#facc15', '#34d399', '#60a5fa', '#a78bfa'],
            },
        ],
    };

    return (
        <div className="chart-card">
            <Pie data={chartData} />
        </div>
    );
}
