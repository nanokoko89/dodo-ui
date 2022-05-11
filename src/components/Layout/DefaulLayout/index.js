import Header from "~/components/Layout/components/Header";
import Sidebar from "./Sidebar";

export default function DefaulLayout({ children }) {
  return (
    <div>
      <Header />
      <div className="container">
        <Sidebar />
        <div className="content">{children}</div>
      </div>
    </div>
  );
}
