import db from '../firebase';


export const setDoc = (category,title,content,startdate,completedate,base64,history) =>{
    db.collection("tb_project").add({
        category:category,
        title:title,
        content:content,
        startdate:startdate,
        completedate:completedate,
        image:base64
    }).then((docRef)=>{
        console.log("Document written with ID",docRef.id);
        history.push('/admin/DashBoard/list');
    }).catch((error)=>{
        alert("Error adding document:",error);
    })
}

export const Doclist = () =>{
    
}