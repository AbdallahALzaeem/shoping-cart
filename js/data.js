let products = [
    {
        id: 1 ,
        title: 'car item' ,
        desc: "lorm subum jkdd jfkld di  duw s",
        size: 'large' ,
        imageUrl: 'imag/images.jpeg',
        qty: 1,
        isMe: "f",
    },
    {
        id: 2 ,
        title: 'phone item' ,
        desc: "lorm subum jkdd jfkld di  duw s",
        size: 'large' ,
        imageUrl: 'imag/images (1).jpeg',
        qty: 1,
        isMe: "f",
    },
    {
        id: 3 ,
        title: 'head phone item' ,
        desc: "lorm subum jkdd jfkld di  duw s",
        size: 'large' ,
        imageUrl: 'imag/images.jpeg',
        qty: 1,
        isMe: "f",
    },
    {
        id: 4,
        title: 'head phone item' ,
        desc: "lorm subum jkdd jfkld di  duw s",
        size: 'large' ,
        imageUrl: 'imag/images.jpeg',
        qty: 1,
        isMe: "f",
    },
];

localStorage.getItem("products")? '' : localStorage.setItem("products" , JSON.stringify(products));
