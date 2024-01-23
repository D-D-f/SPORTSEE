import { LineChart, Line, XAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
import {UseCallApiSession} from "../../CustomHooks/UseCallApi/UseCallApi.ts";
import CustomizedTooltipSession from "../../CustomChart/CustomizedTooltipSession/CustomizedTooltipSession.tsx";

const LineChartActivity = () => {
    const [data] = UseCallApiSession();
    const numberDay = data?.data?.sessions;
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
        <ResponsiveContainer width="33%" height="65%" style={{backgroundColor: "var(--red)"}}>
            <LineChart data={data?.data?.sessions}
                       margin={{ top: 5, right: 30, left: 20, bottom: 5 }}>
                <CartesianGrid strokeDasharray="0 0" />
                <XAxis dataKey="letterDay" />
                <Tooltip content={<CustomizedTooltipSession />}  />
                <Line type="monotone" dataKey="sessionLength" stroke="white" />
            </LineChart>
        </ResponsiveContainer>
    )
}

export default LineChartActivity;