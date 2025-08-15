'use client';
import { useEffect, useState } from 'react';
import { usePathname } from 'next/navigation';
import "../style/loader.css";

export default function Loader() {
  const [loading, setLoading] = useState(true);
  const pathname = usePathname();

  useEffect(() => {
    setLoading(true);
    const timer = setTimeout(() => {
      setLoading(false);
    }, 1000); // adjust duration if needed

    return () => clearTimeout(timer);
  }, [pathname]);

  if (!loading) return null;

  return (
    <div id="loader">
      <img src="/images/another/loader.webp" alt="Loading..." />
      <p>MOUBA IS SLAPPING TO LOAD THE SITE!</p>
    </div>
  );
}
