import { FC, useEffect, useState } from "react";
import TitleComponent from "../../components/TitleComponent";
import UserProfile from "../../components/UserProfile";
import api from "../../services/api";
import { Button, DivButton, UserDetailsMain } from "./styles";
import IUser from "../../interfaces/IUser";
import IAddress from "../../interfaces/IAddress";
import IUserRequest from "../../interfaces/Request/IUserRequest";
import IAddressRequest from "../../interfaces/Request/IAddressRequest";
import { useParams } from "react-router-dom";
import { format } from "date-fns";

interface UserDetailsProps {
    userId?: string;
}

const UserDetails:FC<UserDetailsProps> = ({userId}) => {
    const { id } = useParams();
    const [user, setUser] = useState<IUser>({} as IUser );
    const [address, setAddress] = useState<IAddress>({} as IAddress );
    const [userType, setUserType] = useState(0);

    const getUserId = userId ? userId : id;


    useEffect(() => {
        const init = async () =>  await callUserById();
        init();
    }, []);

    const callUserById = async () => {
        const response = await api.get(`users/${getUserId}`)
            .then(success => success)
            .catch(error => error.response)
            .then(response => response);

            response.data.birthDate = format(response.data?.birthDate.replace('Z', ''), 'dd/MM/yyyy');
            setUser(response.data as IUser);
            setUserType(response.data.userType.id);
            if(response.data.address)
                setAddress(response.data.address as IAddress);
    }

    const updateUser = async () => {
        const response = await api.put(`users/${getUserId}`, createRequest())
            .then(success => success)
            .catch(error => error.response)
            .then(response => response);

            if (response.status === 200) return alert('Usuário atualizado!')
    }

    const createRequest = (): IUserRequest => {
        return {
            ...user,
            address: address as IAddressRequest
        } as IUserRequest
    }

    const handleButton = async () => {
        await updateUser();
    }
    return (
        <div className="page">
            <UserDetailsMain>
                <TitleComponent title='Informações do usuário' />
                <UserProfile getUserType={userType} user={user} setUser={setUser} address={address} setAddress={setAddress}/>
                <DivButton>
                    <Button onClick={handleButton}>
                        Salvar
                    </Button>
                </DivButton>
            </UserDetailsMain>
        </div>
    )
}

export default UserDetails;