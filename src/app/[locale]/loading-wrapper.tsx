"use client";

import { useEffect, useState } from "react";
import Loading from "./loading";

export default function LoadingWrapper({ children }: { children: React.ReactNode }) {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 1000);
    return () => clearTimeout(timer);
  }, []);

  return loading ? <Loading /> : <>{children}</>;
}
