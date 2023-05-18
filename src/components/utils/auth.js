import { useState, createContext, useContext } from "react";
import {initializeApp} from "firebase/app"
import {createUserWithEmailAndPassword, getAuth , onAuthStateChanged, signInWithEmailAndPassword} from "firebase/auth"
import { useNavigate } from "react-router-dom";
import {getDatabase, ref, set, child, get} from "firebase/database"


// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: process.env.API_KEY,
    authDomain: process.env.AUTH_DOMAIN,
    databaseURL: process.env.DATABASE_URL,
    projectId: process.env.PROJECT_ID,
    storageBucket: process.env.STORAGE_BUCKET,
    messagingSenderId: process.env.MESSAGING_SENDER_ID,
    appId: process.env.APP_ID,
    measurementId: process.env.MEASUREMENT_ID
  };

  
  // Initialize Firebase
  
  const app = initializeApp(firebaseConfig);
  const firebaseAuth = getAuth(app)

function addUserToDatabase(data){
    const db = getDatabase();

    if(data!== null){
        
        if(data.role === "volunteer"){
            
            set(ref(db, 'public/volunteers/data/' + data.uid + "/publicData"), {
                username: data.username,
                email: data.email,
                profilePic: data.profilePic,
                role: data.role,
                mobile: data.mobNo
            }).catch((err)=>{
                console.log(err)
                alert(err)
            })
        }else if(data.role === "ngo"){
            console.log(data)
            

            set(ref(db, 'public/ngo/ngoList/' + data.uid ), {
                data
            })
        }
    }

}  


const authContext = createContext(null);

export const AuthProvider = ({children})=>{
    
    const navigate = useNavigate();
    const[user, setUser] = useState(null);
    const[userRole, setUserRole] = useState(null);

    const logInNgo = async(_user)=>{

        const db = getDatabase();
        await get(child(ref(db), 'public/ngo/ngoList/' + _user.uid + "/data")).then((snapshot)=>{
            if(snapshot.exists()){
                console.log(snapshot.val())
                const ngoUser = snapshot.val();
                console.log(ngoUser["orgName"] + ngoUser["role"])
                setUser(ngoUser["orgName"])
                setUserRole(ngoUser["role"])
                if(window.location.pathname === "/ngo_auth")                                  
                {
                    console.log(window.location.pathname + " path ngo " + window.location.pathname === "/ngo_auth")                    
                    navigate(`/ngoProfile/${ngoUser["orgName"]}`, {replace:true})  
                }
            }else{
                console.log("nopes")
            }
        })

    }

    if(user === null){        

        onAuthStateChanged(firebaseAuth, async(_user)=>{
            if(_user){
                console.log(_user.uid + _user.email)
                const db = getDatabase();
                await get(child(ref(db), 'public/volunteers/data/' + _user.uid + "/publicData")).then((snapshot)=>{
                    if(snapshot.exists()){
                        
                        const username = snapshot.val().username
                        const userrole = snapshot.val().role
                        
                        setUser(username)
                        setUserRole(userrole)
                        console.log(window.location.pathname + " first path")
                        if(window.location.pathname === "/volunteer_auth"){
                            console.log(window.location.pathname + " path vol " + window.location.pathname === "/volunteer_auth")                                                        
                            navigate(`/volProfile/${username}`, {replace:true})
                        }else if(window.location.pathname === "/ngo_auth")                                  
                        {
                            console.log(window.location.pathname + " path ngo " + window.location.pathname === "/ngo_auth")
                            setUser(username)
                            navigate(`/ngoProfile/${username}`, {replace:true})   
                        }                   
    
                    }else{                        
                        logInNgo(_user)
                    }
                })
            }
        })
    }
    
    // setFirebaseApp(app);

    const getNgoData = async()=>{
        const db = getDatabase();
        await get(child(ref(db), 'public/ngo/ngoList/' )).then((snapshot)=>{
            if(snapshot.exists()){
                const ngoData = snapshot.val().ngoList
                console.log(ngoData)
            }
        })
    }

    const getUsername = async () =>{        
        onAuthStateChanged(firebaseAuth, async (_user)=>{
            if(_user){                
                const db = getDatabase();
                await get(child(ref(db), 'public/volunteers/data/' + _user.uid + "/publicData")).then((snapshot)=>{
                    if(snapshot.exists()){                        
                        const username = snapshot.val().username
                        
                        setUser(username)
                        setUserRole(snapshot.val().role)                        
                        
                        setUser(username)   
                        console.log(window.location.pathname + " sec path")                     
                        if(window.location.pathname === "/volunteer_auth"){
                            console.log(window.location.pathname + " path vol " + window.location.pathname === "/volunteer_auth")                                                        
                            navigate(`/volProfile/${username}`, {replace:true})
                        }else if(window.location.pathname === "/ngo_auth")                                  
                        {
                            console.log(window.location.pathname + " path ngo " + window.location.pathname === "/ngo_auth")
                            setUser(username)
                            navigate(`/ngoProfile/${username}`, {replace:true})   
                        }
                                                  
    
                    }else{                        
                        logInNgo(_user)
                    }
                })
            }
        })
    }

    const login = async (_user)=>{        
        console.log(_user)
        await signInWithEmailAndPassword(firebaseAuth, _user.email, _user.password).then((userCred)=>{                       
            getUsername();                                                                        
        }).catch((err)=>{
            console.log(err.message);
            alert(err.message)
        })

    }

    const create = async(__user)=>{

        var pass = ""
        var email = ""

        if(__user.role === "volunteer"){
            email = __user.email
            pass = __user.password
        }else{
            email = __user.orgEmail
            pass = __user.pass
        }



        await createUserWithEmailAndPassword(firebaseAuth, email, pass).then((userCred)=>{
            const _user = userCred.user;            
            setUser(__user.username);        
            setUserRole(__user.role)
            __user.uid = _user.uid;  
            addUserToDatabase(__user)
            
            if(__user.role === "volunteer")
                navigate(`/volProfile/${__user.username}`, {replace:true})
            else
                navigate(`/ngoProfile/${__user.username}`, {replace:true}) 

        }).catch((err)=>{
            console.log(err)
            alert(err);
        })
    }

    const logout = () =>{
        firebaseAuth.signOut().then(()=>{
            setUserRole(null);
            setUser(null);
            navigate('/')
        }).catch((err)=>{
            console.log(err)
        })
       
    }

    return (<authContext.Provider value={{ user, userRole, login, logout, create, getNgoData}}>
        {children}
    </authContext.Provider>
    )

}

export const useAuth = () =>{
    return useContext(authContext);
}