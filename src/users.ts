export const users: Array<UsersType> = [
    {userName: 'marcos vinicius', userPassword: '1234', ocupation: 'médico'},
    {userName: 'maria', userPassword: '123', ocupation: 'enfermeira'}
];

export type UsersType = {
    userName: string,
    userPassword: string,
    ocupation: string
}