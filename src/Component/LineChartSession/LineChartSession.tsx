import {LineChart, XAxis, Tooltip, Line, ResponsiveContainer, Legend, YAxis} from "recharts";
import {UseCallApiSession} from "../../Api/UseCallApi.ts";
import CustomLineChartTooltip from "../../Custom/CustomLineChartTooltip/CustomLineChartTooltip.tsx"
import CustomLineChartLegend from "../../Custom/CustomLineChartLegend/CustomLineChartLegend.tsx"

const LineChartSession = () => {
    const data = UseCallApiSession();
    const sessions = data.data?.sessions;
    const day: string[] = ["L", "M", "M", "J", "V", "S", "D"];

    if(sessions) {
        day.forEach((day: string, index: number) => {
            Object.defineProperty(sessions[index], 'days', {
                value: day,
                writable: false
            })
        })
    }

    return (
        <ResponsiveContainer width={"30%"} height={300} className='objectif-responsive'>
            <LineChart data={data.data?.sessions}
                       margin={{ top: 50, right: 10, left: 10, bottom: 20 }}
                       style={{backgroundColor: "var(--red)", borderRadius: "7px"}}
                       onMouseMove={(e) => {
                           if (e.isTooltipActive === true) {
                               const div = document.querySelector('.objectif-responsive > .recharts-wrapper');
                               if (e.isTooltipActive) {
                                   const windowWidth = div.clientWidth;
                                   const mouseXpercentage = Math.round((e.activeCoordinate.x / windowWidth) * 100)
                                   div.style.background = `linear-gradient(90deg, rgba(255,0,0,1) ${mouseXpercentage}%, rgba(175,0,0,1.5) ${mouseXpercentage}%, rgba(175,0,0,1.5) 100%)`
                               }
                           }
                       }}

            >
                <XAxis dataKey="days" tickLine={false} tickSize={20} stroke='#FFFFFF' opacity={0.5} axisLine={false} />
                <YAxis padding={{ top: 50 }} stroke='#FFFFFF' opacity={0.5} tickLine={false} axisLine={false} hide />
                <Legend content={<CustomLineChartLegend />} verticalAlign="top" wrapperStyle={{marginLeft: "20px"}}/>
                <Tooltip content={<CustomLineChartTooltip />} />
                <Line type='basis' dataKey="sessionLength" stroke='#FFFFFF' dot={false} strokeWidth={2} legendType='none'  />
            </LineChart>
        </ResponsiveContainer>

    )
}

export default LineChartSession;