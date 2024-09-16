import Header from "@/components/header/header";
import Container from "@/components/container";

export default async function Home() {
  return (
    <div>
      <Header />
      <Container>
        <div>Home Page</div>
      </Container>
    </div>
  );
}
