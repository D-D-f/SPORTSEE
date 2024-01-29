import useSWR from "swr";

const fetcher = (url: string) => fetch(url).then((r) => r.json());

export const UseCallApi = ()  => {
    const apiUrl = `http://localhost:3000/user/12`;

    const { data, error, isLoading } = useSWR(apiUrl, fetcher);

    if (error) throw new Error("Unable to recover data");
    if (isLoading) return "Loading";

    return data;
};

export const UseCallApiActivity = () => {
    const apiUrl = `http://localhost:3000/user/12/activity`;

    const {data, error, isLoading} = useSWR(
        apiUrl,
        fetcher
    );
    if (error) throw new Error("Unable to recover data");
    if (isLoading) return "Loading";

    return data;
}

export const UseCallApiPerformance = () => {
    const apiUrl = `http://localhost:3000/user/12/performance`;

    const {data, error, isLoading} = useSWR(
        apiUrl,
        fetcher
    );
    if (error) throw new Error("Unable to recover data");
    if (isLoading) return "Loading";

    return data;
}

export const UseCallApiSession = () => {
    const apiUrl = `http://localhost:3000/user/12/average-sessions`;

    const {data, error, isLoading} = useSWR(
        apiUrl,
        fetcher
    );
    if (error) throw new Error("Unable to recover data");
    if (isLoading) return "Loading";

    return data;
}