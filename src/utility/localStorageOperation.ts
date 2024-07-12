export interface IlsCart {
  userId: string;
  itemId: string;
  quantity: number;
}
export default function localCart(
  type: string,
  userId: string,
  itemId: string
) {
  let currentLs: IlsCart[] | [] = [];
  if (type && userId && itemId) {
    const getLs = localStorage.getItem("electronic_store");
    if (getLs) {
      currentLs = JSON.parse(getLs);
    } else {
      localStorage.setItem("electronic_store", JSON.stringify([]));
    }
    if (type === "addItem") {
      currentLs = [...currentLs, { userId, itemId, quantity: 1 }];
      // localStorage.setItem(
      //   "electronic_store",
      //   JSON.stringify([...currentLs,{ userId, itemId, quantity: 1 }])
      // );
    }
    if (type === "increase") {
      currentLs = currentLs.map((item) => {
        console.log("inc");
        if (item.itemId === itemId) {
          item.quantity++;
        }
        return item;
      });
    }
    if (type === "decrease") {
      currentLs = currentLs.map((item) => {
        if (item.itemId === itemId && item.quantity > 1) {
          item.quantity--;
        }
        return item;
      });
    }
    if (type === "remove") {
      currentLs = currentLs.filter((item) => item.itemId !== itemId);
    }
  }
  localStorage.setItem("electronic_store", JSON.stringify(currentLs));
  return currentLs;
}
