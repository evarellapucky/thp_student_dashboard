import { ResponsiveBump } from '@nivo/bump';

const data = [
    {
        "id": "Nb de Coups de mains",
        "data": [
            { "x": "01 08 2024", "y": 5 },
            { "x": "02 08 2024", "y": 2 },
            { "x": "03 08 2024", "y": 5 },
            { "x": "04 08 2024", "y": 1 },
            { "x": "05 08 2024", "y": 3 }
        ]
    },
   
    // Plus de séries de données...
];

const MyBumpChart = () => (
    <div style={{ height: 300, marginTop: 20 }}>
        <ResponsiveBump
            data={data}
            margin={{ top: 40, right: 100, bottom: 40, left: 60 }}
            xScale={{ type: 'point' }}
            yScale={{ type: 'linear', min: 1, max: 10}}
            colors={{ scheme: 'spectral' }}
            lineWidth={4}
            activeLineWidth={6}
            inactiveLineWidth={3}
            inactiveOpacity={0.15}
            pointSize={10}
            activePointSize={16}
            inactivePointSize={0}
            pointColor={{ theme: 'background' }}
            pointBorderWidth={3}
            activePointBorderWidth={3}
            pointBorderColor={{ from: 'serie.color' }}
            enableGridX={false}
            enableGridY={true}
            axisTop={{
                tickSize: 5,
                tickPadding: 5,
                tickRotation: 0,
                legend: '',
                legendPosition: 'middle',
                legendOffset: -36
            }}
            axisBottom={{
                tickSize: 5,
                tickPadding: 5,
                tickRotation: 0,
                legend: 'Jour',
                legendPosition: 'start',
                legendOffset: 32
            }}
            axisLeft={{
                tickSize: 5,
                tickPadding: 5,
                tickRotation: 0,
                legend: 'Note',
                legendPosition: 'start',
                legendOffset: -40,
                format: (value) => 6 - value
            }}
        />
    </div>
);

export default MyBumpChart;