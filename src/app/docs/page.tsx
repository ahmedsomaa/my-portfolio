"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";

const DocsPage = () => {
  const router = useRouter();

  useEffect(() => {
    // Redirect to the desired URL
    router.replace("https://docs.nextth.ing/");
  }, [router]);

  // Return null since we are redirecting
  return null;
};

export default DocsPage;
