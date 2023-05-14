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
        console.log(data);
        if(data.role === "volunteer"){
            console.log(" adding user to database.")
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
        }
    }

}  


const authContext = createContext(null);

export const AuthProvider = ({children})=>{
    
    const navigate = useNavigate();
    const[user, setUser] = useState(null);
    const[userRole, setUserRole] = useState(null);

    if(user === null){
        onAuthStateChanged(firebaseAuth, async(_user)=>{
            if(_user){
                console.log(_user.uid + _user.email)
                const db = getDatabase();
                await get(child(ref(db), 'public/volunteers/data/' + _user.uid + "/publicData")).then((snapshot)=>{
                    if(snapshot.exists()){
                        console.log(snapshot.val().username + " snapshot")
                        const username = snapshot.val().username
                        const userrole = snapshot.val().role
                        console.log(userrole + " role")
                        setUser(username)
                        setUserRole(userrole)
 
                        if(userrole === "volunteer"){
                            setUser(username)
                            console.log("navigating now")
                            navigate(`/volProfile/${username}`, {replace:true})
                        }                                     
                        else
                            navigate(`/ngoProfile/${username}`, {replace:true})                         
    
                    }else{
                        console.log("no data available")
                        alert("no data available")
                    }
                })
            }
        })
    }
    
    // setFirebaseApp(app);

    const getUsername = async () =>{
        console.log("in getusername")
        onAuthStateChanged(firebaseAuth, async (_user)=>{
            if(_user){
                console.log(_user.uid + _user.email)
                const db = getDatabase();
                await get(child(ref(db), 'public/volunteers/data/' + _user.uid + "/publicData")).then((snapshot)=>{
                    if(snapshot.exists()){
                        console.log(snapshot.val().username + " snapshot")
                        const username = snapshot.val().username
                        
                        setUser(username)
                        setUserRole(snapshot.val().role)
                        console.log(username + " username " + user)
                        console.log(userRole)
                        if(_user.role === "volunteer"){
                            setUser(username)
                            console.log("navigating now")
                            navigate(`/volProfile/${username}`, {replace:true})
                        }                                     
                        else
                            navigate(`/ngoProfile/${username}`, {replace:true})                         
    
                    }else{
                        console.log("no data available")
                        alert("no data available")
                    }
                })
            }
        })
    }

    const login = async (_user)=>{
        console.log("started login...")

        await signInWithEmailAndPassword(firebaseAuth, _user.email, _user.password).then((userCred)=>{
            const __user = userCred.user;
            console.log(__user.email + " user ") 
            getUsername();
            console.log("after getusername")        
            
                                    
            
        }).catch((err)=>{
            console.log(err.message);
            alert(err.message)
        })

    }

    const create = async(__user)=>{
        await createUserWithEmailAndPassword(firebaseAuth, __user.email, __user.password).then((userCred)=>{
            const _user = userCred.user;
            console.log(_user.uid)
            setUser(__user.username);        
            setUserRole(__user.role)
            __user.uid = _user.uid;
            console.log(__user + " user");
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
        }).catch((err)=>{
            console.log(err)
        })
       
    }

    return (<authContext.Provider value={{ user, userRole, login, logout, create}}>
        {children}
    </authContext.Provider>
    )

}

export const useAuth = () =>{
    return useContext(authContext);
}