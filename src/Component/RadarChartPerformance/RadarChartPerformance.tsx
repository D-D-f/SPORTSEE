import {RadarChart, PolarGrid, PolarAngleAxis, Radar, ResponsiveContainer} from "recharts";
import {UseCallApiPerformance} from "../../Api/UseCallApi.ts";
import {PerformanceProps} from "../../Interface/InterfaceProps.ts";

const RadarChartPerformance = () => {
    const data: string | PerformanceProps = UseCallApiPerformance();
    let dataPerformance: any;
    const newData: [] = [];

    if(!(typeof data === "string")) {
        dataPerformance = data;
    }

    dataPerformance?.data.forEach((item:{kind: number, value: number}) => {
        newData.push({name: dataPerformance?.kind[item.kind], value: item.value})
    })

    return (
        <ResponsiveContainer width={"30%"} height={250} style={{backgroundColor: "var(--darkGray)", borderRadius:"5px"}}>
            <RadarChart outerRadius={40} data={newData} >
                <PolarGrid />
                <PolarAngleAxis dataKey="name" stroke='#FFFFFF' fontSize={14} tickLine={false} />
                <Radar dataKey="value" stroke='#E60000' fill='#E60000' fillOpacity={0.7} legendType='none' />
            </RadarChart>
        </ResponsiveContainer>
    )
}

export default RadarChartPerformance;