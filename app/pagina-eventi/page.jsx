// Pagina con semplice logica di card eventi che riconosce data e seleziona da solo passato e presente

// "use client";

// import { createClient } from "@/prismicio";
// import CardEventi from "@/components/card/CardEventi";
// import { isEventoPassato } from "@/utils";
// import { LanguageContext } from "@/context/LanguageContext";
// import { useContext, useEffect, useState } from "react";
// import Image from "next/image";

// export default function Eventi() {
//     const { language } = useContext(LanguageContext);
//     const [eventi, setEventi] = useState(null);
//     const [loading, setLoading] = useState(true);

//     useEffect(() => {
//         const fetchData = async () => {
//             setLoading(true);
//             const client = createClient();
//             const response = await client.getByType("eventi", { lang: language });
//             if (response?.results.length > 0) {
//                 setEventi(response.results[0]);
//             }
//             setLoading(false);
//         };
//         fetchData();
//     }, [language]);

//     if (loading) {
//         return (
//             <div className="container space-y-10 pb-10 md:py-10">
//                 <div className="animate-pulse bg-white invisible h-screen rounded"></div>
//             </div>
//         );
//     }

//     if (!eventi) {
//         return <div className="container">Nessun evento disponibile</div>;
//     }

//     const mappedSlices = eventi.data.slices.map((slice) => ({
//         type: slice.slice_type,
//         primary: slice.primary,
//     }));

//     const heroEventiSlice = mappedSlices.find(
//         (slice) => slice.type === "eventi_hero"
//     )?.primary;
//     const eventiSlices = mappedSlices.filter((slice) => slice.type === "eventi");

//     // Ordina gli eventi
//     const sortedEventi = eventiSlices.flatMap((slice) =>
//         slice.primary.eventi.map((evento) => ({
//             evento,
//             passato: isEventoPassato(evento.data),
//         }))
//     ).sort((a, b) => {
//         if (a.passato && !b.passato) {
//             return 1; // Eventi passati dopo quelli futuri
//         }
//         if (!a.passato && b.passato) {
//             return -1; // Eventi futuri prima di quelli passati
//         }
//         return 0; // Mantieni l'ordine se entrambi sono futuri o passati
//     });

//     return (
//         <div className="container p-4 space-y-10">
//             {heroEventiSlice && (
//                 <div className="space-y-4 md:space-y-6">
//                     <h1 className="text-40 md:text-60 font-bold uppercase">
//                         {heroEventiSlice.titolo}
//                     </h1>
//                     <p className="text-17 md:text-22">{heroEventiSlice.spiega}</p>
//                     {heroEventiSlice.immagine?.url && (
//                         <Image
//                             src={heroEventiSlice.immagine.url}
//                             alt={heroEventiSlice.immagine.alt || "Hero Eventi"}
//                             width={600}
//                             height={400}
//                             className="mx-auto rounded-lg"
//                         />
//                     )}
//                 </div>
//             )}

//             {/* Lista Eventi */}
//             <div className="flex flex-col gap-y-10">
//                 {sortedEventi.length > 0 ? (
//                     sortedEventi.map(({ evento, passato }, index) => (
//                         <CardEventi
//                             key={index}
//                             evento={evento}
//                             eventoIndex={index}
//                             passato={passato}
//                         />
//                     ))
//                 ) : (
//                     <p className="col-span-full text-center">Nessun evento disponibile.</p>
//                 )}
//             </div>
//         </div>
//     );
// }