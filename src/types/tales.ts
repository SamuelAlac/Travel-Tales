export type TaleProp = {
    taleID: string;
}

export type Story = {
  Topic: string;
  Message: string;
}

export type CreateTaleMutation = {
    taleData: {
        Author: string | undefined | null;
        AuthorID: string | undefined | null;
        Title: string;
        Description: string;
        Story: Story[]
    }
}

export type UpdateTaleMutation = {
    taleID: string;
    taleData: {
        Title: string;
        Description: string;
        Story: Story[];
    };
}