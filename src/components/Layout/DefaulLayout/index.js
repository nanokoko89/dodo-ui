import classNames from "classnames/bind";
import Header from "~/components/Layout/components/Header";
import styles from "./DefaulLayout.module.scss";
import Sidebar from "./Sidebar";
const cx = classNames.bind(styles);
export default function DefaulLayout({ children }) {
  return (
    <div className={cx("wrapper")}>
      <Header />
      <div className={cx("container")}>
        <Sidebar />
        <div className={cx("content")}>{children}</div>
      </div>
    </div>
  );
}
