import Storage from "react-native-storage";
import AsyncStorage from "@react-native-community/async-storage";

const storage = new Storage({
    size: 1000,
    storageBackend: AsyncStorage,
    defaultExpires: 1000 * 3600 * 24,
    enableCache: true,
});

export const save = (title: string, price: number, createdAt: number) => {
    const key = 'menu';
    storage.save({
        key: key,           
        id: `${createdAt}`,     
        data: {
            title: title,
            price: price,
            createdAt: createdAt,
        },
        });
        // alert("保存されました");
}

export const loadAll = async () => {                            
    const key = "menu";                                           
    const menus = await storage.getAllDataForKey(key);            
    return menus;                                                 
};      