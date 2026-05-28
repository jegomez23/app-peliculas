import Link from "next/link";
export default function NavBar() {
    return (
        <aside className="fixed left-0 top-0 h-screen w-72 bg-[#050505] border-r border-white/5 flex flex-col p-8 text-zinc-400 z-20">

            <div className="mb-12">
                <h1 className="text-3xl font-black italic tracking-tighter text-white">
                    LAS PELIS DE <span className="text-red-600">JUAN</span>
                </h1>
            </div>

            <nav className="flex flex-col gap-y-4 flex-1">

                <Link
                    href="/explorar"
                    className="group flex items-center gap-4 px-5 py-4 rounded-2xl transition-all duration-300 hover:bg-white/5 hover:text-white border border-transparent hover:border-white/10"
                >
                    <div className="p-2 rounded-lg bg-zinc-900 group-hover:bg-red-600/20 group-hover:text-red-500 transition-colors">
                        <svg xmlns="http://w3.org" width="20" height="20" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                            <path d="M12 2l3 7 7 3-7 3-3 7-3-7-7-3 7-3 3-7z" />
                        </svg>
                    </div>
                    <span className="text-sm font-bold tracking-wide uppercase">Inicio</span>
                </Link>

                <Link
                    href="/"
                    className="group flex items-center gap-4 px-5 py-4 rounded-2xl transition-all duration-300 hover:bg-white/5 hover:text-white border border-transparent hover:border-white/10"
                >
                    <div className="p-2 rounded-lg bg-zinc-900 group-hover:bg-red-600/20 group-hover:text-red-500 transition-colors">
                        <svg xmlns="http://w3.org" width="20" height="20" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                            <path d="M7 21h10a2 2 0 002-2V9.414a1 1 0 00-.293-.707l-5.414-5.414A1 1 0 0012.586 3H7a2 2 0 00-2 2v14a2 2 0 002 2z" />
                        </svg>
                    </div>
                    <span className="text-sm font-bold tracking-wide uppercase">Populares</span>
                </Link>

                <Link
                    href="/buscar"
                    className="group flex items-center gap-4 px-5 py-4 rounded-2xl transition-all duration-300 hover:bg-white/5 hover:text-white border border-transparent hover:border-white/10"
                >
                    <div className="p-2 rounded-lg bg-zinc-900 group-hover:bg-red-600/20 group-hover:text-red-500 transition-colors">
                        <svg xmlns="http://w3.org" width="20" height="20" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                            <circle cx="11" cy="11" r="8" /><path d="m21 21-4.3-4.3" />
                        </svg>
                    </div>
                    <span className="text-sm font-bold tracking-wide uppercase">Buscar</span>
                </Link>

                <Link
                    href="/favoritos-lista"
                    className="group flex items-center gap-4 px-5 py-4 rounded-2xl transition-all duration-300 hover:bg-white/5 hover:text-white border border-transparent hover:border-white/10"
                >
                    <div className="p-2 rounded-lg bg-zinc-900 group-hover:bg-red-600/20 group-hover:text-red-500 transition-colors">
                        <svg xmlns="http://w3.org" width="20" height="20" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                            <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" />
                        </svg>
                    </div>
                    <span className="text-sm font-bold tracking-wide uppercase">Mis Favoritos</span>
                </Link>

            </nav>

            <div className="bg-gradient-to-br from-zinc-900 to-black p-5 rounded-3xl border border-white/5">
                <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-red-600 flex items-center justify-center text-white font-bold">U</div>
                    <div>
                        <p className="text-sm text-white font-bold">Usuario</p>
                        <p className="text-[10px] text-zinc-500 uppercase tracking-tighter">Lionel Messi</p>
                    </div>
                </div>
            </div>

        </aside>
    )
}
