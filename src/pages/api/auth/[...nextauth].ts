import NextAuth from "next-auth"
import {NextApiRequest} from "next";
import CredentialsProvider from "next-auth/providers/credentials"


export default NextAuth({
    providers: [
        CredentialsProvider({
          // The name to display on the sign in form (e.g. 'Sign in with...')
          name: 'Credentials',
          // The credentials is used to generate a suitable form on the sign in page.
          // You can specify whatever fields you are expecting to be submitted.
          // e.g. domain, username, password, 2FA token, etc.
          // You can pass any HTML attribute to the <input> tag through the object.
          credentials: {
            username: { label: "Username", type: "text", placeholder: "jsmith" },
            password: {  label: "Password", type: "password" }
          },
          async authorize(credentials, req) {
            // You need to provide your own logic here that takes the credentials
            // submitted and returns either a object representing a user or value
            // that is false/null if the credentials are invalid.
            // e.g. return { id: 1, name: 'J Smith', email: 'jsmith@example.com' }
            // You can also use the `req` object to obtain additional parameters
            // (i.e., the request IP address)

            // const res = await fetch("localhost:3000/admin", {
            //   method: 'POST',
            //   body: JSON.stringify(credentials),
            //   headers: { "Content-Type": "application/json" }
            // })
            // const user = await res.json()
      
            // // If no error and we have user data, return it
            // if (res.ok && user) {
            //   return user
            // }
            if (
              credentials?.username === "test" &&
              credentials.password === "test"
          ) {
              const user = { id: 1, name: "test user", email: "test@email.com" }
              console.log(credentials);
              return user;
          }
              console.log(credentials);

            const user = { id: 3, name: "user", email: "user@email.com" }
          return user;
          }
        })
      ],
    // callbacks: {
    //     async jwt({ token, account }) {
    //       // Persist the OAuth access_token to the token right after signin
    //       if (account) {
    //         token.accessToken = account.access_token
    //       }
    //       return token
    //     },
    //     async session({ session, token, user }) {
    //       // Send properties to the client, like an access_token from a provider.
    //       session.accessToken = token.accessToken
    //       return session
    //     }
    //   },

    //   secret: process.env.SECRET,
    //   session: {
    //     strategy: 'jwt',

    //   },
    //   jwt: {
    //     secret: process.env.SECRET,
    //   },
      // pages: {
      //   signIn:"/signin"
      // }
})