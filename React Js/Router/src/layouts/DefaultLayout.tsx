import { Outlet, Link } from "react-router-dom";
const DefaultLayout = () => {
  return (
    <div>
      <nav>
        <Link to="/">Home</Link> |<Link to="/about">About</Link> |<Link to="/login">Login</Link>
      </nav>
      <main>
        <Outlet />
      </main>
    </div>
  );
};

export default DefaultLayout;
