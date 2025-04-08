import getCurrentUser from "@/app/actions/getCurrentUser";
import getListingById from "@/app/actions/getListingById";
import getReservations from "@/app/actions/getReservations";

import EmptyState from "@/app/components/EmptyState";

import ListingClient from "./ListingClient";

type IParams = Promise<{ listingId?: string }>;

const ListingPage = async ({ params }: { params: IParams }) => {
  const { listingId } = await params;
  const listing = await getListingById({ listingId });
  const reservations = await getReservations({ listingId });
  const currentUser = await getCurrentUser();

  if (!listing) {
    return <EmptyState />;
  }
  return (
    <div>
      <ListingClient listing={listing} reservations={reservations} currentUser={currentUser} />
    </div>
  );
};

export default ListingPage;
