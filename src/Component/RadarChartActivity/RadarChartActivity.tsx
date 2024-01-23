
import {PolarGrid, RadarChart, PolarAngleAxis, Radar, ResponsiveContainer, Legend} from 'recharts';
import {UseCallApiPerformance} from "../../CustomHooks/UseCallApi/UseCallApi.ts";

const RadarChartActivity = () => {
    const [data] = UseCallApiPerformance();
    console.log(data)

    return (
        <div style={{width: "33%", height:"60%", border:'1px solid red'}}>
            <ResponsiveContainer width="100%" height="100%">
                <RadarChart outerRadius={90} width={300} height={250} data={""}>
                    <PolarGrid />
                    <PolarAngleAxis dataKey={data} stroke='#FFFFFF' fontSize={14} tickLine={false} />
                    <Radar dataKey='kind' stroke='#E60000' fill='#E60000' fillOpacity={0.7} legendType='none' />
                    <Legend />
                </RadarChart>
            </ResponsiveContainer>
        </div>
    )
}

export default RadarChartActivity;