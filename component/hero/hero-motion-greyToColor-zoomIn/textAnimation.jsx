import { motion, useScroll, useTransform } from "framer-motion";
import { useState, useEffect } from "react";

export default function TextAnimation({ textBottom, greenBg, textTop }) { // Aggiungi la prop textTop
    const { scrollYProgress } = useScroll();

    const textOpacity = useTransform(scrollYProgress, [0, 0.05], [0, 1]);

    const [initialOpacity, setInitialOpacity] = useState(0);

    useEffect(() => {
        setInitialOpacity(1);
    }, []);

    return (
        <> {/* Utilizza un frammento per avvolgere entrambi i div */}
            <motion.div
                className={`absolute max-w-[66vw] md:max-w-[25vw] bottom-[10vh] md:bottom-[20vh] right-[5vw] md:right-[15vw] p-4 ${greenBg ? "bg-[var(--green-alph)]" : ""
                    }`}
                style={{ opacity: initialOpacity, opacity: textOpacity, transition: "opacity 0.1s ease" }}
            >
                <h1 className="text-26 md:text-32 text-right ">{textBottom}</h1>
            </motion.div>

            {textTop && ( // Renderizza il div solo se textTop è presente
                <motion.div
                    className="absolute top-[5vh] md:top-[20vh] left-[5vw] md:left-[10vw] p-4 md:max-w-[33vw]"
                    style={{ opacity: initialOpacity, opacity: textOpacity, transition: "opacity 0.1s ease" }}
                >
                    <h2 className="text-60 leading-16 md:text-95 md:leading-20 ">{textTop}</h2>
                </motion.div>
            )}
        </>
    );
}