import { useMutation, useQueryClient } from "@tanstack/react-query";
import type { TaleProp } from "../types/tales";
import { deleteTale } from "../database/tales";

export const useDeleteTaleMutation = () =>{
    const queryClient = useQueryClient();
    return useMutation({
        mutationKey: ['deleteTale'],
        mutationFn:({ taleID }: TaleProp) => deleteTale({ taleID }),
        onSuccess: () =>{
            // refetches the tales after success
            queryClient.invalidateQueries({ queryKey: ['tales'] });
        },
        onError: (error) =>{
            console.log(`Error creating tale: ${error}`)
        }
    })
}