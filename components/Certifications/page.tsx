import SolutionsArchitectAssociateBadge from "../Badges/SAA/page";
import CloudPractitionerBadge from "../Badges/CP/page";
import styles from "./page.module.css";

const Certifications = () => {
  return (
    <div className={styles.certifications}>
      <SolutionsArchitectAssociateBadge height={130} width={130} />
      <CloudPractitionerBadge height={130} width={130} />
    </div>
  );
};

export default Certifications;
