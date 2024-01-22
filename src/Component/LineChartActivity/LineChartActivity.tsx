import { LineChart, Line, XAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
import {UseCallApiSession} from "../../CustomHooks/UseCallApi/UseCallApi.tsx";
import CustomizedTooltipSession from "../../CustomChart/CustomizedTooltipSession/CustomizedTooltipSession.tsx";

const LineChartActivity = () => {
    const [data] = UseCallApiSession();
    console.log(data)

    return (
        <ResponsiveContainer width="100%" height="100%" style={{backgroundColor:"var(--red)"}}>
            <LineChart width={258} height={263} data={data?.data?.sessions}
                       margin={{ top: 5, right: 30, left: 20, bottom: 5 }}>
                <CartesianGrid strokeDasharray="0 0" />
                <XAxis dataKey="day" />
                <Tooltip content={<CustomizedTooltipSession />}  />
                <Line type="monotone" dataKey="sessionLength" stroke="white" />
            </LineChart>
        </ResponsiveContainer>
    )
}

export default LineChartActivity;