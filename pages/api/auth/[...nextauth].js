import NextAuth from "next-auth/next";
import GoogleProvider from "next-auth/providers/google";
import { PrismaAdapter } from "@next-auth/prisma-adapter"
import { PrismaClient } from "@prisma/client" 
import { authOptions } from 'pages/api/auth/[...nextauth].js'; 
import { getServerSession } from "next-auth/next";

/*const handler = NextAuth({
    providers: [
        GoogleProvider({
            clientId: process.env.GOOGLE_CLIENT_ID,
            clientSecret: process.env.GOOGLE_CLIENT_SECRET,

        }),
    ],
});

export { handler as GET, handler as POST };*/

const prisma = new PrismaClient()

export const authOptions = {
    providers: [
      GoogleProvider({
        clientId: process.env.GOOGLE_CLIENT_ID,
        clientSecret: process.env.GOOGLE_CLIENT_SECRET,
      }),
    ],
    adapter: PrismaAdapter(prisma),
  }
  export default NextAuth(authOptions)

  

