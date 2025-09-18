import { useQuery } from "@tanstack/react-query";
import { getTales } from "../database/tales";

export const useTalesQuery = () =>{
    return useQuery({
        queryKey: ['tales'],
        queryFn: getTales,
    })
}