import { ChevronRight } from "lucide-react";
import { Content, FeaturesCard, FeaturesCardsContainer, FeaturesContainer, FeatureTitle, Item, ItemContainer, ItemDescription, ItemImage, ItemTitle, Link, LinkContainer, Subtitle, Title } from "./Features";

const allCards = [
    {
        img: '/feature-image-1.png',
        title: 'Manage Portfolio',
        description: 'Buy and sell popular digital currencies, keep track of them in the one place.'
    },
    {
        img: '/feature-image-2.png',
        title: 'Protected Securely',
        description: 'All cash balances are covered by FDIC insurance, up to a maximum of $250,000.'
    },
    {
        img: '/feature-image-3.png',
        title: 'Cryptocurrency Variety',
        description: 'Supports a variety of the most popular digital currencies and always uptodate.'
    },
    {
        img: '/feature-image-4.png',
        title: 'Learn Best Practice',
        description: 'Easy to know how to cryptocurrency works and friendly to newbie.'
    }
]

const Features = () => {
    const cards = allCards.map(card => {
        return (
            <FeaturesCard>
                <Content>
                    <ItemContainer>
                        <ItemImage src={card.img} />
                        <Item>
                            <ItemTitle>
                                {card.title}
                            </ItemTitle>
                            <ItemDescription>
                                {card.description}
                            </ItemDescription>
                        </Item>
                    </ItemContainer>
                    <LinkContainer>
                        <Link>
                            See Explained
                        </Link>
                        <ChevronRight
                            size={24}
                            color="#0FAE96"
                            cursor={'pointer'}
                        />
                    </LinkContainer>
                </Content>
            </FeaturesCard>
        )
    })

    return (
        <FeaturesContainer>
            <FeatureTitle>
                <Title>
                    CryptoCap Amazing Features
                </Title>
                <Subtitle>
                    Explore sensational features to prepare your best investment in cryptocurrency
                </Subtitle>
            </FeatureTitle>
            <FeaturesCardsContainer>
                {cards}
            </FeaturesCardsContainer>
        </FeaturesContainer>
    )
}

export default Features;