interface IClient {
    _id: string;
    name: string;
    avatar: string;
}

interface IUser {
    _id: string;
    name: string;
    avatar: string;
}

interface IContent {
    _id: string;
    text: string;
    badge: string;
}

interface IAction {
    _id: string;
    type: string;
    src?: string;
    text?: string;
    date?: string;
}

export interface IDataItem {
    _id: string;
    client: IClient;
    user: IUser;
    content: IContent;
    actions: IAction[];
    createdAt: string;
    updatedAt: string;
    __v: number;
}
