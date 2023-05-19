import { Head } from "next/document";
import Link from "next/link";
import { useRouter } from "next/router";
import React from "react";

function CoffeeStore() {
  const router = useRouter();
  return (
    <>
      <div>CoffeeStore {router.query.id}</div>
      <hr />
      <Link href="/">Back to homepage</Link>
      <hr />
      <Link href="/coffeestore/dynamic">Go to dynamic page</Link>
    </>
  );
}

export default CoffeeStore;
