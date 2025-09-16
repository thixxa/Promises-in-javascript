function productFind(password) {
	return new Promise((resolve, reject) => {
		setTimeout(() => {
			if (password == "1234") {
				resolve([
					{ id: "1234", name: "Laptop", price: 45000 },
					{ id: "5678", name: "Mobile", price: 25000 },
					{ id: "9101", name: "Tablet", price: 15000 },
				]);
			} else {
				reject({
					message: "Invalid Password",
				});
			}
		}, 3000);
	});
}

const products = await productFind("124").catch(
    (error)=>{
        console.log("Error occurred", error);
    }
)

console.log("Products found", products);

console.log("Software ended....");
