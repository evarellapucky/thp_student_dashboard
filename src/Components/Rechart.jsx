import { useState, useEffect } from 'react';
import axios from 'axios';
import ReusableChart from './ReusableChart';

const Rechart = () => {
    const [data, setData] = useState([]);
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchData = async () => {
            setLoading(true);
            try {
                const response = await axios.get('https://raw.githubusercontent.com/YannRZG/Missions-THP/main/handshakes.json');
                const handshakes = response.data.handshakes;

                const groupedByDate = handshakes.reduce((acc, handshake) => {
                    const [day, month, year] = handshake.date.split('-');
                    const date = `${day}-${month}-${year}`;
                    acc[date] = (acc[date] || 0) + 1;
                    return acc;
                }, {});

                const formattedData = Object.keys(groupedByDate).map(date => ({
                    name: date,
                    uv: groupedByDate[date]
                }));

                setData(formattedData);
                setError(null);
            } catch (err) {
                setError('Erreur lors de la récupération des données');
                console.error('Erreur lors de la récupération des données', err);
            } finally {
                setLoading(false);
            }
        };

        fetchData();
    }, []);

    if (loading) {
        return <div>Chargement...</div>;
    }

    if (error) {
        return <div>{error}</div>;
    }

    // Custom tooltip formatter for this specific chart
    const tooltipFormatter = ({ active, payload }) => {
        if (!active || !payload || payload.length === 0) {
            return null;
        }
        return (
            <div className='rounded-lg border bg-white border-cyan-600 shadow-sm p-2'>
                <div className='grid grid-cols-2 gap-2'>
                    <div className='flex flex-col p-2'>
                        <span className='text-xs text-slate-500 uppercase font-semibold'>
                            Date
                        </span>
                        <span className='font-bold text-sm text-slate-600'>
                            {payload[0].payload.name}
                        </span>
                        <span className='text-xs text-slate-500 uppercase font-semibold'>
                            Coups de Mains
                        </span>
                        <span className='font-bold text-sm text-slate-600'>
                            {payload[0].value}
                        </span>
                    </div>
                </div>
            </div>
        );
    };

    return (
        <ReusableChart
            data={data}
            xAxisKey="name"
            yAxisKey="uv"
            chartColor="#06b6d4"
            tooltipFormatter={tooltipFormatter}
        />
    );
}

export default Rechart;
