import { Overlay, ModalContainer, Header, Logo, Title, FormContainer, Form, Label, Input, CreateAccountBtn, LoginContainer, Login, LoginTitle, LoginLink } from "./CreateAccount";
import { X } from "lucide-react";

const CreateAccountModal = ({onClose, onCreateAccountSubmit, onLogin}) => {
    return (
        <Overlay>
            <ModalContainer>
            <X size={24} color="#FFFFFF" onClick={onClose} cursor={'pointer'} key='close-btn' />
                <Header>
                    <Logo>
                        CryptoCap
                    </Logo>
                    <Title>
                        Crie sua conta
                    </Title>
                </Header>
                <FormContainer>
                    <Form onSubmit={onCreateAccountSubmit} key='submit-form'>
                        <Label>
                            Nome: <br /><br /> <Input
                                type="text"
                                required
                            />
                        </Label>
                        <br />
                        <br />
                        <Label>
                           Sobrenome: <br /><br /> <Input
                                type="text"
                                required
                            />
                        </Label>
                        <br />
                        <br />
                        <Label>
                            CPF: <br /><br /> <Input
                                type="text"
                                required
                            />
                        </Label>
                        <br />
                        <br />
                        <Label>
                            Telefone: <br /><br /> <Input
                                type="text"
                                required
                            />
                        </Label>
                        <br />
                        <br />
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
                        <CreateAccountBtn key='btn-signup'>
                            Cadastrar
                        </CreateAccountBtn>
                    </Form>
                </FormContainer>
                <LoginContainer>
                    <Login>
                        <LoginTitle>
                            Já tem sua conta?
                        </LoginTitle>
                        <LoginLink onClick={onLogin}>
                            Faça o login
                        </LoginLink>
                    </Login>
                </LoginContainer>
            </ModalContainer>
        </Overlay>
    )
}

export default CreateAccountModal;