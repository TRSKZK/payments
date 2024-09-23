import Container from "@/components/container";
import { db } from "@/db";
import { AddUtilityForm } from "@/app/user/profile/[slug]/[addressId]/add-utility-form";
import { getUtilityServices } from "@/app/actions/get-utility-services";
import { UtilityAccordion } from "@/app/user/profile/[slug]/[addressId]/utility-accordion";

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
        <UtilityAccordion utilities={utilities} />
      </div>
    </Container>
  );
}
