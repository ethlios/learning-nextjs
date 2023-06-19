import axios from 'axios';

const BASE_URL = 'http://localhost:3000/';

const Request = axios.create({
    url: BASE_URL,
    headers: {
        'Content-Type': 'application/json',
    },
});

export const post = async (token: string) => {
    const res = await Request.get('', {
        headers: {
            Authorization: `${token}`,
        },
    });
    return res.data;
};
