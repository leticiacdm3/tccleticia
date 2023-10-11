//ARQUIVO PARA ACESSAR O BANCO DE DADOS DO FIREBASE

import { getFirestore, collection, addDoc, setDoc, doc } from "firebase/firestore";
import { auth } from "./firebase-auth";
import { app } from "./firebase-app"

const db = getFirestore(app);

//FUNCAO PARA ADICIONAR UM DOCUMENTO NA COLEÇÃO "DOGS"
// const addDogFirebase = async (dogNome, dogRaca, dogPeso) => {
//     // Add a new document with a generated id.
//     //NESSE CASO, A CHAVE DO DOCUMENTO É DEFINIDA PELO FIREBASE
//     const docRef = await addDoc(collection(db, "dogs"), {
//         nome: dogNome,
//         peso: dogPeso,
//         raca: dogRaca,
//         user: auth.currentUser.uid //Define cão como do usuario atual
//     });
// }


const addUserFirestore = async (userCredential, name, cpf, phone, birthDate, estado, perfil  ) => {
    const uid = auth.currentUser.uid;
    const data = {
        name : name,
        cpf: cpf,
        phone: phone,
        birthDate: birthDate,
        state: estado,
        profile: perfil
        
    }
    //NESSE CASO, A CHAVE DO DOCUMENTO IGUAL AO USER ID (UID)
    console.log(data)
    return await setDoc(doc(db, "usuarios", uid), data);
    
}


//EXPORTA AS FUNCOES
export {addUserFirestore}