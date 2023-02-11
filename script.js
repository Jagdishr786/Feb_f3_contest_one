fetch('https://dummyjson.com/products')
    .then((Response)=> Response.json())
    .then((data)=>{
        let myArr = data.products   

        // console.log(data.products[1].images[1]);
        let myDiv = document.getElementById('parent')
        myArr.map((e)=>{
            myDiv.innerHTML += `Titte-${e.title}  Brand-${e.brand} <br> $${e.price} <br>
            Rating:${e.rating} <br> Stock: ${e.stock} <br> `
        })
           
      // id ,title , description ,price , discountPercentage,
      //rating,stock,brand,category,images,thumbnail

    })