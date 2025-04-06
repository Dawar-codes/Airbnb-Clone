import prisma from "@/app/libs/prismadb"

export interface IListingParams {
    userId?: string;
}

export default async function getListing(params: IListingParams) {
    try {
        const {userId} = await params;

        /* eslint-disable @typescript-eslint/no-explicit-any */
        let query: any = {};
        
        if(userId) {
            query.userId = userId; 
        }

        const listings = await prisma.listing.findMany({
            where : query,
            orderBy: {
                createdAt: "desc"
            }
        });
        
        const safeListing = listings.map((listing) => ({
            ...listing,
            createdAt: listing.createdAt.toISOString(),
        }))
        return safeListing;

    /* eslint-disable @typescript-eslint/no-explicit-any */
    } catch  (error: any) {
        throw new Error(error);
    }
}