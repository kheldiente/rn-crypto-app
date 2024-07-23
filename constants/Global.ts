import { Coin, CoinList, sampleCoinData} from "@/data/coin";
import { Service, ServiceList } from "@/data/service";

export const hostIconUrl = "https://raw.githubusercontent.com/kheldiente/cryptocurrency-icons/master/icons";

const getIconUrl = (id) => {
    return `${hostIconUrl}/${id}.png`
};
export const mockCoinData: CoinList = sampleCoinData.data.map(v => ({...v, hostIconUrl: getIconUrl(v.id)}));

export const servicesInHomeList: ServiceList = {
    "list": [
        {
            id: "1",
            name: "Cash in",
            imageUrl: "trending-up-outline"
        },
        {
            id: "2",
            name: "Cash out",
            imageUrl: "trending-down-outline"
        },
        {
            id: "3",
            name: "Buy Load",
            imageUrl: "call-outline"
        },
        {
            id: "4",
            name: "Pay Bills",
            imageUrl: "card-outline"
        }
    ]
};