import "./Chart.css";
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import {UseCallApiActivity} from "../../CustomHooks/UseCallApi/UseCallApi.ts";
import CustomizedTooltip from "../../CustomChart/CustomizedTooltip/CustomizedTooltip.tsx";
import CustomizedLegend from "../../CustomChart/CustomizedLegend/CustomizedLegend.tsx";
import CustomizedTickChart from "../../CustomChart/CustomizedTickChart/CustomizedTickChart.tsx";

const Chart = () => {
    const [data] = UseCallApiActivity();

    return (
        <>
            <ResponsiveContainer className="responsiveContainerChart" minWidth={300} width={"80%"} height={"30%"}>
                <BarChart
                    data={data.data?.sessions}
                    barSize={20}
                    barGap={5}
                    margin={{top: 10, right: 0, bottom: 0, left: 10}}
                >
                    <Legend content={<CustomizedLegend />} verticalAlign='top' align='right' iconType='circle' wrapperStyle={{marginTop: '-15px'}} formatter={(value) => <span style={{color: "var(--fontColorChart"}}>{value}</span>} />
                    <CartesianGrid strokeDasharray='3 3' vertical={false} />
                    <XAxis dataKey='day' tickLine={false} axisLine={false} tick={<CustomizedTickChart />} />
                    <YAxis dataKey='kilogram' type='number' tickLine={false} orientation='right' axisLine={false} domain={['dataMin - 1', 'dataMax + 1']} />
                    <YAxis dataKey='calories' type='number' yAxisId='calorie' hide />
                    <Tooltip content={<CustomizedTooltip />} />
                    <Bar barSize={10} name="Poids (kg)" dataKey="kilogram" radius={[10, 10, 0, 0]} />
                    <Bar barSize={10} name="Calories brûlées (kCal)" yAxisId='calorie' dataKey="calories" fill="#E60000" radius={[10, 10, 0, 0]} />
                </BarChart>
            </ResponsiveContainer>
        </>

    )
}

export default Chart;