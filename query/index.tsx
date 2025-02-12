import {useQuery} from "@tanstack/react-query";

interface fetchProps {
	url: string;
	method?: "GET" | "POST" | "DELETE" | "PUT";
	body?: object;
	headers?: HeadersInit;
	params?: any;
}

const useFetchFunc = () => {
	const response = async ({
		url,
		method = "GET",
		body,
		headers,
		params,
	}: fetchProps) => {
		const queryParams = params
			? "?" + new URLSearchParams(params as Record<string, string>).toString()
			: "";

		const res = await fetch(
			`${process.env.NEXT_PUBLIC_API}${url}${queryParams}`,
			{
				method,
				body: body ? JSON.stringify(body) : undefined,
				headers: {
					"Content-Type": "application/json",
					...headers,
				},
			}
		);

		if (!res.ok) throw new Error(`Failed: ${res.statusText} :(`);

		return res.json();
	};

	return response;
};

export function useGetQuery(url: string, params?: any) {
	const fetchData = useFetchFunc();
	return useQuery({
		queryKey: ["GET", url, params],
		queryFn: () => fetchData({url, method: "GET", params}),
	});
}
