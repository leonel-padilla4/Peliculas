import { useState, useEffect } from "react";  // ✅ CAMBIO 1: Importar useEffect

interface NavbarProps {
    onSearch?: (query: string) => void;
}

function Navbar({ onSearch }: NavbarProps) {
    const [searchText, setSearchText] = useState("");

    // ✅ CAMBIO 2: Detectar cuando el input se vacía
    useEffect(() => {
        if (searchText.trim() === "" && onSearch) {
            onSearch("");  // Llama a recargar todas las películas
        }
    }, [searchText, onSearch]);  // Se ejecuta cada vez que cambia searchText

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        if (searchText.trim() && onSearch) {
            onSearch(searchText);
        }
    }

    return (
        <nav className="bg-black text-blue-600 px-8 py-4 flex justify-between items-center shadow-lg">
            <div className="text-2xl font-semibold tracking-tight">
                <a href="/" className="hover:text-blue-400 transition-colors">
                    App Peliculas
                </a>
            </div>

            {onSearch && (
                <form onSubmit={handleSubmit} className="hidden lg:flex items-center text-sm gap-2 border border-gray-300 px-3 rounded-full">
                    <input 
                        className="py-1.5 w-full bg-transparent outline-none placeholder-gray-500" 
                        type="text" 
                        placeholder="Buscar películas..."
                        value={searchText}
                        onChange={(e) => setSearchText(e.target.value)}  // Esto activa el useEffect
                    />
                    <button type="submit" className="bg-transparent border-none cursor-pointer">
                        <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M10.836 10.615 15 14.695" stroke="#7A7B7D" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"/>
                            <path clipRule="evenodd" d="M9.141 11.738c2.729-1.136 4.001-4.224 2.841-6.898S7.67.921 4.942 2.057C2.211 3.193.94 6.281 2.1 8.955s4.312 3.92 7.041 2.783" stroke="#7A7B7D" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"/>
                        </svg>
                    </button>
                </form>
            )}

            <div className="flex gap-8 text-lg font-medium">
                <a href="/" className="hover:text-blue-400 transition-colors">
                    Home
                </a>
                <a href="/favorites" className="hover:text-blue-400 transition-colors">
                    Favorites
                </a>
            </div>      
        </nav>
    );
}

export default Navbar;