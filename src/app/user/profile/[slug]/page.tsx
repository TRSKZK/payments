"use server";
import Container from "@/components/container";
import AddNewAddress from "@/components/add-new-address/add-new-address";
import { AddressTable } from "@/components/address-table/address-table";
import { getAddressesForUser } from "@/app/actions/get-addresses-for-user";

interface UserProfileProps {
  params: {
    slug: string;
  };
}

export default async function UserProfile({ params }: UserProfileProps) {
  const { slug } = params;

  const addresses = await getAddressesForUser(slug);

  return (
    <Container>
      {addresses && (
        <div className="my-8">
          <AddNewAddress slug={slug} />
        </div>
      )}

      <h1 className="text-3xl text-header-logo font-bold mb-8">
        Your Addresses
      </h1>
      <div>
        {addresses?.length ? (
          <AddressTable addresses={addresses} />
        ) : (
          <div>Ooooops! You dont have any addresses yet</div>
        )}
      </div>
    </Container>
  );
}
