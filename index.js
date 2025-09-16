function productFind(password){

    return new Promise(

        (resolve, reject)=>{

            setTimeout(()=>{

                if(password == "1234"){

                    resolve([
                        {id: "1234", name: "Laptop", price: 45000},
                        {id: "5678", name: "Mobile", price: 25000},
                        {id: "9101", name: "Tablet", price: 15000}
                    ])

                }else{

                    reject({
                        message: "Invalid Password"
                    })

                }

            }, 3000)

        }

    )

}

// productFind("1234").then(

//     (products)=>{
//         console.log("Products found", products)
//     }

// ).catch(
//     (error)=>{
//         console.log("Error occurred", error)
//     }
// )

try{
    const products = await productFind("1234")

    console.log("Products found", products)

}catch(error){

    console.log("Error occurred", error)
    
}



console.log("Software ended....")