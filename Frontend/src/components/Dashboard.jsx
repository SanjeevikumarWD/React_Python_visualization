import { useEffect, useState } from 'react';
import axios from 'axios';
import RevenueOverTimeChart from './RevenueOverTimeChart';
import UnitsByProductChart from './UnitsByProductChart';
import RevenueBySalespersonChart from './RevenueBySalespersonChart';
import RevenueByRegionProductChart from './RevenueByRegionProductChart';
import AvgPriceByProductChart from './AvgPriceByProductChart';


export default function Dashboard({ triggerFetch }) {
    const [charts, setCharts] = useState(null);

    useEffect(() => {
        axios.get('http://localhost:5000/chart-data')
            .then(response => setCharts(response.data))
            .catch(error => console.error('Error fetching chart data:', error));
    }, [triggerFetch]);

    if (!charts) return <div className="text-center mt-10">Loading charts...</div>;

    return (
        <div className="dashboard-charts chart-grid">
            <RevenueOverTimeChart data={charts.revenue_over_time} />
            <UnitsByProductChart data={charts.units_by_product} />
            <RevenueBySalespersonChart data={charts.revenue_by_salesperson} />
            <RevenueByRegionProductChart data={charts.revenue_by_region_product} />
            <AvgPriceByProductChart data={charts.avg_price_by_product} />
        </div>

    );
}
