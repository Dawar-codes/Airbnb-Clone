import { NextResponse } from "next/server";

import getCurrentUser from "@/app/actions/getCurrentUser";
import prisma from "@/app/libs/prismadb";

// Definining async params type (as per Next.js 15)
type Params = Promise<{ listingId?: string }>;

export async function DELETE(request: Request, { params }: { params: Params }) {
  const currentUser = await getCurrentUser();

  if (!currentUser) {
    return NextResponse.error();
  }

  const { listingId } = await params;

  if (!listingId || typeof listingId !== "string") {
    throw new Error("Invalid ID");
  }

  const listing = await prisma.listing.deleteMany({
    where: {
      id: listingId,
      userId: currentUser.id,
    },
  });

  return NextResponse.json(listing);
}
