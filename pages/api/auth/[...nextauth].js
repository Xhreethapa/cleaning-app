import { NextApiHandler } from "next";
import NextAuth from "next-auth";
import { PrismaAdapter } from "@next-auth/prisma-adapter"
import EmailProvider from "next-auth/providers/email"
import { PrismaClient } from "@prisma/client";


const prisma = new PrismaClient();

// // we will define `options` up next
// const authHandler = (req, res) => NextAuth(req, res, options);
// export default authHandler;

 export default NextAuth ({
    providers: [
        EmailProvider({
        
        server:process.env.EMAIL_SERVER,
        from: process.env.EMAIL_FROM
      }),
    ],
    callbacks: {
      async jwt ({token, user}) {
        //first time JWT callback is run, user object is available
        if(user) {
          token.id = user.id
          console.log('lkj', user)
        }
        return token;
      },
      // async session({session, token, user}) {
      //   if(token) { 
      //     session.id = token.id
      //     session.user = user
      //   }
      //   return session
      // },
      // async signIn({ user}) {
      //   return user
      // },
    },
   
    // jwt: {
    //   secret: "test",
    //   encryption: true,
    // },
    pages: {
      // signOut: "/api/auth/signout"
    },
    session: {
      jwt:true
    },
    jwt: {

    },
    
    adapter: PrismaAdapter(prisma),
    secret: "RANDOM_STRING",
    synchronize: false
  });

  