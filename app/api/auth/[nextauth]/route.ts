import NextAuth from "next-auth";
import { authOptions } from "@/app/libs/authOptions"; // import from the new file

const handler = NextAuth(authOptions);

export { handler as GET, handler as POST };
