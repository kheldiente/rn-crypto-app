export type Service = {
    id: string;
    name: string;
    imageUrl?: string;
};

export type ServiceList = {
    list: Service[];
};