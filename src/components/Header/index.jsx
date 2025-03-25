import { GetStartedButton, HeaderContainer, HeaderTitle, SubTitle, SubTitleContainer, Title, TitleContainer } from "./Header"

const Header = () => {
    return (
        <HeaderContainer>
            <HeaderTitle>
                <TitleContainer>
                <Title>
                    Start and Build Your Crypto Portfolio Here
                </Title>
                </TitleContainer>
                <SubTitleContainer>
                <SubTitle>
                Only at CryptoCap, you can build a good portfolio and learn best practices about cryptocurrency.
                </SubTitle>
                </SubTitleContainer>
            </HeaderTitle>
            <GetStartedButton>
                Get Started
            </GetStartedButton>
        </HeaderContainer>
    )
}

export default Header;