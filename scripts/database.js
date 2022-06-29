

const database = {
    fish: [
        {
            image: "https://i.dailymail.co.uk/i/pix/2015/11/10/00/2E48C67200000578-0-image-m-31_1447114400618.jpg",
            species: "Smellyphisious",
            name: "Bart",
            food: "hot dogs",
            size: 3,            
            harvestingLocal: "Uncle's Pond"
            
        },
        {
            image: "https://forthefishes.org/wp-content/uploads/2017/03/green-chromis1-1-400x284.jpg",
            species: "Chromis Viridis",
            name: "Green Chromis",
            food: "omnivore",
            size: 4,            
            harvestingLocal: "Indo-Pacific"
            
        },
        {
            image: "https://www.liveaquaria.com/images/categories/large/lg-70054-three-striped-damsel.jpg",
            species: "Cascyllus Aruanus",
            name: " Three Striped Damsel",
            food: "omnivore",
            size: 4,            
            harvestingLocal: " Indonesia"
            
        },
        {
            image: "https://cdn.shopify.com/s/files/1/0421/4495/6567/products/Blue-Mandarin_6edecab3-423f-4243-8a53-7be7e556e097_540x.jpg?v=1611370851",
            species: "Synchiropus Splendidus",
            name: " Blue Mandarinfish",
            food: "copepods",
            size: 4,             
            harvestingLocal: "Western Pacific to Australia"
            
        },
        {
            image: "https://www.saltwateraquariumblog.com/wp-content/uploads/2016/08/flame-angel-public-domain.jpg?ezimgfmt=ng%3Awebp%2Fngcb14%2Frs%3Adevice%2Frscb14-1",
            species: "Centropyge Loricula",
            name: "Flame Angel",
            food: "omnivore",
            size: 4,             
            harvestingLocal: "Indo-Pacific"
            
        }
    ]
}

export const getFish = () => {
    return database.fish.map(fish => ({...fish}))
}