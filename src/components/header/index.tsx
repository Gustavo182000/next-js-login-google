
import { signIn, signOut, useSession } from 'next-auth/react';
import Link from 'next/link';
import * as React from 'react';
import { Button } from '../ui/button';
import { Avatar, AvatarImage } from '../ui/avatar';

export default function Header() {

    const { data: session, status } = useSession();

    console.log(session);
    console.log(status);
    return (
        <header className="bg-black text-white text-center p-3">
            <section className='container mx-auto'>
                <nav className="flex flex-row justify-between items-center">
                    <Link href="/">
                        <div className="flex flex-row items-center space-x-4">
                            <span className="text-2xl font-bold mx-3 cursor-pointer">Tarefas <span className='text-red-500'>+</span> </span>
                        </div>
                    </Link>

                    <div className="flex items-center space-x-4 ">
                        {!session && status !== 'loading' && (

                            <Button onClick={() => signIn("google")}
                                variant={'outline'} >Login with Google</Button>

                        )}
                        {session && (
                            <>
                                <span>Welcome, {session.user?.name}</span>
                                <Link href="/dashboard">
                                    <Button onClick={() => signOut()} variant={'destructive'} >Logout</Button>
                                </Link>

                                <Link href="/dashboard">
                                    <Button variant={'outline'} >Dasboad</Button>
                                </Link>
                                <Avatar>
                                    <AvatarImage src={session.user?.image ?? undefined} alt={session.user?.name ?? undefined} />
                                </Avatar>

                            </>
                        )}
                    </div>
                </nav>
            </section>
        </header>
    );
}
