import {RadarChart, PolarGrid, PolarAngleAxis, Radar, ResponsiveContainer} from "recharts";
import {UseCallApiPerformance} from "../../Api/UseCallApi.ts";

const RadarChartPerformance = () => {
    const data = UseCallApiPerformance();
    const newData: any[] = [];

    data.data?.data.forEach((item:{kind: number, value: string}) => {
        newData.push({name: data.data.kind[item.kind], value: item.value})
    })

    return (
        <ResponsiveContainer width={"30%"} height={300} style={{backgroundColor: "var(--darkGray)", borderRadius:"5px"}}>
            <RadarChart outerRadius={90} data={newData} >
                <PolarGrid />
                <PolarAngleAxis dataKey="name" stroke='#FFFFFF' fontSize={14} tickLine={false} />
                <Radar dataKey="value" stroke='#E60000' fill='#E60000' fillOpacity={0.7} legendType='none' />
            </RadarChart>
        </ResponsiveContainer>
    )
}

export default RadarChartPerformance;