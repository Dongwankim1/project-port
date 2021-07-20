import db from '../firebase';


export const setDoc = async (category,title,content,startdate,completedate,devstuff,base64) =>{
    
    console.log('asdasd',category,title,content,startdate,completedate,devstuff,base64);
    const data = await db.collection("tb_project").add({
        category:category,
        title:title,
        content:content,
        startdate:startdate,
        completedate:completedate,
        devstuff:devstuff,
        image:[...base64]
    }).then((docRef)=>{
        console.log("Document written with ID",docRef.id);
        return docRef.get().then((doc) => {
            if (doc.exists) {
                return doc.data();
            } else {
                // doc.data() will be undefined in this case
                console.log("No such document!");
            }
        }).catch((error) => {
            console.log("Error getting document:", error);
        });

    }).catch((error)=>{
        alert("Error adding document:",error);
    })

    return data;
}

export const Doclist = async () =>{
    let jsondata = []
    await db.collection("tb_project").get().then((querySnapshot)=>{
        querySnapshot.forEach((doc)=>{

            jsondata.push({'id':doc.id,...doc.data()});
          
        })
    }).catch((error)=>{
        console.log("Error getting documents: ", error);
    })
    return jsondata;
}

export const DocUpdate = async (id,category,title,content,startdate,completedate,devstuff,base64) =>{

    const data = await db.collection("tb_project").doc(id).update({
        category:category || '',
        title:title || '',
        content:content || '',
        startdate:startdate || '',
        completedate:completedate || '',
        devstuff:devstuff || '',
        image:base64 || ''
    }).then((docRef)=>{
        return docRef.get().then((doc) => {
            if (doc.exists) {
                return doc.data();
            } else {
                // doc.data() will be undefined in this case
                console.log("No such document!");
            }
        }).catch((error) => {
            console.log("Error getting document:", error);
        });
    }).catch((error)=>{
        console.log(error);
    })

    return data;
}

export const DocDelete = async (id) =>{
    await db.collection("tb_project").doc(id).delete().then(()=>{
        console.log('complete')
    }).catch((error)=>{
        console.log(error);
    })
}


export const setDevDoc = async (devid,devurl) =>{
    const data = await db.collection("tb_devstuff").add({
        devid:devid,
        devurl:devurl,
    }).then((docRef)=>{
        console.log("Document written with ID",docRef.id);
        return docRef.get().then((doc) => {
            if (doc.exists) {
                return doc.data();
            } else {
                // doc.data() will be undefined in this case
                console.log("No such document!");
            }
        }).catch((error) => {
            console.log("Error getting document:", error);
        });

    }).catch((error)=>{
        alert("Error adding document:",error);
    })

    return data;
}

export const ListDevDoc = async () =>{
    const devdata = [];
    await db.collection("tb_devstuff").get().then((querySnapshot)=>{
        querySnapshot.forEach((doc)=>{

            devdata.push(doc.data().devid)
        })
    }).catch((error)=>{
        console.log("Error getting documents: ", error);
    })
    console.log('aaaa',devdata);
    return devdata;
}