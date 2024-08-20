import { useState, useEffect } from 'react';
import DirectoryTable from '../DirectoryTable';
import MyBumpChart from '../BumpChart';
import DailyTab from '../DailyTab';
import axios from 'axios';
import ReusableChart from '../ReusableChart';
import { format } from 'date-fns';

const Daily = () => {
    const [selectedDailyTab, setSelectedDailyTab] = useState('handshakes');
    const [handshakesData, setHandshakesData] = useState([]);
    const [formattedHandshakesData, setFormattedHandshakesData] = useState([]);
    const [difficultData, setDifficultData] = useState([]);
    const [tableData, setTableData] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const [handshakesResponse, difficultsResponse] = await axios.all([
                    axios.get("https://raw.githubusercontent.com/YannRZG/Missions-THP/main/handshakes.json"),
                    axios.get("https://raw.githubusercontent.com/evarellapucky/thp_student_dashboard/dev/src/Data/difficult.json")
                ]);

                // Extraire et formater les données de handshakes pour ReusableChart
                const handshakes = handshakesResponse.data.handshakes;

                // Regrouper les handshakes par date et compter le nombre pour chaque date
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

                // Formater les données pour MyBumpChart (difficultés)
                const formattedDifficultData = [
                    {
                        id: "Difficultés rencontrées",
                        data: difficultsResponse.data.Difficults.map(d => ({
                            x: d.date,
                            y: parseInt(d.rate)
                        }))
                    }
                ];

                // Stocker les données
                setHandshakesData(handshakes);
                setFormattedHandshakesData(formattedData);
                setDifficultData(formattedDifficultData);
                setTableData(difficultsResponse.data.Difficults);
                setError(null);
            } catch (error) {
                console.error('Erreur lors de la récupération des données :', error);
                setError('Erreur lors de la récupération des données.');
            } finally {
                setLoading(false);
            }
        };

        fetchData();
    }, []);

    // Fonction pour formater le tooltip du graphique
    const tooltipFormatter = ({ active, payload }) => {
        if (!active || !payload || payload.length === 0) {
            return null;
        }
        return (
            <div className='rounded-lg border bg-white border-cyan-600 shadow-sm p-2'>
                <div className='grid grid-cols-2 gap-2'>
                    <div className='flex flex-col p-2'>
                        <span className='text-xs text-slate-500 uppercase font-semibold'>Date</span>
                        <span className='font-bold text-sm text-slate-600'>{payload[0].payload.name}</span>
                        <span className='text-xs text-slate-500 uppercase font-semibold'>Coups de Mains</span>
                        <span className='font-bold text-sm text-slate-600'>{payload[0].value}</span>
                    </div>
                </div>
            </div>
        );
    };

    if (loading) {
        return <div>Chargement...</div>;
    }

    if (error) {
        return <div>{error}</div>;
    }

    return (
        <>
            <div className="flex flex-row justify-around mt-6">
                <DailyTab onSelect={(tab) => setSelectedDailyTab(tab)} />
            </div>
            {selectedDailyTab === 'handshakes' && (
                <div>
                    <ReusableChart
                        data={formattedHandshakesData}
                        xAxisKey="name"
                        yAxisKey="uv"
                        chartColor="#06b6d4"
                        tooltipFormatter={tooltipFormatter}
                    />
                    <DirectoryTable data={handshakesData} />
                </div>
            )}
            {selectedDailyTab === 'difficults' && (
                <div>
                    <MyBumpChart data={difficultData} />
                    <h1 className="text-center text-2xl font-bold mt-8">Liste des difficultés rencontrées</h1>
                    <DirectoryTable data={tableData} />
                </div>
            )}
        </>
    );
};

export default Daily;
