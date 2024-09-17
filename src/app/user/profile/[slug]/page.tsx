import Container from "@/components/container";

interface UserProfileProps {
  params: {
    slug: string;
  };
}

export default async function UserProfile({ params }: UserProfileProps) {
  return (
    <Container>
      <div>User profile Page</div>
    </Container>
  );
}
