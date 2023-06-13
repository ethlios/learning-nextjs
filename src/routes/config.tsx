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
    {
        name: 'posts',
        path: '/posts/id?page=1',
    },
];

export default ConfigRoutesPage;
