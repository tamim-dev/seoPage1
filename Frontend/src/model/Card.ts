export interface ICardProps {
    title?: string;
    children?: React.ReactNode;
    progressColor?: string;
}

export interface IClientCardProps {
    data: {
        client: {
            name: string;
            avatar: string;
        };
        user: {
            name: string;
            avatar: string;
        };
        content: {
            text: string;
            badge: string;
        };
        actions: Array<{
            type: string;
            src?: string;
            text?: string;
            date?: string;
        }>;
    };
}
