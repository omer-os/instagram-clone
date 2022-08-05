import React from "react";
import { Layout } from "../components";
import Link from "next/link";

export default function ErrorPage() {
  return (
    <Layout>
      <div className="text-2xl font-bold m-3">
        page not found{" "}
        <Link href="/">
          <a className="text-blue-500">go to home page</a>
        </Link>
      </div>
    </Layout>
  );
}
