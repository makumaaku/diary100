import firebase from 'firebase'

const config ={
    projectId :process.env.FIREBASE_PROJECT_ID
}

//二重で初期化しないように
if(!firebase.apps.length){
    firebase.initializeApp(config)
}

//他の場所から使えるように
export default firebase