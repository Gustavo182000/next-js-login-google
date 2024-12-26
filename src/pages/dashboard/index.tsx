import { signIn, useSession } from 'next-auth/react';
import * as React from 'react';


export default function Dashboard() {

    const { data: session, status } = useSession();

    React.useEffect(() => {
        if (!session && status !== 'loading') {
            signIn("google");
        }
    }, [session, status]);

    if (status === 'loading') {
        return (
            <div className="container mx-auto align-middle flex flex-col justify-center items-center">
                <h1 className="text-4xl font-bold text-center text-white ">
                    Loading...
                </h1>
            </div>
        );
    }

    return (
        <div>
            <div className="container mx-auto align-middle flex flex-col justify-center items-center">
                <h1 className="text-4xl font-bold text-center text-white ">
                    Dashboard
                </h1>
            </div>
        </div>
    );
}
