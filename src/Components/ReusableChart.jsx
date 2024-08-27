import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
import PropTypes from 'prop-types';

const ReusableChart = ({ data, xAxisKey, yAxisKey, chartColor, tooltipFormatter }) => {
    return (
        <div className="w-full h-[200px] min-h-[300px] mt-16">
            <ResponsiveContainer width="100%" height="100%">
                <AreaChart
                    data={data}
                    margin={{
                        top: 10,
                        right: 30,
                        left: 0,
                        bottom: 0,
                    }}
                >
                    <CartesianGrid strokeDasharray="3 3" vertical={false} />
                    <XAxis dataKey={xAxisKey} tickLine={false} axisLine={false} />
                    <YAxis />
                    <Tooltip cursor={{ stroke: chartColor, radius: 4 }} content={tooltipFormatter} />
                    <Area type="monotone" dataKey={yAxisKey} stroke={chartColor} fill="url(#gradient)" />
                    <defs>
                        <linearGradient id="gradient" x1="0" y1="0" x2="0" y2="1">
                            <stop offset="0%" stopColor={chartColor} stopOpacity={0.4} />
                            <stop offset="75%" stopColor={chartColor} stopOpacity={0.05} />
                        </linearGradient>
                    </defs>
                </AreaChart>
            </ResponsiveContainer>
        </div>
    );
};

ReusableChart.propTypes = {
  data: PropTypes.arrayOf(PropTypes.object).isRequired,
  xAxisKey: PropTypes.string.isRequired,
  yAxisKey: PropTypes.string.isRequired, 
  chartColor: PropTypes.string.isRequired,
  tooltipFormatter: PropTypes.func, 
};

export default ReusableChart;
