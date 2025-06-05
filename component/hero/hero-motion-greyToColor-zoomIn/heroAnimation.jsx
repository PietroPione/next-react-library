// import { motion, useScroll, useTransform, useMotionValueEvent } from "framer-motion";
// import { useRef, useState, useEffect } from 'react';

// export default function HeroAnimation({ image }) {
//     const { scrollYProgress } = useScroll();

//     const progress = useTransform(scrollYProgress, [0, 0.15], [0.9, 1.5]);
//     const grayscale = useTransform(scrollYProgress, [0, 0.10], [1, 0]);

//     const divRef = useRef(null);
//     const [initialGrayscale, setInitialGrayscale] = useState(1);

//     useEffect(() => {
//         setInitialGrayscale(1);
//     }, []);

//     useMotionValueEvent(grayscale, "change", (latestValue) => {
//         if (divRef.current) {
//             divRef.current.style.filter = `grayscale(${latestValue})`;
//         }
//     });

//     return (
//         <motion.div
//             ref={divRef}
//             style={{
//                 scale: progress,
//                 backgroundImage: `url(${image})`,
//                 filter: `grayscale(${initialGrayscale})`, // Applica il grayscale iniziale
//             }}
//             className="absolute inset-0 bg-cover bg-center"
//         />
//     );
// }