import * as React from 'react';
import UserPost from '~/components/UserPost';

interface IAppProps {}

export default function PostUser(props: IAppProps) {
    return (
        <div>
            <UserPost />
        </div>
    );
}
