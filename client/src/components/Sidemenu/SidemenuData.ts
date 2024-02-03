const userId = 4 //localStorage.getItem('userId');
const SidemenuData = [
    {
        title: 'Usuários',
        path: '/users',
    },
    {
        title: 'Procedimentos',
        path: '/medicalProcedures',
    },
    {
        title: 'Perfil',
        path: `/users/${userId}`
    },
    {
        title: 'Encaminhamento',
        path: '/referral'
    }
]




export default SidemenuData;