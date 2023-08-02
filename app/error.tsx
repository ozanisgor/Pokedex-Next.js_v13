"use client";

import { useEffect } from "react";

type ErrorProps = {
  error: any;
  reset: () => void;
};

export default function Error({ error, reset }: ErrorProps) {
  useEffect(() => {
    console.log(error);
  }, [error]);

  return (
    <div className="text-center mt-10">
      <h2>Something went wrong</h2>
      <button className="hover:text-red-600" onClick={() => reset()}>
        Try Again
      </button>
    </div>
  );
}
