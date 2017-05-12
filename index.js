const cats = {

    "data": [{
        "id": "123abcCat1",
        "name": "Stanley",
        "breed": "Maine Coon",
        "age": 3,
        "likes": {
            "sleeping": true,
            "playing": false,
            "destroying_furniture": true,
            "meowing": false,
            "cuddling": false,
            "eating": true
        },
        "score": 4,
        "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent eu enim venenatis mauris sodales eleifend. In ante mauris, pretium quis euismod sit amet, pharetra ut leo. Nullam luctus enim et aliquet pretium. Duis et enim sed lacus viverra ultrices. Nulla dictum lacus turpis, vitae fringilla sem malesuada vitae. Praesent ex turpis, imperdiet at ex sed, suscipit venenatis lacus. Nullam vitae ligula non ligula convallis consequat ut at felis. Aenean vulputate et nisl non facilisis. In iaculis lorem tortor, ac viverra dui dignissim eu. Donec quis elit at dui malesuada dictum a at mauris. Aenean eget justo sapien. Phasellus faucibus est non pulvinar interdum. Cras semper sem et neque facilisis luctus. Sed hendrerit aliquet nunc eget lacinia.",
        "image": "http://cdn1-www.cattime.com/assets/uploads/gallery/maine-coon-cats-and-kittens/maine-coon-cats-and-kittens-1.jpg",
        "friends": [
            "234abcCat2"
        ]
    }, {
        "id": "234abcCat2",
        "name": "Jenkins",
        "breed": "Bengal",
        "age": 2,
        "likes": {
            "sleeping": true,
            "playing": true,
            "destroying_furniture": true,
            "meowing": true,
            "cuddling": true,
            "eating": true
        },
        "score": 8.5,
        "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent eu enim venenatis mauris sodales eleifend. In ante mauris, pretium quis euismod sit amet, pharetra ut leo. Nullam luctus enim et aliquet pretium. Duis et enim sed lacus viverra ultrices. Nulla dictum lacus turpis, vitae fringilla sem malesuada vitae. Praesent ex turpis, imperdiet at ex sed, suscipit venenatis lacus. Nullam vitae ligula non ligula convallis consequat ut at felis. Aenean vulputate et nisl non facilisis. In iaculis lorem tortor, ac viverra dui dignissim eu. Donec quis elit at dui malesuada dictum a at mauris. Aenean eget justo sapien. Phasellus faucibus est non pulvinar interdum. Cras semper sem et neque facilisis luctus. Sed hendrerit aliquet nunc eget lacinia.",
        "image": "https://upload.wikimedia.org/wikipedia/en/3/3a/Freddie4.jpg",
        "friends": [
            "123abcCat1",
            "345abcCat3",
            "456abcCat4"
        ]
    }, {
        "id": "345abcCat3",
        "name": "Fluffy",
        "breed": "Persian",
        "age": 7,
        "likes": {
            "sleeping": true,
            "playing": false,
            "destroying_furniture": false,
            "meowing": false,
            "cuddling": true,
            "eating": true
        },
        "score": 6,
        "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent eu enim venenatis mauris sodales eleifend. In ante mauris, pretium quis euismod sit amet, pharetra ut leo. Nullam luctus enim et aliquet pretium. Duis et enim sed lacus viverra ultrices. Nulla dictum lacus turpis, vitae fringilla sem malesuada vitae. Praesent ex turpis, imperdiet at ex sed, suscipit venenatis lacus. Nullam vitae ligula non ligula convallis consequat ut at felis. Aenean vulputate et nisl non facilisis. In iaculis lorem tortor, ac viverra dui dignissim eu. Donec quis elit at dui malesuada dictum a at mauris. Aenean eget justo sapien. Phasellus faucibus est non pulvinar interdum. Cras semper sem et neque facilisis luctus. Sed hendrerit aliquet nunc eget lacinia.",
        "image": "http://cdn1-www.cattime.com/assets/uploads/gallery/persian-cats-and-kittens/persian-cats-and-kittens-8.jpg",
        "friends": [
            "234abcCat2",
            "456abcCat4"
        ]
    }, {
        "id": "456abcCat4",
        "name": "Huxley",
        "breed": "Savannah",
        "age": 5,
        "likes": {
            "sleeping": false,
            "playing": true,
            "destroying_furniture": true,
            "meowing": true,
            "cuddling": false,
            "eating": true
        },
        "score": 7,
        "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent eu enim venenatis mauris sodales eleifend. In ante mauris, pretium quis euismod sit amet, pharetra ut leo. Nullam luctus enim et aliquet pretium. Duis et enim sed lacus viverra ultrices. Nulla dictum lacus turpis, vitae fringilla sem malesuada vitae. Praesent ex turpis, imperdiet at ex sed, suscipit venenatis lacus. Nullam vitae ligula non ligula convallis consequat ut at felis. Aenean vulputate et nisl non facilisis. In iaculis lorem tortor, ac viverra dui dignissim eu. Donec quis elit at dui malesuada dictum a at mauris. Aenean eget justo sapien. Phasellus faucibus est non pulvinar interdum. Cras semper sem et neque facilisis luctus. Sed hendrerit aliquet nunc eget lacinia.",
        "image": "https://static1.squarespace.com/static/53adb125e4b094aac18a8ee7/579fd9a02994ca3fd6a260f9/57b294236b8f5b7524c104bd/1471877446229/F1hybridsSavannahs-August+16,+2016-2.jpg",
        "friends": [
            "234abcCat2",
            "345abcCat3"
        ]
    }]
}

console.table(cats.data);

const button = document.getElementById('getCats');


function showCatDetails() {
	cats.data.forEach(cat => {

		let listElements = document.createElement('h3');
		listElements.innerHTML = `<b>Name:</b> ${cat.name} | <b>Breed:</b> ${cat.breed} | <b>Age:</b>${cat.age}`;

		let detailDiv = document.getElementById('details');
		detailDiv.appendChild(listElements);
	})
	
 //    const catDetails = cats.data.map(cat => `${cat.name}, ${cat.breed}`);

    // return 
    // 	   `<li>
    // 		<span>${cats.data.name}, ${cats.data.breed} </span>
    // 		<span>${cats.data.likes.sleeping}, ${cats.data.likes.meowing} </span>
    // 	   </li>`
    //console.log(catDetails);
    
}



button.addEventListener('click', showCatDetails);
