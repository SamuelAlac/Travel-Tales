import { useMutation, useQueryClient } from "@tanstack/react-query"
import { updateTale } from "../database/tales"
import type { UpdateTaleMutation } from "../types/tales"

export const useTaleIDMutation = () =>{
    const queryClient = useQueryClient();
    return useMutation({
        mutationKey: ['updateTale'],
        mutationFn:({ taleID, taleData }: UpdateTaleMutation) => updateTale({ taleID, taleData }),
        onSuccess: () =>{
            // refetches the tales after success
            queryClient.invalidateQueries({ queryKey: ['tales'] });
        },
        onError: (error) =>{
            console.log(`Error creating tale: ${error}`)
        }
    })
}