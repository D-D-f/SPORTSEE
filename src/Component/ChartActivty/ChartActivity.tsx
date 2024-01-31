import {UseCallApiActivity} from "../../Api/UseCallApi.ts";
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import CustomLegend from "../../Custom/CustomLegend/CustomLegend.tsx";
import CustomTickChart from "../../Custom/CustomTickChart/CustomTickChart.tsx";
import CustomChartTooltip from "../../Custom/CustomChartTooltip/CustomChartTooltip.tsx";
import {ActivityProps} from "../../Interface/InterfaceProps.ts";

const ChartActivity = () => {
    const data: string | ActivityProps = UseCallApiActivity();
    let sessions;

    if(!(typeof data === "string")) {
        sessions = data.sessions
    }

    return (
        <ResponsiveContainer width="100%" height={300} style={{backgroundColor: "var(--backgroundGray"}}>
            <BarChart data={sessions} barGap={5} margin={{
                top: 50,
                right: 0,
                left: 20,
                bottom: 30,
            }}>
                <Legend content={<CustomLegend /> } verticalAlign='top' align='right' iconType='circle' wrapperStyle={{marginTop: '-15px'}} formatter={(value) => <span style={{color: "var(--fontColorChart"}}>{value}</span>} />
                <CartesianGrid strokeDasharray="4 4"/>
                <XAxis dataKey="day" tickLine={false} axisLine={false} tick={<CustomTickChart />} />
                <YAxis dataKey='kilogram' type='number' tickLine={false} orientation='right' axisLine={false} domain={['dataMin - 1', 'dataMax + 1']} />
                <YAxis dataKey='calories' type='number' yAxisId='calorie' hide />
                <Tooltip content={<CustomChartTooltip />}/>
                <Legend/>
                <Bar name="Poids (kg)" dataKey="kilogram" fill="var(--red)" radius={[20, 20, 0, 0]} barSize={15} />
                <Bar name="Calories brûlées (kCal)" dataKey="calories" yAxisId='calorie' fill="var(--darkGray)" radius={[20, 20, 0, 0]} barSize={15} />
            </BarChart>
        </ResponsiveContainer>
    )

}

export default ChartActivity;