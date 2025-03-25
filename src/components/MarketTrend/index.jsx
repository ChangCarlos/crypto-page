import { ChevronRight } from "lucide-react";
import { Chart, Coin, CoinAlias, CoinImg, CoinInfo, CoinName, CoinTrendItem, CoinValue, Divider, MarketTrendContainer, MarketTrendContent, MarketTrendTitle, Percent, Value, ValueContainer } from "./MarketTrend"


const MarketTrend = () => {
    return (
        <MarketTrendContainer>
            <MarketTrendTitle>
                Market Trend
            </MarketTrendTitle>
            <MarketTrendContent>
                <CoinTrendItem>
                    <CoinInfo>
                        <Coin>
                         <CoinImg src="public\btc-icon.png"/> 
                         <CoinAlias>
                            BTC
                         </CoinAlias>
                        <CoinName>
                            BITCOIN
                        </CoinName>
                        <ChevronRight
                        size={48}
                        color="#B6B6B6"
                        />
                        </Coin>
                    </CoinInfo>
                    <Divider>
                    </Divider>
                    <CoinValue>
                        <ValueContainer>
                            <Value>
                                $56,623.54
                            </Value>
                            <Percent>
                                1.41%
                            </Percent>
                        </ValueContainer>
                        <Chart src="public\chart-state 1.png" />
                    </CoinValue>
                </CoinTrendItem>
            </MarketTrendContent>
        </MarketTrendContainer>
    )
}

export default MarketTrend;