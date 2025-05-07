const products = [
    {
      id: 1,
      name: "Beef & Mushroom Pizza",
      image: "/img/pizza.png",
      price: 750,
      views: 0,
      sold: 0,
      reviews: [
        { user: "Ali", rating: 5, comment: "Très bon goût !" },
        { user: "Sami", rating: 4, comment: "Un peu salé mais excellent." },
      ],
    },
    {
      id: 2,
      name: "Pepperoni Pizza",
      image: "/img/pepperoni.png",
      price: 800,
      views: 0,
      sold: 0,
      reviews: [],
    },
    {
      id: 3,
      name: "Végétarienne",
      image: "/img/veggie.png",
      price: 650,
      views: 0,
      sold: 0,
      reviews: [],
    },
    {
      id: 4,
      name: "Pizza 4 Fromages",
      image: "/img/cheese.png",
      price: 850,
      views: 0,
      sold: 0,
      reviews: [],
    },
    {
      id: 5,
      name: "Chicken BBQ",
      image: "/img/bbq.png",
      price: 770,
      views: 0,
      sold: 0,
      reviews: [],
    },
  ];
  
  export default products;
  