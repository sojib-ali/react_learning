import { Outlet, NavLink } from "react-router-dom";

// import Products_page from "./chapter-6/page/Products_page";

export default function Header() {
  return (
    <header
      className="text-center text-slate-50
    bg-slate-900 h-40 p-5"
    >
      <img
        src="../../assets/react.svg"
        alt="logo"
        className="inline-block h-20"
      />

      <h1 className="text-2xl">React Tools</h1>
      <nav>
        {/* <Products_page /> */}

        <NavLink
          to="nav-bar/products-list"
          className={({ isActive }) =>
            `text-white no-underline p-1 pb-0.5 border-solid border-b-2 ${
              isActive ? "border-white" : "border-transparent"
            }`
          }
        >
          Products
        </NavLink>
      </nav>
      <Outlet />
    </header>
  );
}
