"use client";

import Lottie from "lottie-react";
import { useEffect, useState } from "react";

export default function AnimationLottie({ animationPath }) {
  const [data, setData] = useState(null);

  useEffect(() => {
    fetch(animationPath)
      .then(res => res.json())
      .then(json => setData(json))
      .catch(err => console.error(err));
  }, [animationPath]);

  if (!data) return null;

  return <Lottie animationData={data} loop />;
}
