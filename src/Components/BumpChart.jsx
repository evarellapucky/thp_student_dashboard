import { ResponsiveBump } from '@nivo/bump';
import PropTypes from 'prop-types';

const MyBumpChart = ({ data }) => (
    <div style={{ height: 300, marginTop: 20 }}>
        <ResponsiveBump
            data={data}
            margin={{ top: 40, right: 100, bottom: 40, left: 60 }}
            xScale={{ type: 'point' }}
            yScale={{ type: 'linear', min: 1, max: 10 }}
            colors={{ scheme: 'category10' }}
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

MyBumpChart.propTypes = {
    data: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.string.isRequired,
            data: PropTypes.arrayOf(
                PropTypes.shape({
                    x: PropTypes.string.isRequired,
                    y: PropTypes.number.isRequired
                })
            ).isRequired
        })
    ).isRequired
};

export default MyBumpChart;