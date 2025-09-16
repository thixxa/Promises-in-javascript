const isShopOpen = true;
const haveMoney = true;
const isVehicleOkay = false;

const bringMeChocolate = new Promise(
    (resolve, reject) => {

        setTimeout(() => {

            if (isShopOpen) {
                if (haveMoney) {
                    if (isVehicleOkay) {

                        resolve({
                            brand: "Dairy Milk",
                            flavour: "Fruit & Nut"
                        });

                    } else {
                        reject(
                            "Vehicle is not okay"
                        );
                    }
                } else {
                    reject(
                        "Not enough money"
                    );
                }
            } else {
                reject(
                    "Shop is closed"
                );
            }


        }, 5000);

})


console.log("Software started.....")


bringMeChocolate.then(

    (chocolate)=>{
        console.log("Yay! I got the chocolate", chocolate)
    }

).catch(

    (error)=>{
        console.log("I am sad! I didn't get the chocolate", error)
    }

).finally(
    ()=>{
        console.log("Software ended....")
    }
)


