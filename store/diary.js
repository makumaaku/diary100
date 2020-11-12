import firebase from "~/plugins/firebase";
import { firestoreAction } from "vuexfire";

const db = firebase.firestore();
const diaryRef = db.collection("diary");

export const state = () => ({
  diaries: []
});

export const actions = {
  init: firestoreAction(({ bindFirestoreRef }) => {
    bindFirestoreRef("diary", diaryRef);
  }),
  add: firestoreAction((context,diary) => {
    if (diary.name.trim() && diary.desc.trim()) {
      diaryRef.add({
        name: diary.name,
        desc: diary.desc,
        public: false,
        created: firebase.firestore.FieldValue.serverTimestamp()
      });
    }
  }),
  remove: firestoreAction((context, id) => {
    diaryRef.doc(id).delete();
  })
};
