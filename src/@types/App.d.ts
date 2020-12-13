interface MenuInfo {
    pic:string;
    title: string;
    text: string;
    price: number;
    createdAt:number;
}

interface List {
    title:string;
    finalResult: number,
    createdAt: number
}

type RootStackParamList = {
    Home: undefined;
    Menu: undefined;
    Food: undefined;
    Order: {menuInfo: MenuInfo};
    Result: {menuInfo: MenuInfo};
}

declare module "*.jpg";