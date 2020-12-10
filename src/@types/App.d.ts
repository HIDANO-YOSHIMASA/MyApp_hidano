interface FoodMenu {
    uri:string;
    title: string;
    text: string;
}

type RootStackParamList = {
    Home: undefined;
    Menu: undefined;
    Food: undefined;
    Order: undefined;
    Result: undefined;
}

declare module "*.jpg";