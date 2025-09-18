export type TaleProp = {
    taleID: string;
}

export type CreateTaleMutation = {
    taleData: {
        Author: string;
        Title: string;
        Description: string;
        Topic: string;
        Message: string;
    }
}