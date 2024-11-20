import { db } from "../_utils/firebase";
import { collection, getDocs, addDoc, query } from "firebase/firestore";

export const getItems = async (userId, itemsSetter) => {
  try {
    const allItemsReference = collection(db, "users", userId, "items");
    const allItemsQuery = query(allItemsReference);
    const queryItems = await getDocs(allItemsQuery);

    let items = [];
    queryItems.forEach((docItem) => {
      let thisItem = {
        name: docItem.name,
        quantity: docItem.quantity,
        category: docItem.category,
        ...docItem.data(),
      };
      items.push(thisItem);
    });

    console.log(items);
    itemsSetter(items);
  } catch (error) {
    console.log(error);
  }
};

export const addItem = async (userId, item) => {
  try {
    const newItemReference = collection(db, "users", userId, "items");
    const newItemPromise = await addDoc(newItemReference, item);
    console.log(newItemPromise.id);
    return newItemPromise.id;
  } catch (error) {
    console.log(error);
  }
};
