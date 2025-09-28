import { useMutation, useQueryClient } from "@tanstack/react-query"
import { createTale } from "../database/tales"

export const useTaleMutation = () =>{
    const queryClient = useQueryClient();

    return useMutation({
        mutationKey: ['createTale'],
        mutationFn: createTale,
        onSuccess: () =>{
            // refetches the tales after success
            queryClient.invalidateQueries({ queryKey: ['tales'] });
        },
        onError: (error) =>{
            console.log(`Error creating tale: ${error}`)
        }
    })
}