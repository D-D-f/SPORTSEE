import "./Chart.css";
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import UseCallApi from "../../CustomHooks/UseCallApi/UseCallApi.tsx";
import CustomizedTooltip from "../../CustomChart/CustomizedTooltip/CustomizedTooltip.tsx";

const Chart = () => {
    const [data] = UseCallApi( "12",  "activity");

    return (
        <ResponsiveContainer style={{paddingTop: 50, paddingLeft: 50, paddingBottom: 50, margin: 0, backgroundColor: 'var(--gray)', borderRadius: "10px"}} width="100%" height="40%">
            <BarChart
                width={500}
                height={300}
                data={data.data?.sessions}
                barSize={20}
            >
                <Legend verticalAlign='top' align='right' iconType='circle' wrapperStyle={{marginTop: '-33px'}} />
                <CartesianGrid strokeDasharray='3 3' vertical={false} />
                <XAxis dataKey='day' tickLine={false} axisLine={false} />
                <YAxis dataKey='kilogram' type='number' tickLine={false} orientation='right' axisLine={false} domain={['dataMin - 1', 'dataMax + 1']} />
                <YAxis dataKey='calories' type='number' yAxisId='calorie' hide />
                <Tooltip content={<CustomizedTooltip />} />
                <Bar barSize={10} name="Poids (kg)" dataKey="kilogram" fill="#E60000" radius={[10, 10, 0, 0]} />
                <Bar barSize={10} name="Calories brûlées (kCal)" yAxisId='calorie' dataKey="calories" radius={[10, 10, 0, 0]} />
            </BarChart>
        </ResponsiveContainer>
    )
}

export default Chart;