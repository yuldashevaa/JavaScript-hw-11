let users = document.querySelector('.users')


async function getUsers() {
    try {
        let res = await fetch('https://dummyjson.com/products')
        let data = await res.json()
        data.products.forEach((el) => {
            let item = document.createElement('div')
            item.classList.add('item')
            let title = document.createElement('h2')
            title.textContent = el.title
            let description = document.createElement('p')
            description.textContent = el.description
            let price = document.createElement('h3')
            price.textContent = `Price: ${el.price} $`
            let thumbnail = document.createElement('img')
            thumbnail.src = el.thumbnail

            item.append(title,description,price,thumbnail)
            users.append(item)
        })
        
    } catch (error) {
        console.log('error when getting the data');
        
        
    }
}


window.addEventListener('DOMContentLoaded',() => getUsers())



