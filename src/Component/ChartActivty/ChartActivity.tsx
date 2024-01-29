import "./ChartActivity.css";
import {UseCallApiActivity} from "../../Api/UseCallApi.ts";
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import CustomLegend from "../../Custom/CustomLegend/CustomLegend.tsx";
import CustomTickChart from "../../Custom/CustomTickChart/CustomTickChart.tsx";


const ChartActivity = () => {
    const data = UseCallApiActivity();
    const sessions = data.data?.sessions;

    return (
        <ResponsiveContainer width="100%" height={320} style={{marginTop: "30px"}}>
            <BarChart data={sessions} barGap={5} margin={{
                top: 5,
                right: 0,
                left: 20,
                bottom: 5,
            }}>
                <Legend content={<CustomLegend />} verticalAlign='top' align='right' iconType='circle' wrapperStyle={{marginTop: '-15px'}} formatter={(value) => <span style={{color: "var(--fontColorChart"}}>{value}</span>} />
                <CartesianGrid strokeDasharray="4 4"/>
                <XAxis dataKey="day" tickLine={false} axisLine={false} tick={<CustomTickChart />} />
                <YAxis dataKey='kilogram' type='number' tickLine={false} orientation='right' axisLine={false} domain={['dataMin - 1', 'dataMax + 1']} />
                <YAxis dataKey='calories' type='number' yAxisId='calorie' hide />
                <Tooltip/>
                <Legend/>
                <Bar name="Poids (kg)" dataKey="kilogram" fill="var(--red)" radius={[20, 20, 0, 0]} barSize={15} />
                <Bar name="Calories brûlées (kCal)" dataKey="calories" yAxisId='calorie' fill="var(--darkGray)" radius={[20, 20, 0, 0]} barSize={15} />
            </BarChart>
        </ResponsiveContainer>
    )

}

export default ChartActivity;