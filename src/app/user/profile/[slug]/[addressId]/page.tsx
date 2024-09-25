import Container from "@/components/container";
import { db } from "@/db";
import { AddUtilityForm } from "@/components/add-utility-form/add-utility-form";
import { getUtilityServices } from "@/app/actions/get-utility-services";
import { PaymentForm } from "@/components/payment-form/payment-form";

interface AddressDetailsProps {
  params: {
    addressId: string;
    slug: string;
  };
}

export default async function AddressDetails({ params }: AddressDetailsProps) {
  const address = await db.address.findFirst({
    where: { id: params.addressId },
  });
  const utilities = await getUtilityServices(params.addressId);

  return (
    <Container>
      <div className="mt-16 flex items-baseline justify-between">
        <div className="text-header-logo font-bold">
          {address?.city}, {address?.street}
        </div>
        <div>
          <AddUtilityForm slug={params.slug} addressId={params.addressId} />
        </div>
      </div>
      <div className="mt-8">
        <PaymentForm
          address={address}
          userId={params.slug}
          utilities={utilities}
        />
      </div>
    </Container>
  );
}
