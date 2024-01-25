import useSWR from "swr";
import {PerformanceProps, SessionProps, ActivityProps, MainDataProps}  from "../../Interface/CallApiProps.tsx";


const fetcher = (url: string) => fetch(url).then((r) => r.json());

export const UseCallApi = (): MainDataProps[] | string => {
    const apiUrl = `http://localhost:3000/user/12`;

    const {data, error, isLoading} = useSWR(
        apiUrl,
        fetcher
    );
    if (error) throw new Error("Unable to recover data");
    if (isLoading) return "Loading";

    return [data]
}

export const UseCallApiActivity = (): ActivityProps[] | string => {
    const apiUrl = `http://localhost:3000/user/12/activity`;

    const {data, error, isLoading} = useSWR(
        apiUrl,
        fetcher
    );
    if (error) throw new Error("Unable to recover data");
    if (isLoading) return "Loading";

    return [data];
}

export const UseCallApiPerformance = (): PerformanceProps[] | string => {
    const apiUrl = `http://localhost:3000/user/12/performance`;

    const {data, error, isLoading} = useSWR(
        apiUrl,
        fetcher
    );
    if (error) throw new Error("Unable to recover data");
    if (isLoading) return "Loading";

    return [data];
}

export const UseCallApiSession = (): SessionProps[] | string => {
    const apiUrl = `http://localhost:3000/user/12/average-sessions`;

    const {data, error, isLoading} = useSWR(
        apiUrl,
        fetcher
    );
    if (error) throw new Error("Unable to recover data");
    if (isLoading) return "Loading";

    return [data]
}

