// - Routing

const users = [
    { firstName: "Reimu",  lastName: "Hakurei"    },
    { firstName: "Marisa", lastName: "Kirisame"   },
    { firstName: "Sanae",  lastName: "Kochiya"    },
    { firstName: "Sakuya", lastName: "Izayoi"     },
    { firstName: "Momiji", lastName: "Inubashiri" }
];
module.exports = (app)=>{
    app.get("/api",(req,res)=>{
        console.log(req);
        res.json({message:"OK 👌"})
    } )
    // CRUD  = Create Read(All/One) Update Delete
    // ! Same routes different verbs
    // - SEND All the users = ReadAll
    app.get("/api/users",(req,res)=>{
        res.json({users})
    })
    
    // -- SEND One Single User
    app.get("/api/users/:idx", (req,res)=>{
        console.log("*****************",req.params,"********************");
        console.log(users[req.params.idx]);
        res.json({message:"Index Well Received",user:users[req.params.idx]})
    })
    
    // --Add user to the users  = Create
    app.post("/api/users", (req,res)=>{
        console.log("----------------",req.body,"--------------------");
        users.push(req.body)
        res.json({message:"User Submitted"})
    })
    
    // - Update
    app.put("/api/users/:idx", (req,res)=>{
        const {idx} = req.params
        console.log(`Index = ${idx} -------- new User Infos ${req.body.firstName}`);
    
        // {...users[idx] = firstName: "Reimu",  lastName: "Hakurei",...req.body = firstName: "AAAAAAAAAAAAAAAAA"}
        // users[idx] = req.body
        users[idx] = {...users[idx], ...req.body}
        res.json({message:"Ok !!!!"})
    
    })
    
    // -  DELETE one user
    app.delete("/api/users/:idx",(req,res) => {
        const {idx} = req.params
        const deletedUser = users[idx]
        users.splice(idx,4)
        console.log(users);
        res.json({
            status:"OK 👌",
            deletedUser
        })
    })
}