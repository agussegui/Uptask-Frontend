import { useQuery } from "@tanstack/react-query";
import { getUser } from "@/api/AuthAPI";

export const useAuth = () => {
    const {data, isError, isLoading} = useQuery({
        queryKey: ['user'],
        queryFn: getUser,
        retry: 1,
        refetchOnWindowFocus: false //Esto lo que hace es cuando voy de una pagina a otra que no recargue la de UpTask
    })

    return {data, isError, isLoading}
}