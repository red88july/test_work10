export interface NewsPost {
    title: string;
    content: string;
    image: string | null;
}

export interface CommentsPost {
    news_id: number;
    author?: string;
    comment: string;
}