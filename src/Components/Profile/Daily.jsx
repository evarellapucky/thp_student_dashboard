import { useState } from 'react';
import DirectoryTable from '../DirectoryTable';
import HandshakesTable from '../HandshakeTable';
import MyBumpChart from '../BumpChart';
import DailyTab from '../DailyTab';

// Supposons que data1, data2 et data3 soient définis ici ou importés
const data1 = [
    {
        "id": "Nb de Coups de mains",
        "data": [
            { "x": "01 08 2024", "y": 5 },
            { "x": "02 08 2024", "y": 2 },
            { "x": "03 08 2024", "y": 4 },
            { "x": "04 08 2024", "y": 1 },
            { "x": "05 08 2024", "y": 3 }
        ]
    }
];

const data2 = [
    {
        "id": "Difficultées rencontrées",
        "data": [
            { "x": "01 08 2024", "y": 4 },
            { "x": "02 08 2024", "y": 3 },
            { "x": "03 08 2024", "y": 1 },
            { "x": "04 08 2024", "y": 2 },
            { "x": "05 08 2024", "y": 5 }
        ]
    }
];

const data3 = [
    {
        "date": "01 08 2024",
        "rate": "3",
        "content": "Description de la difficulte 1."
    },
    {
        "date": "02 08 2024",
        "rate": "3",
        "content": "Description de la difficulte 2."
    },
    {
        "date": "03 08 2024",
        "rate": "3",
        "content": "Description de la difficulte 3."
    }
    // Ajoutez d'autres entrées ici
];

const Daily = () => {
    const [selectedDailyTab, setSelectedDailyTab] = useState('handshakes');

    return (
        <>
            <div className="flex flex-row justify-around mt-6">
                <DailyTab onSelect={(tab) => setSelectedDailyTab(tab)} />
            </div>
            {selectedDailyTab === 'handshakes' && (
                <div>
                    <MyBumpChart data={data1} />
                    <HandshakesTable />
                </div>
            )}
            {selectedDailyTab === 'difficults' && (
                <div>
                    <MyBumpChart data={data2} />
                    <h1 className="text-center text-2xl font-bold mt-8">Liste des difficultés rencontrées</h1>
                    <DirectoryTable data={data3} />
                </div>
            )}
        </>
    );
}

export default Daily;
