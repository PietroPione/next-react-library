// Header che visualizza automaticamente le pagine presenti in app, con possibilità di toglierne alcune

// import HeaderClient from './HeaderClient';
// import fs from 'fs';
// import path from 'path';

// export default function HeaderServer({ reverse }) {
//     const pagesDirectory = path.join(process.cwd(), 'app');
//     const entries = fs.readdirSync(pagesDirectory, { withFileTypes: true });

//     // Definisci le pagine da escludere dal menu dell'header
//     const excludedFromHeader = ['cookie-policy', 'regulatory-disclosure'];

//     const menuItems = entries
//         .filter((entry) => entry.isDirectory() && !excludedFromHeader.includes(entry.name))
//         .map((entry) => {
//             const name = entry.name.replace(/-/g, ' ');
//             const formattedName = name
//                 .split(' ')
//                 .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
//                 .join(' ');

//             return {
//                 testo: formattedName,
//                 slug: { text: `/${name.toLowerCase().replace(/\s+/g, '-')}` },
//             };
//         });

//     return <HeaderClient menuItems={menuItems} reverse={reverse} />;
// }