import Attributes from "../modules/Attributes";
import Baner from "../modules/Baner";
import Companies from "../modules/Companies";
import Definition from "../modules/Definition";
import Guide from "../modules/Guide";
import Instruction from "../modules/Instruction";
import Restrictions from "../modules/Restrictions";
import styles from "./HomePage.module.css";

function HomePage() {
  return (
    <div className={styles.container}>
      <Baner/>
      <Attributes/>
      <Definition/>
      <Companies/>
      <Instruction/>
      <Guide/>
      <Restrictions/>
    </div>
  );
}

export default HomePage;
