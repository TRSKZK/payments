"use server";
import Container from "@/components/container";
import { db } from "@/db";
import AddNewAddress from "@/components/add-new-address/add-new-address";

interface UserProfileProps {
  params: {
    slug: string;
  };
}

export default async function UserProfile({ params }: UserProfileProps) {
  const { slug } = params;
  const user = await db.user.findFirst({
    where: { id: slug },
    include: { address: true },
  });
  return (
    <Container>
      <div className="my-8">
        <AddNewAddress />
      </div>
      <div>Addresses</div>
      <div>
        {user?.address.length && user?.address.length > 0 ? (
          user.address.map((ad) => (
            <>
              {ad.street}/{ad.city}
            </>
          ))
        ) : (
          <div>Oooops! You dont have any addresses yet</div>
        )}
      </div>
    </Container>
  );
}
