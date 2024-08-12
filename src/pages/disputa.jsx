import { Footer } from "../components/navBar";
import { SearchComponent } from "../components/search";


export const Disputa = () => {
    return (
      
        <div className="relative min-h-screen bg-gray-100">
            <SearchComponent  />
            <main className="pt-16 mt-8 pb-16">
                <div className="container mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                    DIisputas
                </div>
            </main>
            <Footer />
        </div>
    );
  };