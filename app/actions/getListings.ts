import prisma from "@/app/libs/prismadb"

export default async function getListing() {
    try {
        const listings = await prisma.listing.findMany({
            orderBy: {
                createdAt: "desc"
            }
        });

        return listings;

    /* eslint-disable @typescript-eslint/no-explicit-any */
    } catch  (error: any) {
        throw new Error(error);
    }
}