"use client";
import Image from "next/image";
import { benefits, Benefit } from "./data";
import Card from "./components/card/Card";
import { motion, useScroll } from "framer-motion";
import { useRef, useEffect } from "react";

export default function Home() {
  const container = useRef(null);

  //leyendo la posicion del elemento en el view port
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ["start start", "end end"],
  });

  // para leer en la consola y traquear el scroll para entender. va de 0 a 1 el scroll progress
  // useEffect(() => {
  //   scrollYProgress.on("change", (e) => console.log(e));
  // }, []);

  return (
    <>
      <div className="h-[90svh] w-full grid place-content-center bg-black/2 ">
        <h1 className="text-4xl font-semibold mx-auto leading-tight ">
          Staking Cards framer motion
        </h1>
      </div>
      <div ref={container} className=" w-full ">
        {benefits.map((benefit: Benefit, index: number) => {
          const range = [index * 0.25, 1];
          const targetScale = 1 - (benefits.length - index) * 0.05;
          return (
            <Card
              key={index}
              index={index}
              {...benefit}
              progress={scrollYProgress}
              //Sabemos que el final es 1 y tenemos 4 index/cards entonces 1/4
              range={range}
              // no todas las card tiene el mismo scaling
              targetScale={targetScale}
            />
          );
        })}
      </div>
    </>
  );
}
