import { IoSearch } from "react-icons/io5";
import { DivButton, UsersMain } from "./styles";
import ButtonComponent from "../../components/ButtonComponent";
import TitleComponent from "../../components/TitleComponent";
import UsersTableComponent from "../../components/UsersTableComponent";
import { useEffect, useState } from "react";
import api from "../../services/api";
import Loading from "../../components/LoadingComponent";

interface ListUser {
        space: string;
        name: string;
        userType: string;
        document: string;
        phone: string;
        userId: number;
}

const UsersPage = () => {
    const[listAll, setListAll] = useState<ListUser[]>([]);
    const [loading, setLoading] = useState(false);


    useEffect(() => {
        const init = async () =>  await callListAll();
        init();
    }, []);

    const callListAll = async () => {
        const allUsers = await api.get(`users`)
            .then(success => success)
            .catch(error => error.response)
            .then(response => response);

        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        const response: ListUser[] = allUsers.data.map((item: any) => {
            const res = {
                space: '',
                name: item.name,
                userType: item.userType.name,
                document: item.cpf,
                phone: item.phone,
                userId: item.id
            } as ListUser;
            return res;
        })


        setListAll(response)
    }

    const handleSearch = async () => {
        setLoading(true);
        await callListAll();
        setTimeout(() => {
            setLoading(false);
        }, 1000);
    }


    return (
        <>
        {loading && 
            <Loading text="Aguarde, por favor..." />
        }
        <div className="page">
            <UsersMain>
                <TitleComponent title='Usuários' />
                <DivButton>
                    <ButtonComponent icon={<IoSearch />} text='Pesquisar' onClick={handleSearch}/>
                </DivButton>
                <UsersTableComponent data={listAll} />
            </UsersMain>
        </div>
        </>
        
    );
}

export default UsersPage;