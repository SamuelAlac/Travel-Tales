export type UserQuery = {
    userID: string;
}

export type CreateUserMutation = {
    userData: {
        Username: string;
        Email: string;
    }
}