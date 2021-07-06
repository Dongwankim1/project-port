import db from '../firebase';


export const setDoc = (category,title,content,startdate,completedate,base64) =>{
    db.collection("tb_project").add({
        category:category,
        title:title,
        content:content,
        startdate:startdate,
        completedate:completedate,
        image:base64
    }).then((docRef)=>{
        console.log("Document written with ID",docRef.id);
        console.log(docRef);
    }).catch((error)=>{
        alert("Error adding document:",error);
    })
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