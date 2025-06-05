"use client";
import React, { useRef } from "react";
import Image from "next/image";
import { useTransform, motion, useScroll } from "motion/react";

export default function index({
  index,
  title,
  description,
  src,
  color,
  range,
  progress,
  targetScale,
  rotate,
}: {
  index: number;
  title: string;
  description: string;
  src: string;
  link?: string;
  color: string;
  range?: number[];
  targetScale?: number;
  progress?: any;
  rotate?: number;
}) {
  const container = useRef(null);
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ["start end", "start start"],
  });
  const cardRotate = useTransform(scrollYProgress, [0, 1], [-12 , 0]);
  const cardScale = useTransform(progress, range || [0, 1], [
    1,
    targetScale || 1.2,
  ]);
  return (
    <div
      ref={container}
      className="flex items-center justify-center h-svh sticky top-0"
    >
      <motion.div
        style={{
          scale: cardScale,
          rotate: cardRotate,
          backgroundColor: color,
          top: `calc(-10% + ${index * 25}px)`,
        }}
        className="flex relative h-[500px] w-[1000px] rounded-3xl p-11 origin-top gap-12 items-center overflow-hidden"
      >
        <div className="flex flex-col w-2/5 space-y-4 text-balance">
          <h2 className="text-4xl font-bold">{title}</h2>
          <div className="my-1">
            <p>{description}</p>
          </div>
        </div>
        <div className="flex flex-col w-3/5 aspect-square rounded-3xl relative">
          <Image
            src={src}
            alt="image"
            width={1000}
            height={1000}
            className="absolute size-[140%] object-cover inset-0 m-auto transform -translate-x-1/2 -translate-y-1/2 left-1/2 top-1/2"
          />
        </div>
      </motion.div>
    </div>
  );
}