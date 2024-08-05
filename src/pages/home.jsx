import React from 'react';
import { CompanyProfileCard } from '../components/cards/ofertas';  
import { SearchComponent } from '../components/search';  
import { Footer } from '../components/navBar';  
import { companies } from '../components/data/companies';  

export const Home = () => {
    return (
        <div className="relative min-h-screen bg-gray-100">
            <SearchComponent />
            <main className="pt-16 mt-8 pb-16">
                <div className="container mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                    {companies.map((company, index) => (
                        <CompanyProfileCard key={index} company={company} />
                    ))}
                </div>
            </main>
            <Footer />
        </div>
    );
};
