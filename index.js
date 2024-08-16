require("dotenv").config();
const cors = require("cors")
const express = require("express");
const web3 = require("web3")
const http = require("http")

const axios = require("axios")


const app = express();
const server = http.createServer(app);
app.use(express.static("public"));
app.use(cors());
app.use(express.json());


app.post("/sendFunds", (req, res)=>{
    try{
        var {acct1, acct2, ethr} = req.body;
        web3.eth.sendTransaction({from: acct1, to:acct2, value: web3.utils.toWei(ethr, 'ether'), gasLimit: 21000, gasPrice: web3.utils.toWei('20', 'gwei')});

        res.status(200).json({
            success: true,
            message: "Transaction Sent",
            txHash: tx.transactionHash 
        })
    }catch(err){
        console.log(err);
        res.status(400).json({success: false,
            error: err.message
        })
    }


})

app.get("/working", (req, res)=>{
    res.send("working")
})


server.listen(process.env.PORT, () => {
    console.log("Connected to DB and Server is Running");
});