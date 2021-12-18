# To run this app just:

- Clone this repository to your folder
- Type "npm install" in terminal
- Type "npm install firebase" in terminal
- Create "firebase-config" js file in scr/components and put there config from firebase
- Now you can run this by "npm start" or "yarn start"

## info

#### code in firebase-config.js is below

import { initializeApp } from "firebase/app"; <br/>
import { getAuth } from "firebase/auth";

const firebaseConfig = {
apiKey: "xxxxxxxxxxxxxxxxxxxxxxxx",
authDomain: "xxxxxxxxxxxxxxxxxxxxxxxx",
projectId: "xxxxxxxxxxxxxxxxxxxxxxxx",
storageBucket: "xxxxxxxxxxxxxxxxxxxxxxxx",
messagingSenderId: "xxxxxxxxxxxxxxxxxxxxxxxx",
appId: "xxxxxxxxxxxxxxxxxxxxxxxx",
};
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
