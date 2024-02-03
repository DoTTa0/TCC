import TitleComponent from "../../components/TitleComponent";
import UserProfile from "../../components/UserProfile";
import { Button, DivButton, UserDetailsMain } from "./style";

const UserDetails = () => {
    return (
        <div className="page">
            <UserDetailsMain>
                <TitleComponent title='Informações do usuário' />
                <UserProfile />
                <DivButton>
                    <Button>
                        Salvar
                    </Button>
                </DivButton>
            </UserDetailsMain>
        </div>
    )
}

export default UserDetails;