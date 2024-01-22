
import {Radar, PolarGrid, RadarChart, PolarAngleAxis, PolarRadiusAxis, ResponsiveContainer, Legend} from 'recharts';
import UseCallApi from "../../CustomHooks/UseCallApi/UseCallApi.tsx";

const RadarChartActivity = () => {
    const [data] = UseCallApi('12', 'performance');

    return (
        <ResponsiveContainer width="100%" height="100%">
            <RadarChart cx="50%" cy="50%" outerRadius="80%" data={data.kind}>
                <PolarGrid />
                <PolarAngleAxis dataKey="subject" />
                <PolarRadiusAxis angle={30} domain={[0, 150]} />
                <Radar name="Mike" dataKey="A" stroke="#8884d8" fill="#8884d8" fillOpacity={0.6} />
                <Radar name="Lily" dataKey="B" stroke="#82ca9d" fill="#82ca9d" fillOpacity={0.6} />
                <Legend />
            </RadarChart>
        </ResponsiveContainer>
    )
}

export default RadarChartActivity;