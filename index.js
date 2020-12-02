const express=require("express")

const bodyParser =require("body-parser")
const app=express()
const port= 8080


app.use(bodyParser())

app.get('/',(request,response)=>{
    console.log('This is the request',request.body)
    response.send('this the assignment backend')


})

app.get('/login',(request,response)=>{
    console.log(request)
    console.log(request)
    const userData=require('./userjson')
    response.json(usersData)
})
 
app.post('/login',(request,response)=>{
    const requestBody=request.body
    console.log(requestBody)
    response.send({action:'log in',message:"sucessfull!",body:requestBody})
})

app.delete('/login',(request,response)=>{
const users=require('./test.json')
const deleteUsers=users.pop()
response.send(deleteUsers)})

app.listen(port,()=>{
    console.log(`Application is running on port ${port}`)
})

