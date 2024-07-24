import { Outlet } from "react-router-dom";

const Layout = () => {
  return (
    <main className="min-h-screen bg-background text-foreground">
      <Outlet />
    </main>
  );
};

export default Layout;