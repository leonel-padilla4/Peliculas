import { useState, useEffect } from "react";

interface NavbarProps {
    onSearch?: (query: string) => void;
}

function Navbar({ onSearch }: NavbarProps) {
    const [searchText, setSearchText] = useState("");

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
        <nav className="bg-black text-blue-600 px-4 py-3 shadow-lg">
            {/* Contenedor que en escritorio tiene 3 columnas: logo | buscador | links */}
            <div className="flex flex-col md:flex-row items-center gap-3 md:gap-0">
                {/* Logo - izquierda en escritorio, arriba en móvil */}
                <div className="md:w-1/4 text-center md:text-left">
                    <a href="/" className="text-xl md:text-2xl font-semibold hover:text-blue-400">
                        App Peliculas
                    </a>
                </div>

                {/* Buscador - centro en escritorio */}
                <div className="flex-1 flex justify-center w-full md:w-auto">
                    {onSearch && (
                        <form onSubmit={handleSubmit} className="flex items-center gap-2 border border-gray-300 px-3 py-1 rounded-full w-full max-w-md">
                            <input
                                className="py-1.5 w-full bg-transparent outline-none placeholder-gray-500 text-white text-sm"
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
                </div>

                {/* Links - derecha en escritorio */}
                <div className="md:w-1/4 flex justify-center md:justify-end gap-4 text-sm md:text-base">
                    <a href="/" className="hover:text-blue-400">Home</a>
                    <a href="/favorites" className="hover:text-blue-400">Favorites</a>
                </div>
            </div>
        </nav>
    );
}

export default Navbar;
