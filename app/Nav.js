import Link from "next/link";
import React from "react";
import Container from "../components/Styled/Container";
import BgBase from "../components/Styled/BgBase";

export default function Nav() {
  return (
    <nav className="fixed top-0 z-20 left-0 w-full shadow-lg">
      <BgBase>
        <Container>
          <div className="flex justify-between">
            <h2>
              <Link href="/">LiveShop</Link>
            </h2>
            <div className="w-auto flex space-x-3">
                <h2>
                  <Link href="/shopping/map">Map</Link>
                </h2>
                <h2>
                  <Link href="/shopping">Shop</Link>
                </h2>
                <h2>
                  <Link href="/shopping/live">Go Live</Link>
                </h2>
              </div>
            <div className="w-fit flex space-x-3">
              <h2>
                <Link href="/dashboard">Dashboard</Link>
              </h2>
              <h2>
                <Link href="/login">Login</Link>
              </h2>
              <h2>
                <Link href="/register">Register</Link>
              </h2>
            </div>
          </div>
        </Container>
      </BgBase>
    </nav>
  );
}
