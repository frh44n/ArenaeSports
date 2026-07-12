import { Bell, User } from 'lucide-react';

const TOURNAMENTS = [
  {
    id: 1,
    title: 'BGMI Pro League',
    image: 'https://images.unsplash.com/photo-1595590424283-b8f17842773f?auto=format&fit=crop&q=80&w=1000',
    tags: ['SQUAD', 'TDM'],
    prize: '₹50,000',
    isLive: true,
  },
  {
    id: 2,
    title: 'Free Fire Clash',
    image: 'https://images.unsplash.com/photo-1552820728-8b83bb6b773f?auto=format&fit=crop&q=80&w=1000',
    tags: ['DUO', 'CLASSIC'],
    prize: '₹25,000',
    isLive: false,
  },
  {
    id: 3,
    title: 'PUBG PC Invitational',
    image: 'https://images.unsplash.com/photo-1579373903781-fd5c0c30c4cd?auto=format&fit=crop&q=80&w=1000',
    tags: ['SOLO', 'ERANGEL'],
    prize: '₹100,000',
    isLive: false,
  },
];

export default function App() {
  return (
    <div className="min-h-screen bg-[#0d1515] text-[#dce4e5] font-sans selection:bg-[#00dbe9]/30 overflow-x-hidden">
      
      {/* Navbar */}
      <nav className="flex items-center justify-between px-6 py-6 max-w-[1400px] mx-auto border-b border-white/5">
        <div className="flex items-center gap-12">
          <a href="#" className="font-sora text-3xl font-extrabold tracking-tighter text-white">
            ARENA
          </a>
          <div className="hidden md:flex items-center gap-8">
            {['Tournaments', 'Features', 'Live', 'Leaderboards'].map((item) => (
              <a 
                key={item} 
                href="#" 
                className="font-mono text-xs font-semibold tracking-[0.1em] text-[#b9cacb] uppercase hover:text-white transition-colors"
              >
                {item}
              </a>
            ))}
          </div>
        </div>

        <div className="flex items-center gap-6">
          <button className="text-[#b9cacb] hover:text-white transition-colors">
            <Bell size={20} />
          </button>
          <button className="text-[#b9cacb] hover:text-white transition-colors">
            <User size={20} />
          </button>
          <a 
            href="https://download1334.mediafire.com/0ojo2boscyfgjCRHiIMeieFvSdHKl0dvLWJmP6qUbU7ILo30ZFZxBgauQEwOzsTaTMpqIeMF6ZPwzuQkW8PvMPfn_GOAlDhq3ThhicjA96tRgELqWI7EuDVj3JqTDhPgmQDK5_fOzj0L6DS2yOSLsxmk8pC0YjJ0GPLyBf2oJWbp/qfzibjkfabwfzf6/Arena+Esports.apk"
            className="hidden sm:inline-block bg-[#00dbe9] hover:bg-[#7df4ff] text-[#002022] font-mono text-xs font-bold uppercase tracking-widest px-6 py-2.5 rounded shadow-[0_2px_0_0_#00aeb8] hover:shadow-[0_4px_15px_rgba(0,219,233,0.4)] hover:-translate-y-0.5 active:translate-y-0 transition-all text-center"
          >
            Download
          </a>
        </div>
      </nav>

      <main className="max-w-[1400px] mx-auto px-6 pt-16 lg:pt-24 pb-32 space-y-32">
        
        {/* Hero Section */}
        <section className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-8 items-center">
          <div className="max-w-2xl relative z-10">
            {/* Subtle background glow for text */}
            <div className="absolute top-1/2 left-0 -translate-y-1/2 w-64 h-64 bg-[#00dbe9]/10 blur-[100px] -z-10 rounded-full"></div>
            
            <h1 className="font-sora text-5xl md:text-6xl lg:text-7xl font-extrabold leading-[1.1] text-white tracking-[-0.02em] mb-6 drop-shadow-[0_0_25px_rgba(0,219,233,0.3)]">
              THE ARENA FOR <br/>
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-white to-[#00dbe9]">CHAMPIONS</span>
            </h1>
            
            <p className="text-[#b9cacb] text-lg md:text-xl mb-10 max-w-lg leading-[1.6]">
              Join the elite gaming community and dominate the leaderboard. 
              Experience high-octane competitive play.
            </p>
            
            <a 
              href="https://download1334.mediafire.com/0ojo2boscyfgjCRHiIMeieFvSdHKl0dvLWJmP6qUbU7ILo30ZFZxBgauQEwOzsTaTMpqIeMF6ZPwzuQkW8PvMPfn_GOAlDhq3ThhicjA96tRgELqWI7EuDVj3JqTDhPgmQDK5_fOzj0L6DS2yOSLsxmk8pC0YjJ0GPLyBf2oJWbp/qfzibjkfabwfzf6/Arena+Esports.apk"
              className="inline-block relative group overflow-hidden bg-white/5 border border-[#849495]/40 hover:border-[#00dbe9]/60 text-white font-mono text-sm font-bold uppercase tracking-widest px-8 py-4 rounded-lg backdrop-blur-md transition-all duration-300"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700"></div>
              Download App
            </a>
          </div>

          <div className="relative w-full aspect-[4/3] lg:aspect-auto lg:h-[550px] bg-white/[0.02] border border-white/10 rounded-[2rem] p-3 md:p-5 backdrop-blur-2xl shadow-[0_0_80px_-20px_rgba(0,219,233,0.15)] group">
             {/* Diagonal glass glare */}
             <div className="absolute inset-0 bg-gradient-to-br from-white/10 to-transparent opacity-50 rounded-[2rem] pointer-events-none"></div>
             
             <div className="w-full h-full bg-[#080f10] rounded-[1.5rem] overflow-hidden border border-white/5 relative">
                {/* Interface mockup image */}
                <img 
                  src="https://images.unsplash.com/photo-1538481199705-c710c4e965fc?auto=format&fit=crop&q=80&w=1200" 
                  className="w-full h-full object-cover opacity-90 group-hover:scale-105 transition-transform duration-[2s] ease-out" 
                  alt="Arena Dashboard Interface" 
                  referrerPolicy="no-referrer"
                />
                
                {/* Simulated UI overlay to match mockup vibe closely */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#080f10] via-transparent to-transparent pointer-events-none"></div>
                <div className="absolute inset-0 bg-[#00dbe9]/5 mix-blend-overlay pointer-events-none"></div>
             </div>
          </div>
        </section>

        {/* Tournaments Section */}
        <section className="space-y-16">
          <div className="text-center relative">
             <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-32 bg-[#00dbe9]/10 blur-[100px] -z-10 rounded-full"></div>
             <h2 className="font-sora text-3xl md:text-4xl font-bold tracking-tight text-white uppercase drop-shadow-md">
               Daily Tournaments
             </h2>
             <div className="h-1 w-24 bg-gradient-to-r from-[#00dbe9] to-transparent mx-auto mt-4 rounded-full"></div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
            {TOURNAMENTS.map((tournament) => (
              <TournamentCard key={tournament.id} {...tournament} />
            ))}
          </div>
        </section>
        
      </main>

      {/* Footer */}
      <footer className="border-t border-white/10 bg-[#080f10]">
        <div className="max-w-[1400px] mx-auto px-6 py-12 flex flex-col md:flex-row items-center justify-between gap-8">
          <a href="#" className="font-sora text-3xl font-extrabold tracking-tighter text-white">
            ARENA
          </a>
          
          <div className="text-[#b9cacb] font-mono text-xs uppercase tracking-widest text-center">
            &copy; {new Date().getFullYear()} ARENA ESPORTS. ALL RIGHTS RESERVED.
          </div>
          
          <div className="flex flex-wrap justify-center gap-6 md:gap-8">
            {['Terms', 'Privacy', 'Discord', 'Support'].map((link) => (
              <a 
                key={link} 
                href="#" 
                className="font-mono text-xs tracking-widest text-[#b9cacb] hover:text-white transition-colors"
              >
                {link}
              </a>
            ))}
          </div>
        </div>
      </footer>
    </div>
  );
}

function TournamentCard({ 
  title, 
  image, 
  tags, 
  prize, 
  isLive 
}: { 
  title: string; 
  image: string; 
  tags: string[]; 
  prize: string; 
  isLive: boolean; 
}) {
  return (
    <div className="group relative bg-white/[0.03] border border-white/10 rounded-2xl overflow-hidden backdrop-blur-xl hover:border-white/20 transition-all duration-300 shadow-xl hover:shadow-[0_0_40px_-15px_rgba(0,219,233,0.15)] flex flex-col h-full">
      {/* Live Badge */}
      {isLive && (
        <div className="absolute top-4 right-4 z-20 bg-black/60 backdrop-blur-md px-3 py-1.5 rounded-full flex items-center gap-2 border border-white/10 shadow-lg">
          <div className="w-2 h-2 rounded-full bg-[#ebb2ff] shadow-[0_0_8px_#ebb2ff] animate-[pulse_2s_ease-in-out_infinite]"></div>
          <span className="font-mono text-[10px] font-bold tracking-[0.2em] text-white uppercase mt-[1px]">Live</span>
        </div>
      )}
      
      {/* Image Container */}
      <div className="h-56 w-full overflow-hidden relative shrink-0">
        <div className="absolute inset-0 bg-gradient-to-t from-[#0d1515] to-transparent z-10 pointer-events-none"></div>
        <img 
          src={image} 
          alt={title} 
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out" 
          referrerPolicy="no-referrer"
        />
      </div>

      {/* Content */}
      <div className="p-6 relative z-20 -mt-10 flex flex-col flex-1">
        <h3 className="font-sora text-2xl font-bold text-white mb-4 tracking-tight drop-shadow-md">
          {title}
        </h3>
        
        {/* Tags */}
        <div className="flex flex-wrap gap-2 mb-6">
          {tags.map(tag => (
            <span 
              key={tag} 
              className="bg-black/40 border border-white/10 text-[#b9cacb] font-mono text-[10px] px-2.5 py-1.5 rounded font-semibold tracking-widest uppercase backdrop-blur-sm"
            >
              {tag}
            </span>
          ))}
        </div>

        <div className="mt-auto">
          {/* Divider */}
          <div className="h-[1px] w-full bg-gradient-to-r from-white/15 via-white/5 to-transparent mb-5"></div>

          {/* Footer */}
          <div className="flex items-end justify-between">
            <div>
              <div className="text-[10px] text-[#b9cacb] font-mono uppercase tracking-[0.15em] mb-1">Prize Pool</div>
              <div className="font-mono text-[#00dbe9] text-xl font-bold">{prize}</div>
            </div>
            <a 
              href="https://download1334.mediafire.com/0ojo2boscyfgjCRHiIMeieFvSdHKl0dvLWJmP6qUbU7ILo30ZFZxBgauQEwOzsTaTMpqIeMF6ZPwzuQkW8PvMPfn_GOAlDhq3ThhicjA96tRgELqWI7EuDVj3JqTDhPgmQDK5_fOzj0L6DS2yOSLsxmk8pC0YjJ0GPLyBf2oJWbp/qfzibjkfabwfzf6/Arena+Esports.apk"
              className="inline-block bg-[#00dbe9] hover:bg-[#7df4ff] text-[#002022] font-mono text-[11px] font-bold uppercase tracking-widest px-5 py-2.5 rounded hover:-translate-y-0.5 active:translate-y-0 transition-all shadow-[0_2px_0_0_#00aeb8] hover:shadow-[0_4px_15px_rgba(0,219,233,0.3)] text-center"
            >
              Join Now
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

