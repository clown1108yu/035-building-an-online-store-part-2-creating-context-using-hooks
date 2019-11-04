# Building an CLIENT SIDE Online Store using React and Stripe

## Episode 35 - Part 2 - Introducing Context, Providers, and useContext

Today we dig into how to share state in our app without keeping it in the top level of our app and passing it down into every component in the chain that is our application. This is called prop drilling, and can make the code for our React app _very_ brittle.

By using `Context` and `Provider` we can avoid this and keep our code clean. And by using the new `useContext` hook we can use our context consumer without the added complexity of render props. Also by using the native React Context/Provider API, we can avoid using Redux completely!

This is part 2 of the series and will be continued!
