"use client";

import React from "react";

export default function Error({ error, reset }: any) {
  return (
    <>
      <h1>Something went wrong</h1>
      <h2>{error.message}</h2>
      <button>
        <h3 onClick={() => reset()}>Retry</h3>
      </button>
    </>
  );
}
