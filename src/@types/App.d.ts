interface Menu {
    text: string;
    uri: string;
    desc: string;
}

type RootStackParamList = {
    Home: undefined;
    Menu: undefined;
    Food: undefined;
    Drink: undefined;
    Sweets: undefined;
    Order: undefined;
    Test: undefined;
}

declare module "*.jpg";