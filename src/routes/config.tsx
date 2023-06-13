interface ConfigRoutes {
    name: string;
    path: string;
}

const ConfigRoutesPage: ConfigRoutes[] = [
    {
        name: 'Home',
        path: '/',
    },
    {
        name: 'Account',
        path: '/account',
    },
];

export default ConfigRoutesPage;
