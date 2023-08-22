import NextAuth from "next-auth";
import GoogleProvider from "next-auth/providers/google";
import { PrismaAdapter } from "@next-auth/prisma-adapter"
import { PrismaClient } from "@prisma/client"

//TRY ONE
/*const handler = NextAuth({
    providers: [
        GoogleProvider({
            clientId: process.env.GOOGLE_CLIENT_ID,
            clientSecret: process.env.GOOGLE_CLIENT_SECRET,

        }),
    ],
});

export { handler as GET, handler as POST };*/

//TRY TWO 
/*const prisma = new PrismaClient()

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
*/

const prisma = new PrismaClient()

export default NextAuth({
  providers: [
    GoogleProvider({
      clientId: "750674425417-bd8rvgeebojs2mdlhfsvo4sa897dk06g.apps.googleusercontent.com",
      clientSecret: "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"
    }),
  ],
  adapter: PrismaAdapter(prisma),
  debug: true,
})

