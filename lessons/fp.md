```typescript
const products: Array<{
  name?: string;
  description?: string;
  price: number;
}> = [
  {
    name: "soap",
    description: "good product",
    price: 10,
  },
  {
    name: "cheese",
    description: "adsasd",
    price: 5,
  },
];

products.push({ price: 3 }); // нельзя

const products2 = [...products, {}]; // можно

products.map((product) => ({
  ...product,
  price: product.price + 2,
}));

let flag = 0;
```

```html
<button onclick="handleClick('first')">1</button>
<button onclick="handleClick('second')">2</button>
<button onclick="handleClick('third')">3</button>

<script>
  const handleClick = (button) => () => {
    console.log(`${button} button clicked`);
  };

  // function handleClick(e) {
  //   return function (button) {
  //      console.log(" button clicked");
  //   }
  // }
</script>
```

```typescript
for (let i = 0; i < 11; i++) {
  for (let j = 0; j < 10; j++) {}
}
```
