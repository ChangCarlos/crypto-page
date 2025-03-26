import { Search } from "lucide-react";
import { Categories, CategoriesNavBar, CategoriesTitle, Category, CategoryContainer, Chart, ChartContainer, CoinContainer, CoinDataContainer, CoinId, CoinIdName, CoinIdNameContainer, CoinImg, CoinName, CoinNameContainer, Columns, Divider, MarketContainer, PercentContainer, SearchContainer, SearchInput, TableCrypto, TableHeader, TableHeaderTitle, Text, Title, TradeButton, ValueContainer } from "./MarketUpdate";

const allCategories = [
    'Popular',
    'Metaverse',
    'Entertainment',
    'Energy',
    'Gaming',
    'Music',
    'See All 12+'
]

const allCoins = [
    {
        id: 1,
        img: '/btc-icon.png',
        name: 'Bitcoin',
        alias: 'BTC',
        value: '$56,623.54',
        percent: '1.41%',
        chart: '/chart-state-1.png'
    },
    {
        id: 2,
        img: '/eth-icon.png',
        name: 'Ethereum',
        alias: 'ETH',
        value: '$4,267.90',
        percent: '2.22%',
        chart: '/chart-state-2.png'
    },
    {
        id: 3,
        img: '/bnb-icon.png',
        name: 'Binance',
        alias: 'BNB',
        value: '$587.74',
        percent: '-0.82%',
        chart: '/chart-state-3.png'
    },
    {
        id: 4,
        img: '/usdt-icon.png',
        name: 'Tether',
        alias: 'USDT',
        value: '$0.9998',
        percent: '-0.03%',
        chart: '/chart-state-4.png'
    },
    {
        id: 5,
        img: '/sol-icon.png',
        name: 'Solana',
        alias: 'SOL',
        value: '$213.67',
        percent: '-0.53%',
        chart: '/chart-state-5.png'
    },
    {
        id: 6,
        img: '/xrp-icon.png',
        name: 'XRP',
        alias: 'XRP',
        value: '$1.04',
        percent: '-0.44%',
        chart: '/chart-state-6.png'
    },
    {
        id: 7,
        img: '/usdc-icon.png',
        name: 'USD Coin',
        alias: 'USDC',
        value: '$1.00',
        percent: '-0.03%',
        chart: '/chart-state-7.png'
    },
]

const MarketUpdate = () => {
    const categories = allCategories.map(category => <Category>{category}</Category>)
    const coins = allCoins.map(coin => {
        return (
            <CoinContainer>
                <CoinIdNameContainer>
                    <CoinId>
                        <Text>
                            {coin.id}
                        </Text>
                    </CoinId>
                    <CoinNameContainer>
                        <CoinImg src={coin.img} />
                        <CoinName>
                            <Text>
                                {coin.name}
                            </Text>
                            <Divider />
                            <Text>
                                {coin.alias}
                            </Text>
                        </CoinName>
                    </CoinNameContainer>
                </CoinIdNameContainer>
                <CoinDataContainer>
                    <ValueContainer>
                        <Text>
                            {coin.value}
                        </Text>
                    </ValueContainer>
                    <PercentContainer>
                        <Text>
                            {coin.percent}
                        </Text>
                    </PercentContainer>
                    <ChartContainer>
                        <Chart src={coin.chart} />
                    </ChartContainer>
                    <TradeButton>
                        Trade
                    </TradeButton>
                </CoinDataContainer>
            </CoinContainer>
        )
    })

    return (
        <MarketContainer>
            <Title>
                Market Update
            </Title>
            <CategoryContainer>
                <CategoriesTitle>
                    Cryptocurrency Categories
                </CategoriesTitle>
                <CategoriesNavBar>
                    <Categories>
                        {categories}
                    </Categories>
                    <SearchContainer>
                        <Search
                            size={24}
                            color="#B6B6B6"
                        />
                        <SearchInput
                            type="text"
                            placeholder="Search Coin"
                        />
                    </SearchContainer>
                </CategoriesNavBar>
            </CategoryContainer>
            <TableCrypto>
                <TableHeader>
                    <CoinIdName>
                        <TableHeaderTitle>
                            NO
                        </TableHeaderTitle>
                        <TableHeaderTitle>
                            NAME
                        </TableHeaderTitle>
                    </CoinIdName>
                    <Columns>
                        <TableHeaderTitle>
                            LAST PRICE
                        </TableHeaderTitle>
                        <TableHeaderTitle>
                            CHANGE
                        </TableHeaderTitle>
                        <TableHeaderTitle>
                            MARKET STATS
                        </TableHeaderTitle>
                        <TableHeaderTitle>
                            TRADE
                        </TableHeaderTitle>
                    </Columns>
                </TableHeader>
                {coins}
            </TableCrypto>
        </MarketContainer>
    )
}

export default MarketUpdate;