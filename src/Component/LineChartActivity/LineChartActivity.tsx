import { LineChart, Line, XAxis, CartesianGrid, Legend, Tooltip, ResponsiveContainer } from 'recharts';
import {UseCallApiSession} from "../../CustomHooks/UseCallApi/UseCallApi.ts";
import CustomizedTooltipSession from "../../CustomChart/CustomizedTooltipSession/CustomizedTooltipSession.tsx";
import CustomizedLegendLineChart from "../../CustomChart/CustomizedLegendLineChart/CustomizedLegendLineChart.tsx";
const LineChartActivity = () => {
    const [data] = UseCallApiSession();
    const numberDay = data.data?.sessions;
    const days: string[] = ["L", "M", "M", "J", "V", "S", "D"];

    if(numberDay) {
        days.forEach((day: string, index: number) => {
            Object.defineProperty(numberDay[index], 'letterDay', {
                value: day,
                writable: false
            })
        })
    }

    return (
        <ResponsiveContainer width="33%" height="65%" style={{backgroundColor: "red"}}>
            <LineChart data={data.data?.sessions}
                       margin={{ top: 100, right: 10, left: 10, bottom: 20 }}>
                <Legend content={<CustomizedLegendLineChart />} verticalAlign='top' align='right' iconType='circle' />
                <XAxis dataKey="letterDay" tickLine={false} axisLine={false} />
                <Tooltip content={<CustomizedTooltipSession />}  />
                <Line type="monotone" dataKey="sessionLength" stroke="white" />
            </LineChart>
        </ResponsiveContainer>
    )
}

export default LineChartActivity;