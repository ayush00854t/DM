'use client';
import React from 'react';

const Footer: React.FC = () => {
    return (
        <footer id="footer" className="bg-black py-8">
            <div className="container mx-auto px-6 text-center text-gray-500">
                <p>&copy; {new Date().getFullYear()} AAS Digitech Pvt Ltd. All Rights Reserved.</p>
            </div>
        </footer>
    );
};

export default Footer;
