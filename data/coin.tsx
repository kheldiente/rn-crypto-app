export type Coin = {
    id: string;
    rank: string;
    symbol: string;
    name: string;
    supply: string;
    maxSupply: string;
    marketCapUsd: string;
    volumeUsd24Hr: string;
    changePercent24Hr: string;
    vwap24Hr: string;
    explorer: string;
    hostIconUrl: string;
}

export type CoinList = {
    data: Coin[];
}

export const sampleCoinData: CoinList = {
    "data": [
        {
            "id": "bitcoin",
            "rank": "1",
            "symbol": "BTC",
            "name": "Bitcoin",
            "supply": "19712456.0000000000000000",
            "maxSupply": "21000000.0000000000000000",
            "marketCapUsd": "1267191356406.3111808018373136",
            "volumeUsd24Hr": "2815730637.4532217939148897",
            "priceUsd": "64283.7887073184173906",
            "changePercent24Hr": "0.2577649811776509",
            "vwap24Hr": "64362.6937377233017762",
            "explorer": "https://blockchain.info/"
        },
        {
            "id": "ethereum",
            "rank": "2",
            "symbol": "ETH",
            "name": "Ethereum",
            "supply": "120155065.8378261900000000",
            "maxSupply": null,
            "marketCapUsd": "419421334036.0895000118918252",
            "volumeUsd24Hr": "2780957335.9039405281868647",
            "priceUsd": "3490.6670901598462895",
            "changePercent24Hr": "-0.9718964984871437",
            "vwap24Hr": "3503.9587214300272016",
            "explorer": "https://etherscan.io/"
        },
        {
            "id": "tether",
            "rank": "3",
            "symbol": "USDT",
            "name": "Tether",
            "supply": "112559949271.1193700000000000",
            "maxSupply": null,
            "marketCapUsd": "112597952696.1276618420113459",
            "volumeUsd24Hr": "4907817933.2916730653904644",
            "priceUsd": "1.0003376283061105",
            "changePercent24Hr": "0.0409327674470139",
            "vwap24Hr": "1.0006235510036345",
            "explorer": "https://www.omniexplorer.info/asset/31"
        },
        {
            "id": "binance-coin",
            "rank": "4",
            "symbol": "BNB",
            "name": "BNB",
            "supply": "166801148.0000000000000000",
            "maxSupply": "166801148.0000000000000000",
            "marketCapUsd": "97945660744.0301182982866172",
            "volumeUsd24Hr": "63971994.7275978337834785",
            "priceUsd": "587.2001597017193089",
            "changePercent24Hr": "0.2468274981417408",
            "vwap24Hr": "585.5835401516668635",
            "explorer": "https://etherscan.io/token/0xB8c77482e45F1F44dE1745F52C74426C631bDD52"
        },
        {
            "id": "solana",
            "rank": "5",
            "symbol": "SOL",
            "name": "Solana",
            "supply": "461692203.9830211000000000",
            "maxSupply": null,
            "marketCapUsd": "61934309134.3889271747900487",
            "volumeUsd24Hr": "116497218.1569507874977471",
            "priceUsd": "134.1463178283742129",
            "changePercent24Hr": "0.9006809335996461",
            "vwap24Hr": "134.1460897170457324",
            "explorer": "https://explorer.solana.com/"
        },
        {
            "id": "usd-coin",
            "rank": "6",
            "symbol": "USDC",
            "name": "USDC",
            "supply": "32441767268.1319430000000000",
            "maxSupply": null,
            "marketCapUsd": "32458934789.6210842527234170",
            "volumeUsd24Hr": "214061719.3692365865924003",
            "priceUsd": "1.0005291796019388",
            "changePercent24Hr": "-0.0204516551955726",
            "vwap24Hr": "1.0002201991796841",
            "explorer": "https://etherscan.io/token/0xa0b86991c6218b36c1d19d4a2e9eb0ce3606eb48"
        },
        {
            "id": "xrp",
            "rank": "7",
            "symbol": "XRP",
            "name": "XRP",
            "supply": "45404028640.0000000000000000",
            "maxSupply": "100000000000.0000000000000000",
            "marketCapUsd": "22134022961.3040540843112800",
            "volumeUsd24Hr": "152903882.0630168541549570",
            "priceUsd": "0.4874902871901645",
            "changePercent24Hr": "0.4617715887794101",
            "vwap24Hr": "0.4877885567935046",
            "explorer": "https://xrpcharts.ripple.com/#/graph/"
        },
        {
            "id": "dogecoin",
            "rank": "8",
            "symbol": "DOGE",
            "name": "Dogecoin",
            "supply": "144724306383.7052000000000000",
            "maxSupply": null,
            "marketCapUsd": "17990232433.7071867520017838",
            "volumeUsd24Hr": "72867386.4681667279824311",
            "priceUsd": "0.1243069176369723",
            "changePercent24Hr": "-0.1030994180123935",
            "vwap24Hr": "0.1243254823242968",
            "explorer": "http://dogechain.info/chain/Dogecoin"
        },
        {
            "id": "cardano",
            "rank": "9",
            "symbol": "ADA",
            "name": "Cardano",
            "supply": "35725385402.0400000000000000",
            "maxSupply": "45000000000.0000000000000000",
            "marketCapUsd": "13767977377.7615377226131953",
            "volumeUsd24Hr": "88334657.4792680548011036",
            "priceUsd": "0.3853835927260663",
            "changePercent24Hr": "1.7065674944916723",
            "vwap24Hr": "0.3795845836917282",
            "explorer": "https://cardanoexplorer.com/"
        },
        {
            "id": "shiba-inu",
            "rank": "10",
            "symbol": "SHIB",
            "name": "Shiba Inu",
            "supply": "589271378849348.2000000000000000",
            "maxSupply": null,
            "marketCapUsd": "10699693261.3508318325111186",
            "volumeUsd24Hr": "34686510.7496497810758350",
            "priceUsd": "0.0000181574969452",
            "changePercent24Hr": "1.3209926455808146",
            "vwap24Hr": "0.0000180198569865",
            "explorer": "https://etherscan.io/token/0x95ad61b0a150d79219dcf64e1e6cc01f0b64c4ce"
        },
        {
            "id": "tron",
            "rank": "11",
            "symbol": "TRX",
            "name": "TRON",
            "supply": "87282705362.6485300000000000",
            "maxSupply": null,
            "marketCapUsd": "10451188151.2930858476443110",
            "volumeUsd24Hr": "65052479.3440696333784968",
            "priceUsd": "0.1197395074759625",
            "changePercent24Hr": "1.1003309460015305",
            "vwap24Hr": "0.1193690194142945",
            "explorer": "https://tronscan.org/#/"
        },
        {
            "id": "avalanche",
            "rank": "12",
            "symbol": "AVAX",
            "name": "Avalanche",
            "supply": "393329066.4362682000000000",
            "maxSupply": "715748719.0000000000000000",
            "marketCapUsd": "10130980828.7763694423256777",
            "volumeUsd24Hr": "163460550.5462409022768969",
            "priceUsd": "25.7570103337834812",
            "changePercent24Hr": "-6.9453007824387529",
            "vwap24Hr": "25.9794645478710304",
            "explorer": "https://avascan.info/"
        },
        {
            "id": "wrapped-bitcoin",
            "rank": "13",
            "symbol": "WBTC",
            "name": "Wrapped Bitcoin",
            "supply": "153235.7378324500000000",
            "maxSupply": null,
            "marketCapUsd": "9849248316.0256613509120847",
            "volumeUsd24Hr": "36163163.8260434639364479",
            "priceUsd": "64275.1387851505035618",
            "changePercent24Hr": "0.1645048527555034",
            "vwap24Hr": "64426.0600717461274021",
            "explorer": "https://etherscan.io/token/0x2260fac5e5542a773aa44fbcfedf7c193bc2c599"
        },
        {
            "id": "chainlink",
            "rank": "14",
            "symbol": "LINK",
            "name": "Chainlink",
            "supply": "587099970.4527867000000000",
            "maxSupply": null,
            "marketCapUsd": "7996571846.5576399569931051",
            "volumeUsd24Hr": "93971021.8328927932020725",
            "priceUsd": "13.6204603117088844",
            "changePercent24Hr": "-3.6580249833793264",
            "vwap24Hr": "13.8124908475264563",
            "explorer": "https://etherscan.io/token/0x514910771af9ca656af840dff83e8264ecf986ca"
        },
        {
            "id": "polkadot",
            "rank": "15",
            "symbol": "DOT",
            "name": "Polkadot",
            "supply": "1379332882.0379100000000000",
            "maxSupply": null,
            "marketCapUsd": "7936781576.3714810259945390",
            "volumeUsd24Hr": "53692747.2709772795270089",
            "priceUsd": "5.7540726243292329",
            "changePercent24Hr": "2.2392291766253541",
            "vwap24Hr": "5.6673247384234130",
            "explorer": "https://polkascan.io/polkadot"
        },
        {
            "id": "bitcoin-cash",
            "rank": "16",
            "symbol": "BCH",
            "name": "Bitcoin Cash",
            "supply": "19719903.1250000000000000",
            "maxSupply": "21000000.0000000000000000",
            "marketCapUsd": "7798604855.0940427257686259",
            "volumeUsd24Hr": "40294572.2817119451163737",
            "priceUsd": "395.4687203918017587",
            "changePercent24Hr": "2.5005683987380708",
            "vwap24Hr": "387.3780300109955350",
            "explorer": "https://blockchair.com/bitcoin-cash/blocks"
        },
        {
            "id": "uniswap",
            "rank": "17",
            "symbol": "UNI",
            "name": "Uniswap",
            "supply": "599957294.7100000000000000",
            "maxSupply": null,
            "marketCapUsd": "5921132593.0487165699683347",
            "volumeUsd24Hr": "47281975.1727180509701479",
            "priceUsd": "9.8692567708686683",
            "changePercent24Hr": "-0.1560537732800110",
            "vwap24Hr": "9.8646473544557695",
            "explorer": "https://etherscan.io/token/0x1f9840a85d5af5bf1d1762f925bdaddc4201f984"
        },
        {
            "id": "polygon",
            "rank": "18",
            "symbol": "MATIC",
            "name": "Polygon",
            "supply": "9897485459.8402480000000000",
            "maxSupply": null,
            "marketCapUsd": "5634243293.6225074159480914",
            "volumeUsd24Hr": "40966058.8333831864074642",
            "priceUsd": "0.5692600728219153",
            "changePercent24Hr": "-1.0826053365800135",
            "vwap24Hr": "0.5694953486102451",
            "explorer": "https://etherscan.io/token/0x7D1AfA7B718fb893dB30A3aBc0Cfc608AaCfeBB0"
        },
        {
            "id": "near-protocol",
            "rank": "19",
            "symbol": "NEAR",
            "name": "NEAR Protocol",
            "supply": "1088588652.0000000000000000",
            "maxSupply": null,
            "marketCapUsd": "5608001892.7807521225372900",
            "volumeUsd24Hr": "34519278.1103083661338643",
            "priceUsd": "5.1516262662462075",
            "changePercent24Hr": "-4.2185760084016660",
            "vwap24Hr": "5.3116109960761812",
            "explorer": "https://explorer.nearprotocol.com/"
        },
        {
            "id": "litecoin",
            "rank": "20",
            "symbol": "LTC",
            "name": "Litecoin",
            "supply": "74646199.8575049000000000",
            "maxSupply": "84000000.0000000000000000",
            "marketCapUsd": "5581940963.7084980940924831",
            "volumeUsd24Hr": "91287318.6616217767386794",
            "priceUsd": "74.7786354076173633",
            "changePercent24Hr": "1.1539644839585528",
            "vwap24Hr": "74.1772273608882523",
            "explorer": "http://explorer.litecoin.net/chain/Litecoin"
        }
    ],
    "timestamp": 1719085238868
};