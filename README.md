# Building an CLIENT SIDE Online Store using React, Stripe, and the React Hooks API

## Episode 35 - Part 2 - Introducing Context, Providers, and useContext

Today we dig into how to share state in our app without keeping it in the top level of our app and passing it down into every component in the chain that is our application. This is called prop drilling, and can make the code for our React app _very_ brittle.

By using `Context` and `Provider` we can avoid this and keep our code clean. And by using the new `useContext` hook we can use our context consumer without the added complexity of render props. Also by using the native React Context/Provider API, we can avoid using Redux completely!

This is part 2 of the series and will be continued!

## Git Branch Chapters

1. [Start Here](https://github.com/ReactUniversity/035-building-an-online-store-part-2-creating-context-using-hooks/tree/01-start-here)
2. [Products Page](https://github.com/ReactUniversity/035-building-an-online-store-part-2-creating-context-using-hooks/tree/02-products-page)
3. [Cart Context](https://github.com/ReactUniversity/035-building-an-online-store-part-2-creating-context-using-hooks/tree/03-cart-context)
4. [Aggregate Cart Items](https://github.com/ReactUniversity/035-building-an-online-store-part-2-creating-context-using-hooks/tree/04-aggregate-cart-items)

## Episodes in this Series

- Part 1 - Stripe Setup and Basic Check-out: [Code](https://github.com/ReactUniversity/033-building-an-online-store-using-react-hooks-stripe) | [Screencast](https://www.youtube.com/watch?v=y0Yq1lPoloo)
- Part 2 - Product display page and add to Cart: [Code](https://github.com/ReactUniversity/035-building-an-online-store-part-2-creating-context-using-hooks) | [Screencast](https://www.youtube.com/watch?v=PENDING)
