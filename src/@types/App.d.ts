interface Menu {
    uri:string;
    title: string;
    text: string;
    price: number;
}

type RootStackParamList = {
    Home: undefined;
    Menu: undefined;
    Food: undefined;
    Order: undefined;
    Result: undefined;
}

declare module "*.jpg";