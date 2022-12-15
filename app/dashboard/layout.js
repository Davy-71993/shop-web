
import React from "react";
import Link from "next/link";
import Container from "../../components/Styled/Container";
import BgPrimary from "../../components/Styled/BgPrimary";

export default function DashboardLayout({ children }) {
  return (
    <Container>
      <BgPrimary>
        <div className="flex min-h-[100vh] w-full text-base">
          <div className="h-auto w-1/5 flex flex-col space-y-4 p-5 bg-gray-300 dark:bg-slate-700">
            <h2 className="pb-2 border-b-2 text-center">My ShopName</h2>
            <div className="border-b-2 py-3">
              <h2 className="rounded-md p-2 text-sm dark:hover:bg-slate-800">
                <Link href="/dashboard/products">Products</Link>
              </h2>
              <h2 className="rounded-md ml-3 p-2 text-sm dark:hover:bg-slate-800">
                <Link href="/dashboard/products/in-stock">In Stock</Link>
              </h2>
              <h2 className="rounded-md ml-3 p-2 text-sm dark:hover:bg-slate-800">
                <Link href="/dashboard/products/out-of-stock">Out of Stock</Link>
              </h2>
              <h2 className="rounded-md ml-3 p-2 text-sm dark:hover:bg-slate-800">
                <Link href="/dashboard/products/sold">Sold</Link>
              </h2>
              <h2 className="rounded-md ml-3 p-2 text-sm dark:hover:bg-slate-800">
                <Link href="/dashboard/products/create">Create</Link>
              </h2>
            </div>
          </div>
          <div className="pl-5 pt-5 w-full min-h-[80vh]">
            {children}
          </div>
        </div>
      </BgPrimary>
    </Container>
  );
}
