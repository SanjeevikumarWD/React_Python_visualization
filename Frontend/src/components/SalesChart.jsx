import { Bar, Line, Pie } from 'react-chartjs-2';
import {
    Chart as ChartJS,
    LineElement,
    BarElement,
    ArcElement,
    CategoryScale,
    LinearScale,
    Tooltip,
    Legend,
} from 'chart.js';

ChartJS.register(
    LineElement,
    BarElement,
    ArcElement,
    CategoryScale,
    LinearScale,
    Tooltip,
    Legend
);

const SalesChart = ({ chartType, chartData, chartOptions }) => {
    const ChartComponent = chartType === 'line' ? Line :
        chartType === 'bar' ? Bar :
            chartType === 'pie' ? Pie : null;

    if (!ChartComponent || !chartData) return null;

    return (
        <div className="chart-card">
            <ChartComponent data={chartData} options={chartOptions} />
        </div>
    );
};

export default SalesChart;
