
import "../styles/globals.css";
import Nav from "./Nav";

export default function RootLayout({ children }) {
  return (
    <html>
      <head />
      <body className="text-base text-slate-900 dark:text-slate-300 bg-gray-100 dark:bg-slate-900">
        <main className="relative">
          <Nav />
          <div className="mt-[4rem]" style={{zIndex: 1}}>{children}</div>
        </main>
      </body>
    </html>
  );
}
