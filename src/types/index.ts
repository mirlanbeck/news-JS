export interface ISource {
    id: string;
    name: string;
    description: string;
    url: string;
    category: string;
    language: string;
    country: string;
}
export interface IArticle {
    source: Pick<ISource, 'id' | 'name'>; // утилитарный тип Pick
    author: string | null; // union type
    title: string;
    description: string;
    url: string;
    urlToImage: string | null;
    publishedAt: string;
    content: string | null;
}
export interface ISourcesResponse {
    status: string;
    sources: ISource[];
}
export interface INewsResponse {
    status: string;
    totalResults: number;
    articles: IArticle[];
}

export enum Endpoint {
    Sources = 'sources',
    Everything = 'everything',
}
export enum StatusCode {
    Unauthorized = 401,
    NotFound = 404,
}

export type HttpMethod = 'GET' | 'POST'; //union type

export interface IRequest {
    endpoint: Endpoint;
    options?: Options; // необязательное поле
}

export type Callback<T> = (data: T) => void; // generic + function type
export type Options = Partial<Record<'apiKey' | 'sources', string>>; // Partial
