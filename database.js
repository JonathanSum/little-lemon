import * as SQLite from "expo-sqlite";

const db = SQLite.openDatabase("little_lemon");

export async function createTable() {
  return new Promise((resolve, reject) => {
    db.transaction(
      (tx) => {
        tx.executeSql(
          "create table if not exists menuItems (id integer not null, description text, image text, name text, price text, category text, PRIMARY KEY (id));"
        );
      },
      reject,
      resolve
    );
  });
}

export async function getMenuItems() {
  return new Promise((resolve) => {
    db.transaction((tx) => {
      tx.executeSql("select * from menuItems", [], (_, { rows }) => {
        console.log(rows);
        resolve(rows._array);
      });
    });
  });
}

export function saveMenuItems(menuItems) {
  console.log("Yes???");
  db.transaction((tx) => {
    menuItems.map((item) => {
      tx.executeSql(
        `insert into menuItems (description, image, name, price, category) values ("${item.description}", "${item.image}", "${item.name}","${item.price}", "${item.category}");`
      );
      //   tx.executeSql(
      //     `insert into menuItems (description, image, name, price, category) values (d1, i1, n1, p1,c1);`
      //   );
      //   console.log(`insert into menuItems (description, image, name, price, category) values
      //     ("${item.description}",
      //     ${item.image},
      //     ${item.name},
      //     ${item.price}),
      //   ${item.category})`);
    });
    // tx.executeSql(
    //   `insert into menuItems (description, image, name, price) values ${menuItems.map(
    //     (item) =>
    //       `('${item.name}',
    //       '${item.price}',
    //       '${item.name}',
    //       '${item.description}'),
    //       '${item.category}')`
    //   )}`
    // );
  });
  db.transaction((tx) => {
    tx.executeSql("select * from menuItems", [], (_, { rows }) => {
      console.log(rows);
    });
  });
  console.log("Yess!?");
}

export async function filterByQueryAndCategories(query, activeCategories) {
  return new Promise((resolve, reject) => {
    if (!query) {
      db.transaction((tx) => {
        tx.executeSql(
          `select * from menuItems where ${activeCategories
            .map((category) => `category='${category}'`)
            .join(" or ")}`,
          [],
          (_, { rows }) => {
            resolve(rows._array);
          }
        );
      }, reject);
    } else {
      db.transaction((tx) => {
        tx.executeSql(
          `select * from menuItems where (title like '%${query}%') and (${activeCategories
            .map((category) => `category='${category}'`)
            .join(" or ")})`,
          [],
          (_, { rows }) => {
            resolve(rows._array);
          }
        );
      }, reject);
    }
  });
}
