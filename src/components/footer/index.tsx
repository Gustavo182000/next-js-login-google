import * as React from 'react';

export default function Footer() {
    return (
        <footer className="footer bg-gray-800 text-white py-4 fixed bottom-0 w-full">
            <div className="container mx-auto text-center flex justify-center items-center">
                <p>&copy; {new Date().getFullYear()} Your Company. All rights reserved.</p>
            </div>
        </footer>
    );
}