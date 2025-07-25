import { Bar } from 'react-chartjs-2';
import { Chart as ChartJS, BarElement, CategoryScale, LinearScale, Legend, Tooltip } from 'chart.js';

ChartJS.register(BarElement, CategoryScale, LinearScale, Legend, Tooltip);

export default function RevenueByRegionProductChart({ data }) {
    const labels = Object.keys(data || {});
    const productNames = Object.keys(data?.[labels[0]] || {});

    const datasets = productNames.map((product, i) => ({
        label: product,
        data: labels.map(region => data[region][product]),
        backgroundColor: `hsl(${i * 50}, 70%, 60%)`,
    }));

    const chartData = {
        labels,
        datasets,
    };

    return (
        <div className="chart-card">
            <Bar data={chartData} options={{ responsive: true, plugins: { legend: { position: 'top' } } }} />
        </div>
    );
}
