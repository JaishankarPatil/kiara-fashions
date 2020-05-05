import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

const config = {
  apiKey: "AIzaSyCOvt-MW64u2ZhOqIFZDlQOtnOoLN8EkX4",
  authDomain: "kiarafashions-db-ad16c.firebaseapp.com",
  databaseURL: "https://kiarafashions-db-ad16c.firebaseio.com",
  projectId: "kiarafashions-db-ad16c",
  storageBucket: "kiarafashions-db-ad16c.appspot.com",
  messagingSenderId: "678185641533",
  appId: "1:678185641533:web:fe538fcc59804a6163ac54",
  measurementId: "G-K6FTB91CNS",
};

firebase.initializeApp(config);

export const addCollectionAndDocument = async (collectionKey, objectsToAdd) => {
  const collectionRef = firestore.collection(collectionKey);
  const batch = firestore.batch();
  console.log(collectionRef);
  objectsToAdd.forEach((object) => {
    const newDocRef = collectionRef.doc();
    console.log(newDocRef);
    batch.set(newDocRef, object);
  });

  //return await batch.commit();
};

export const convertStoreItemsSnapshotToMap = (storeItemsSnapshot) => {
  const transferedStoreItems = storeItemsSnapshot.docs.map((doc) => {
    const { title, items } = doc.data();

    return {
      routeName: encodeURI(title.toLowerCase()),
      id: doc.id,
      title,
      items,
    };
  });
  return transferedStoreItems.reduce((accumulator, storeItem) => {
    accumulator[storeItem.title.toLowerCase()] = storeItem;
    return accumulator;
  }, {});
};

export const firestore = firebase.firestore();

//export default firebase;
