// provare delle api 



// Via UI
//postman.com -> provare api demo

// testata su postman e verificati i risultati -> proviamo con axios

//AXIOS - inserire script axios via cdn (documentazione)

//swapi.dev/api -> api
//jsonplaceholder.com -> (scegliere un placeholder dal sito) -> file json di placeholder
// discografia.json -> lettura file json

axios.get("usrl/api/").then((res)=>{
    // successo
    console.log("SUCCESS", res);
    console.log(res.data);
}).then((err)=>{
    //ERRORE
    console.log("ERROR", err);
}).then(()=>{
    // operazioni da eseguire sempre dopo succ ed err
    console.log("THAN");
})