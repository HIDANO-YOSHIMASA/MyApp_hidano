interface MenuInfo {
    pic:string;
    title: string;
    text: string;
    price: number;
    createdAt:number;
}

interface List {
    title:string;
    price: number,
    createdAt: number
}

type RootStackParamList = {
    Home: undefined;
    Menu: undefined;
    Food: undefined;
    Order: {menuInfo: MenuInfo};
    Result: undefined;
}

declare module "*.jpg";