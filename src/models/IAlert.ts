export default interface IAlert {
    Type: TypeAlert;
    Title: string;
    description: string;
    IsCustomError?: boolean;
    RedirectLink?: string;
}

export enum TypeAlert {
    primary,
    secondary,
    success,
    danger,
    warning,
    info,
    light,
    dark
}