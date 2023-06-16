import * as React from 'react';

export interface IAppProps {}

export default function App(props: IAppProps) {
    return (
        <div>
            <form className="flex flex-col justify-center items-center bg-slate-600 p-10">
                <input
                    type="text"
                    placeholder="username"
                    className="mb-2 border-2 border-black h-10 focus:outline-none p-2"
                ></input>
                <input
                    type="password"
                    placeholder="password"
                    className="mb-2 border-2 border-black h-10 focus:outline-none p-2"
                ></input>
                <button className="text-white">Đăng nhập</button>
            </form>
        </div>
    );
}
