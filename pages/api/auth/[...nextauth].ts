// import CredentialsProvider from "next-auth/providers/credentials";
// import NextAuth from "next-auth";
// import { PrismaClient } from "@prisma/client";
// import type { NextAuthOptions } from "next-auth";
// import { User } from "next-auth";
// // import User from '../../api/prisma/'
// import { PrismaAdapter } from "@auth/prisma-adapter";

// const prisma = new PrismaClient();

// export const authOptions: NextAuthOptions = {
//   session: {
//     strategy: "jwt",
//   },
//   // adapter: PrismaAdapter(prisma),
//   providers: [
//     CredentialsProvider({
//       name: "Sign in",

//       credentials: {
//         email: {
//           label: "email",
//           type: "text",
//           placeholder: "jsmith",
//         },
//         password: {
//           label: "Password",
//           type: "password",
//         },
//       },
//       async authorize(credentials) {
//         //Handle Auth
//         const user = { id: "1", name: "Ethan", email: "test@test.com" };
//         return user;

//         // const { email, password } = credentials as {
//         //   email: string;
//         //   password: string;
//         // };

//         // const user = await User.findOne({ email }).select("+password")
//         // if (!user) {
//         //   throw new Error ('Invalid Email or password')
//         // }

//         //perfrom the login logic
//         // find out user from the db
//         // const res = await fetch("http://localhost:8000/auth/signin", {
//         //   method: "POST",
//         //   headers: {
//         //     "Content-Type": "application/json",
//         //   },
//         //   body: JSON.stringify({
//         //     email,
//         //     password,
//         //   }),
//         // });

//         // const user = await res.json();

//         // console.log({ user });

//         // if (res.ok && user) {
//         //   return user;
//         // } else return null;
//       },
//     }),
//   ],

//   // callbacks: {
//   //   async jwt({ token, user }) {
//   //     return { ...token, ...user };
//   //   },
//   //   async session({ session, token, user }) {
//   //     // Send properties to the client, like an access_token from a provider.
//   //     session.user = token;

//   //     return session;
//   //   },
//   // },

//   // pages: {
//   //   signIn: "/auth/signin",
//   // },
// };

// const handler = NextAuth(authOptions);
// export { handler as GET, handler as POST };

// // export default NextAuth(authOptions);
