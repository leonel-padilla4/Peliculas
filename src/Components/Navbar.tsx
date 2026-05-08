import { useState, useEffect } from "react";

interface NavbarProps {
    onSearch?: (query: string) => void;
}

function Navbar({ onSearch }: NavbarProps) {
    const [searchText, setSearchText] = useState("");
    const [menuOpen, setMenuOpen] = useState(false);  // ✅ Para menú responsive

    useEffect(() => {
        if (searchText.trim() === "" && onSearch) {
            onSearch("");
        }
    }, [searchText, onSearch]);

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        if (searchText.trim() && onSearch) {
            onSearch(searchText);
        }
    };

    return (
       <nav className="bg-black text-blue-600 px-8 py-4 flex justify-center md:justify-between items-center shadow-lg">
            {/* Logo */}
            <div className="text-xl sm:text-2xl font-semibold tracking-tight">
                <a href="/" className="hover:text-blue-400 transition-colors">
                    App Peliculas
                </a>
            </div>

            {/* Botón hamburguesa para móvil */}
            <button 
                className="lg:hidden text-white text-2xl"
                onClick={() => setMenuOpen(!menuOpen)}
            >
                ☰
            </button>

            {/* Contenido que se oculta en móvil */}
            <div className={`${menuOpen ? 'flex' : 'hidden'} lg:flex flex-col lg:flex-row w-full lg:w-auto items-center gap-4 mt-4 lg:mt-0`}>
                {/* Buscador */}
                {onSearch && (
                    <form onSubmit={handleSubmit} className="flex items-center text-sm gap-2 border border-gray-300 px-3 py-1 rounded-full w-full lg:w-auto">
                        <input 
                            className="py-1.5 w-full bg-transparent outline-none placeholder-gray-500 text-white" 
                            type="text" 
                            placeholder="Buscar películas..."
                            value={searchText}
                            onChange={(e) => setSearchText(e.target.value)}
                        />
                        <button type="submit" className="bg-transparent border-none cursor-pointer">
                            <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M10.836 10.615 15 14.695" stroke="#7A7B7D" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"/>
                                <path clipRule="evenodd" d="M9.141 11.738c2.729-1.136 4.001-4.224 2.841-6.898S7.67.921 4.942 2.057C2.211 3.193.94 6.281 2.1 8.955s4.312 3.92 7.041 2.783" stroke="#7A7B7D" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"/>
                            </svg>
                        </button>
                    </form>
                )}

                {/* Links */}
                <div className="flex gap-6 text-base sm:text-lg font-medium">
                    <a href="/" className="hover:text-blue-400 transition-colors">
                        Home
                    </a>
                    <a href="/favorites" className="hover:text-blue-400 transition-colors">
                        Favorites
                    </a>
                </div>
            </div>
        </nav>
    );
}

export default Navbar;
