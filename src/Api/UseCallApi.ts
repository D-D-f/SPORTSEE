import useSWR from "swr";
import {ActivityProps, MainDataProps, PerformanceProps} from "../Interface/InterfaceProps.ts";

const fetcher = (url: string) => fetch(url).then((r) => r.json());

const USER_ID: number = 12;

export const UseCallApi = (): string | MainDataProps  => {
    const apiUrl = `http://localhost:3000/user/${USER_ID}`;

    const { data, error, isLoading } = useSWR(apiUrl, fetcher);

    if (error) throw new Error("Unable to recover data");
    if (isLoading) return "Loading";

    return {
        ...data.data,
        type: "MainData"
    };
};

export const UseCallApiActivity = (): string | ActivityProps => {
    const apiUrl = `http://localhost:3000/user/${USER_ID}/activity`;

    const {data, error, isLoading} = useSWR(
        apiUrl,
        fetcher
    );
    if (error) throw new Error("Unable to recover data");
    if (isLoading) return "Loading";

    return {
        ...data.data,
        type: "Activity"
    };
}

export const UseCallApiPerformance = (): string | PerformanceProps => {
    const apiUrl = `http://localhost:3000/user/${USER_ID}/performance`;

    const {data, error, isLoading} = useSWR(
        apiUrl,
        fetcher
    );
    if (error) throw new Error("Unable to recover data");
    if (isLoading) return "Loading";

    return {
        ...data.data,
        type: "Performance"
    };
}

export const UseCallApiSession = () => {
    const apiUrl = `http://localhost:3000/user/${USER_ID}/average-sessions`;

    const {data, error, isLoading} = useSWR(
        apiUrl,
        fetcher
    );
    if (error) throw new Error("Unable to recover data");
    if (isLoading) return "Loading";

    return {
        ...data.data,
        type: "Session"
    };
}