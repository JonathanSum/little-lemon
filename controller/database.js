import * as SQLite from "expo-sqlite";

const db = SQLite.openDatabase("little_lemon");

export async function checkLogin() {
  return new Promise((resolve, reject) => {
    db.transaction(
      (tx) => {
        tx.executeSql(
          "create table if not exists menuItems (id integer not null, description text, image text, name text, price text, category text, PRIMARY KEY (id));"
        );
      },
      reject,
      resolve //
    );
  });
}
export async function createTable(type) {
  if (type === "food") {
    return new Promise((resolve, reject) => {
      db.transaction(
        (tx) => {
          tx.executeSql(
            "create table if not exists menuItems (id integer not null, description text, image text, name text, price text, category text, PRIMARY KEY (id));"
          );
        },
        reject,
        resolve //
      );
    });
  } else if (type === "user") {
    return new Promise((resolve, reject) => {
      db.transaction(
        (tx) => {
          tx.executeSql(
            "create table if not exists Profile (\
              firstName varchar(255),\
                lastName varchar(255),\
                email varcgar(255),\
                phone varchar(255),\
                avatar text,\
                check_statues BOOLEAN NOT NULL CHECK (check_statues IN (0, 1)) DEFAULT 0,\
                check_pw_change BOOLEAN NOT NULL CHECK (check_pw_change IN (0, 1)) DEFAULT 0,\
                check_special BOOLEAN NOT NULL CHECK (check_special IN (0, 1)) DEFAULT 0,\
                check_news_letter BOOLEAN NOT NULL CHECK (check_news_letter IN (0, 1)) DEFAULT 0\
              )"
          );
        },
        reject,
        resolve //
      );
    });
  }
}

export async function getMenuItems() {
  return new Promise((resolve) => {
    db.transaction((tx) => {
      tx.executeSql("select * from menuItems", [], (_, { rows }) => {
        resolve(rows._array);
      });
    });
  });
}
export async function getProfile() {
  return new Promise((resolve, reject) => {
    db.transaction(
      (tx) => {
        tx.executeSql("select * from Profile", [], (_, { rows }) => {
          resolve(rows._array);
          console.log("Profile rows", rows);
        });
      },
      reject,
      resolve
    );
  });
}

export function saveMenuItems(menuItems) {
  db.transaction((tx) => {
    menuItems.map((item) => {
      tx.executeSql(
        `insert into menuItems (description, image, name, price, category) values ("${item.description}", "${item.image}", "${item.name}","${item.price}", "${item.category}");`
      );
    });
  });
}
export async function cleanProfile() {
  db.transaction((tx) => {
    tx.executeSql(`truncate table Profile;`);
  });
}
export async function getAvatar() {
  return new Promise((resolve) => {
    db.transaction((tx) => {
      tx.executeSql(`select avatar from Profile;`, [], (_, { rows }) => {
        resolve(rows._array);
        console.log("avatar: ", rows);
      });
    });
  });
}

export function saveProfile(profile) {
  db.transaction((tx) => {
    tx.executeSql(
      `insert into Profile (firstName, lastName, email, phone, avatar, check_statues, check_pw_change, check_special, check_news_letter)
        values ("${profile.firstName}",
                "${profile.lastName}",
                "${profile.email}",
                "${profile.phone}",
                "${profile.avatar}",
                "${profile.check_statues}",
                "${profile.check_pw_change}",
                "${profile.check_special}",
                "${profile.check_news_letter}");`
    );
  });
}
export async function filterByQueryAndCategories(query, activeCategories) {
  console.log("filtering with query:", query);
  console.log("filtering with activeCategories:", activeCategories);
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
            // console.log(rows);
          }
        );
      }, reject);
    } else {
      db.transaction((tx) => {
        tx.executeSql(
          `select * from menuItems where (name like '%${query}%') and (${activeCategories
            .map((category) => `category='${category}'`)
            .join(" or ")})`,
          [],
          (_, { rows }) => {
            resolve(rows._array);
            // console.log(rows);
          }
        );
      }, reject);
    }
  });
}
