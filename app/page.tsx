import Header from "@/components/Header/page";
import styles from "./page.module.css";
import Certifications from "@/components/Certifications/page";

export default function Home() {
  return (
    <div className={styles.page}>
      <div className={styles.home}>
        <Header />
        <Certifications />
      </div>
    </div>
  );
}
