'use client'

import Image from "next/image";
import { useState } from "react";

const BlurImage = ({ src, ...props }) => {
  const [isLoading, setLoading] = useState(true);

  return (
    <Image
      {...props}
      src={src}
      layout="fill"
      objectFit="cover"
      className={`
          w-full duration-700 ease-in-out
          object-cover desktop:object-left-top
          ${
            isLoading
              ? "scale-105 blur-2xl grayscale"
              : "scale-100 blur-0 grayscale-0"
          })`}
      onLoadingComplete={() => setLoading(false)}
    />
  );
}

export default BlurImage