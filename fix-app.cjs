const fs = require('fs');

const appPath = 'src/App.tsx';
let data = fs.readFileSync(appPath, 'utf8');
const lines = data.split('\n');

const startIndex = lines.findIndex(line => line.includes('<main className="relative w-full flex flex-col items-center">'));
const endIndex = lines.findIndex((line, i) => i > startIndex && line.includes('</main>'));

if (startIndex !== -1 && endIndex !== -1) {
  const before = lines.slice(0, startIndex);
  const after = lines.slice(endIndex + 1);
  
  const routesBlock = [
    '      <Routes>',
    '        <Route path="/" element={<Home />} />',
    '        <Route path="/services" element={<Services />} />',
    '        <Route path="/works" element={<Works />} />',
    '        <Route path="/about" element={<About />} />',
    '        <Route path="/contact" element={<Contact />} />',
    '        <Route path="/book" element={<BookAppointment />} />',
    '      </Routes>'
  ];
  
  data = [...before, ...routesBlock, ...after].join('\n');
}

data = data.replace('Link, Lock', 'Link as LinkIcon, Lock');

if (!data.includes('react-router-dom')) {
  data = data.replace(
    'import { AudioControl } from "./components/AudioControl";',
    `import { AudioControl } from "./components/AudioControl";
import { BrowserRouter as Router, Routes, Route, Link, useLocation } from "react-router-dom";
import Home from "./pages/Home";
import Services from "./pages/Services";
import Works from "./pages/Works";
import About from "./pages/About";
import Contact from "./pages/Contact";
import BookAppointment from "./pages/BookAppointment";

function ScrollToTop() {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
}`
  );
  
  data = data.replace(
    '<div className="min-h-screen', 
    '<Router>\\n      <ScrollToTop />\\n      <div className="min-h-screen'
  );
  
  data = data.replace(
    '      <AudioControl />\\n    </div>\\n  );\\n}',
    '      <AudioControl />\\n      </div>\\n    </Router>\\n  );\\n}'
  );
  
  // Also handle exact string end
  data = data.replace('      <AudioControl />\r\n    </div>\r\n  );\r\n}', '      <AudioControl />\n      </div>\n    </Router>\n  );\n}');
  data = data.replace('      <AudioControl />\n    </div>\n  );\n}', '      <AudioControl />\n      </div>\n    </Router>\n  );\n}');
}

data = data.replace(/<a href="#" className="hover:text-white transition-colors">Home<\\/a>/g, '<Link to="/" className="hover:text-white transition-colors">Home</Link>');
data = data.replace(/<a href="#" className="hover:text-white transition-colors">Services<\\/a>/g, '<Link to="/services" className="hover:text-white transition-colors">Services</Link>');
data = data.replace(/<a href="#" className="hover:text-white transition-colors">Work<\\/a>/g, '<Link to="/works" className="hover:text-white transition-colors">Work</Link>');
data = data.replace(/<a href="#" className="hover:text-white transition-colors">About<\\/a>/g, '<Link to="/about" className="hover:text-white transition-colors">About</Link>');
data = data.replace(/<a href="#" className="hover:text-white transition-colors">Contact Us<\\/a>/g, '<Link to="/contact" className="hover:text-white transition-colors">Contact Us</Link>');

data = data.replace(
  /<button className="hidden md:block px-5 py-2.5 rounded-full[^>]+>\\s*Start Project\\s*<\\/button>/g,
  '<Link to="/book" className="hidden md:block px-5 py-2.5 rounded-full bg-white text-black text-xs uppercase tracking-widest font-bold hover:bg-neutral-200 transition-all shadow-[0_0_20px_rgba(255,255,255,0.3)] hover:shadow-[0_0_30px_rgba(255,255,255,0.5)] hover:scale-105 active:scale-95 text-center leading-none flex items-center justify-center">Start Project</Link>'
);

data = data.replace(
  /<button className="mt-2 w-full py-3 rounded-full[^>]+>\\s*Start Project\\s*<\\/button>/g,
  '<Link to="/book" onClick={() => setMobileMenuOpen(false)} className="mt-2 w-full flex items-center justify-center py-3 rounded-full bg-white text-black text-xs uppercase tracking-widest font-bold">Start Project</Link>'
);

const mobileNavTarget = `{['Home', 'Services', 'Work', 'About', 'Contact Us'].map((item) => (
                  <a
                    key={item}
                    href="#"
                    onClick={() => setMobileMenuOpen(false)}
                    className="text-sm uppercase tracking-widest font-medium text-white/70 hover:text-white transition-colors border-b border-white/5 pb-4 last:border-0 last:pb-0"
                  >
                    {item}
                  </a>
                ))}`;

const mobileNavReplacement = `{['Home', 'Services', 'Work', 'About', 'Contact Us'].map((item) => {
                  const path = item === 'Home' ? '/' : (item === 'Work' ? '/works' : '/' + item.toLowerCase().replace(' ', ''));
                  return (
                    <Link
                      key={item}
                      to={path}
                      onClick={() => setMobileMenuOpen(false)}
                      className="text-sm uppercase tracking-widest font-medium text-white/70 hover:text-white transition-colors border-b border-white/5 pb-4 last:border-0 last:pb-0"
                    >
                      {item}
                    </Link>
                  );
                })}`;

data = data.replace(mobileNavTarget, mobileNavReplacement);


data = data.replace(/<li><a href="#" className="hover:text-white transition-colors">Home<\\/a><\\/li>/g, `<li><Link to="/" className="hover:text-white transition-colors">Home</Link></li>`);
data = data.replace(/<li><a href="#" className="hover:text-white transition-colors">Process<\\/a><\\/li>/g, `<li><Link to="/services" className="hover:text-white transition-colors">Process</Link></li>`);
data = data.replace(/<li><a href="#" className="hover:text-white transition-colors">About<\\/a><\\/li>/g, `<li><Link to="/about" className="hover:text-white transition-colors">About</Link></li>`);
data = data.replace(/<li><a href="#" className="hover:text-white transition-colors">Contact<\\/a><\\/li>/g, `<li><Link to="/contact" className="hover:text-white transition-colors">Contact</Link></li>`);

fs.writeFileSync(appPath, data);
console.log("App.tsx fixed automatically!");
