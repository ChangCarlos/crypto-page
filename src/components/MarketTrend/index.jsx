import { ChevronRight } from "lucide-react";
import { Chart, Coin, CoinAlias, CoinImg, CoinInfo, CoinName, CoinTrendItem, CoinValue, Divider, MarketTrendContainer, MarketTrendContent, MarketTrendTitle, Percent, Value, ValueContainer } from "./MarketTrend"

const allCoins = [
    {
        icon: 'public/btc-icon.png',
        alias: 'BTC',
        name: 'BITCOIN',
        value: '$56,623.54',
        percent: '1.41%',
        chart: 'public/chart-state-1.png'
    },
    {
        icon: 'public/eth-icon.png',
        alias: 'ETH',
        name: 'ETHEREUM',
        value: '$4,267.90',
        percent: '2.22%',
        chart: 'public/chart-state-2.png'
    },
    {
        icon: 'public/bnb-icon.png',
        alias: 'BNB',
        name: 'BINANCE',
        value: '$587.74',
        percent: '0.82%',
        chart: 'public/chart-state-3.png'
    },
    {
        icon: 'public/usdt-icon.png',
        alias: 'USDT',
        name: 'TETHER',
        value: '$0.9998',
        percent: '0.03%',
        chart: 'public/chart-state-4.png'
    }
]

const MarketTrend = () => {
    const coins = allCoins.map(coin => {
        return (
            <CoinTrendItem>
                <CoinInfo>
                    <Coin>
                        <CoinImg src={coin.icon} />
                        <CoinAlias>
                            {coin.alias}
                        </CoinAlias>
                        <CoinName>
                            {coin.name}
                        </CoinName>
                        <ChevronRight
                            size={48}
                            color="#B6B6B6"
                            cursor={'pointer'}
                        />
                    </Coin>
                </CoinInfo>
                <Divider>
                </Divider>
                <CoinValue>
                    <ValueContainer>
                        <Value>
                            {coin.value}
                        </Value>
                        <Percent>
                            {coin.percent}
                        </Percent>
                    </ValueContainer>
                    <Chart src={coin.chart} />
                </CoinValue>
            </CoinTrendItem>
        )
    })

    return (
        <MarketTrendContainer>
            <MarketTrendTitle>
                Market Trend
            </MarketTrendTitle>
            <MarketTrendContent>
                {coins}
            </MarketTrendContent>
        </MarketTrendContainer>
    )
}

export default MarketTrend;