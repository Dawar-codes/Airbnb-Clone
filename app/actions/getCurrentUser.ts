import { getServerSession } from "next-auth";

import { authOptions } from "../api/auth/[...nextauth]/route";
import prisma from "@/app/libs/prismadb";

export async function getSession() {
  return await getServerSession(authOptions);
}

export default async function getCurrentUser() {
  try {
    const session = await getSession();

    if (!session?.user?.email) {
      return null;
    }

    const currentUser = await prisma.user.findUnique({
      where: {
        email: session.user.email as string,
      },
    });

    if (!currentUser) {
      return null;
    }

    return {...currentUser,
        createdAt: currentUser.createdAt.toISOString(),
        updatedAt: currentUser.updatedAt.toISOString(),
        emailVerified: currentUser.emailVerified?.toISOString() || null,
    }; // sending it like this to serialize the dates from Object to string 
    // before sending it to client component. i was not getting any error at 
    // the time but Antonio was. BTW I did it so maybe if I get any warning like
    // "only plain objects can be passed from server to client components" I would
    // have everything set up. 
    // And for this we have to change the types expilicitly which I have done in
    // app/types/index.ts 
    
  } catch (error) {
    console.log(error);
    
    return null;
  }
}
