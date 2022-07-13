import { initializeApp, credential as _credential, firestore } from "firebase-admin";
const admin = require("firebase-admin");

// -----------------connection-------------------//

const connectFirebase = async () => {
    var serviceAccount = require("../daos/productos/jfperez-developer-firebase-adminsdk-8wgiz-c85135dccb.json");

    admin.initializeApp({
        credential: admin.credential.cert(serviceAccount)
    });
    console.log('DB connected [firebase]');
}
export default connectFirebase;