import Card from "../modules/Card";
import styles from "./MenuPage.module.css";

function MenuPage({ data }) {
  console.log(data);
  return (
    <div className={styles.container}>
      <h3>Menu</h3>
      <div className={styles.subcontainer}>
        {data.map((item) => (
          <Card key={item.id} {...item}/>
        ))}
      </div>
    </div>
  );
}

export default MenuPage;
