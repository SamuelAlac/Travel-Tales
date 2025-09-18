import { useQuery } from "@tanstack/react-query"
import { getTale } from "../database/tales"
import type { TaleProp } from "../types/tales"

export const useTaleIDQuery = ({ taleID }: TaleProp) =>{
    return useQuery({
        queryKey: ['tales', taleID],
        queryFn: () => getTale({ taleID }),
    })
}