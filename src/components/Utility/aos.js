"use client";

import { useEffect } from "react";

export function AOSInit() {
  useEffect(() => {
    // Import AOS only on client side
    import("aos").then((AOS) => {
      AOS.default.init({
        duration: 1000,
        once: true,
        offset: 100,
      });
    });
  }, []);

  return null;
}
