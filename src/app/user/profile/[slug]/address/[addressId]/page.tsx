import Container from "@/components/container";
import { db } from "@/db";
import { AddUtilityForm } from "@/app/user/profile/[slug]/address/[addressId]/add-utility-form";

interface AddressDetailsProps {
  params: {
    addressId: string;
  };
}

export default async function AddressDetails({ params }: AddressDetailsProps) {
  const address = await db.address.findFirst({
    where: { id: params.addressId },
  });
  return (
    <Container>
      <div className="mt-16 flex items-baseline justify-between">
        <div className="text-header-logo font-bold">
          {address?.city}, {address?.street}
        </div>
        <div>
          <AddUtilityForm />
        </div>
      </div>
    </Container>
  );
}
