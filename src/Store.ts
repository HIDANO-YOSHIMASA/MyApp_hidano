import Storage from "react-native-storage";
import AsyncStorage from "@react-native-community/async-storage";

const storage = new Storage({
    size: 1000,
    storageBackend: AsyncStorage,
    defaultExpires: 1000 * 3600 * 24, //milliseconds 24時間
    enableCache: true,
});

export const save = (uri: string, title: string, text: string, price: number) => {
    const key = 'menu';
    storage.save({
        key: key,           
        id: `${createdAt}`,     
        data: {
            text: text,
            createdAt: createdAt,
        },
        });
        alert("保存されました");
}