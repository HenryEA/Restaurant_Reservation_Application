import { NextApiRequest, NextApiResponse } from "next";
import NextAuth, { NextAuthOptions } from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import {User} from 'next-auth' 
import type from 'next-auth'
import bcrypt from "bcrypt";
import compare from 'bcrypt'

export const authOptions: NextAuthOptions = {
//   return await NextAuth(req, res, {
    session: {
      strategy: "jwt",
    },
    providers: [
      CredentialsProvider({
        name: "Credentials",
        credentials: {
            email: {
              label: "Email",
              type: "email",
              placeholder: "hello@example.com",
            },
            password: { label: "Password", type: "password" },
          },
        async authorize(credentials, req) {
          const { email, password } = credentials as any;
          const res = await fetch("http://localhost:3000/api/auth/signin", {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify({
              email,
              password,
            }),
          });
          const user = await res.json();

          console.log({ user });

          if (!user) {
            throw new Error(" Invalid Email or password");
          }

          const isPasswordMatched = await bcrypt.compare(
            password,
            user.password
          );
          if (!isPasswordMatched) {
            throw new Error(" Invalid Email or password");
          }
        //   return user;
        }
      }),
    ],
    callbacks: {
        async jwt({ token, user }) {
          return { ...token, ...user };
        },
        async session({ session, token, user }) {
          // Send properties to the client, like an access_token from a provider.
          session.user = token;
    
          return session;
        },
      },
      pages: {
          signIn: '/login'
      },
      secret: process.env.NEXTAUTH_SECRET
  
}

export default NextAuth(authOptions);

// export const authOptions: NextAuthOptions = {
//   // Configure one or more authentication providers
//   providers: [
//     // ...add more providers here
//     CredentialsProvider({
//       // The name to display on the sign in form (e.g. "Sign in with...")
//       name: "Credentials",
//       // `credentials` is used to generate a form on the sign in page.
//       // You can specify which fields should be submitted, by adding keys to the `credentials` object.
//       // e.g. domain, username, password, 2FA token, etc.
//       // You can pass any HTML attribute to the <input> tag through the object.
//       credentials: {
//         email: { label: "Email", type: "text", placeholder: "email" },
//         password: { label: "Password", type: "password" },
//       },
//       async authorize(credentials, req) {
//         const { email, password } = credentials as any;
//         const res = await fetch("http://localhost:3000/api/auth/signin", {
//           method: "POST",
//           headers: {
//             "Content-Type": "application/json",
//           },
//           body: JSON.stringify({
//             email,
//             password,
//           }),
//         });
//         const user = await res.json();

//         console.log({ user });

//         if (res.ok && user) {
//           return user;
//         } else return null;
//     }),
//   ],
// };
