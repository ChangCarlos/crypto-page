import { X } from "lucide-react";
import { Form, FormContainer, Header, Input, Label, LogInBtn, Logo, ModalContainer, Overlay, Title, CreateAccountContainer, CreateAccount, CreateAccountTitle, CreateAccountLink, ForgotPassword } from "./LoginModal"

const LoginModal = ({onClose, onLogInSubmit, onCreateAccount}) => {
    return (
        <Overlay>
            <ModalContainer>
            <X size={24} color="#FFFFFF" onClick={onClose} cursor={'pointer'} key='close-btn' />
                <Header>
                    <Logo>
                        CryptoCap
                    </Logo>
                    <Title>
                        Acesse sua conta
                    </Title>
                </Header>
                <FormContainer>
                    <Form onSubmit={onLogInSubmit} key='submit-form'>
                        <Label>
                            E-mail: <br /><br /> <Input
                                type="email"
                                required
                            />
                        </Label>
                        <br />
                        <br />
                        <Label>
                            Senha: <br /><br /> <Input
                                type="password"
                                required
                            />
                        </Label>
                        <br />
                        <br />
                        <ForgotPassword href="#">
                            Esqueceu sua senha?
                        </ForgotPassword>
                        <br />
                        <LogInBtn key='btn-login'>
                            Entrar
                        </LogInBtn>
                    </Form>
                </FormContainer>
                <CreateAccountContainer>
                    <CreateAccount>
                        <CreateAccountTitle>
                            Não tem uma conta?
                        </CreateAccountTitle>
                        <CreateAccountLink onClick={onCreateAccount}>
                            Crie gratuitamente
                        </CreateAccountLink>
                    </CreateAccount>
                </CreateAccountContainer>
            </ModalContainer>
        </Overlay>
    )
}

export default LoginModal;