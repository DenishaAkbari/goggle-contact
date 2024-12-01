import { getStorage, ref, uploadBytes } from "firebase/storage";
import { doc, setDoc, collection, getDocs , getDoc , deleteDoc } from "firebase/firestore";
import { db } from "../../firestore";

const addcon = (data) => ({
    type: "contacts",
    payload: data
});

const loading = () => {
    return {
        type : "loading"
    }
}

const error = (err) => {
    return {
        type : "error",
        payload : err
    }
}


const singlecon = (data) => {
    return {
        type: "singleData",
        payload: data

    }
}


export const image = (image) => {
    return {
        type : "imageuploaded",
        payload : image
    }
}



export const adddata = (formData) => {
    return async (dispatch) => {

        dispatch(loading())

        try{
            await setDoc(doc(db, "contacts", `${formData.id}`), formData);

            dispatch(addContact());
        }
        catch(err) {   
            dispatch(error(err))

        }
    }
}

export const addContact = () => {
    return async (dispatch) => {
        dispatch(loading())

        try{
            let users = [];

            const res = await getDocs(collection(db, "contacts"));

            users = res.docs.map((doc) => {
                return {
                    ...doc.data(),
                    id: doc.id 
                };
            });

            console.log("users", users);

            dispatch(addcon(users));
            
        }
        catch(err) {
            dispatch(error(err));
        }
    }
}


export const singleAsncy = (id) => {
    return async (dispatch) => {
        

           try {
            const singleRec = await getDoc(doc(db, "contacts", `${id}`));
            dispatch(singlecon(singleRec.data()));
        } catch (err) {
            dispatch(error(err));
        }
    

        
    };
};


export const updateAsncy = (formData) => {
    return async (dispatch) => {
        // dispatch(loding());
        try {

            await setDoc(doc(db, "contacts",`${formData.id}`), formData);

            dispatch(addContact());

        } catch (err) {
            console.error("Error updating employee data:", err);
            dispatch(error(err));
        }
    };
};



export const deleteAsync = (id) => {

    return async (dispatch) => {
        try {
            await deleteDoc(doc(db, "contacts", id));  

            dispatch(addContact());  

          } catch (err) {

            console.error("Error deleting document: ", err);
            
            dispatch(error(err)); 
          }
       
    }
}


export const imageuploaded = (image) => {

const storage = getStorage();
const storageRef = ref(storage, 'some-child');

// 'file' comes from the Blob or File API
uploadBytes(storageRef, file).then((snapshot) => {
  console.log('Uploaded a blob or file!');
});
}
