import EmptyState from "../components/EmptyState";
import FavoritesClient from "./FavoritesClient";

import getCurrentUser from "../actions/getCurrentUser";
import getFavoritesListings from "../actions/getFavoriteListings";

const ListingPage = async () => {
    const currentUser = await getCurrentUser();
    const listings = await getFavoritesListings();

    if (!currentUser) {
        return (
            <EmptyState
                title="Unauthorized"
                subtitle="Please login to view your favorite listings"
            />
        );
    }

    if (listings.length === 0) {
        return (
            <EmptyState
                title="No favorites found"
                subtitle="Looks like you have no favorite listings"
            />
        );
    }
  return (
   <FavoritesClient listings={listings} currentUser={currentUser} />
  );
};

export default ListingPage;
