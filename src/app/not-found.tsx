'use client';
import { useRouter } from 'next/navigation';

export default function NotFound() {
    const router = useRouter();
    const handleBack = (): void => {
        router.back();
    };
    return (
        <div className="flex justify-center items-center" style={{ height: '100vh' }}>
            <h1 className="text-2xl font-bold">Not Found</h1>
            <button onClick={handleBack}>Back</button>
        </div>
    );
}
