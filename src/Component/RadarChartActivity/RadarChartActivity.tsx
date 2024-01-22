
import {PolarGrid, RadarChart, PolarAngleAxis, Radar, ResponsiveContainer, Legend} from 'recharts';
import {UseCallApiPerformance} from "../../CustomHooks/UseCallApi/UseCallApi.tsx";

const RadarChartActivity = () => {
    const [data] = UseCallApiPerformance();

    return (
        <div style={{width: "33%", height:"60%", border:'1px solid red'}}>
            <ResponsiveContainer width="100%" height="100%">
                <RadarChart outerRadius={90} width={300} height={250} data={data.data}>
                    <PolarGrid />
                    <PolarAngleAxis dataKey={data.kind} stroke='#FFFFFF' fontSize={14} tickLine={false} />
                    <Radar dataKey='value' stroke='#E60000' fill='#E60000' fillOpacity={0.7} legendType='none' />
                    <Legend />
                </RadarChart>
            </ResponsiveContainer>
        </div>

    )
}

export default RadarChartActivity;