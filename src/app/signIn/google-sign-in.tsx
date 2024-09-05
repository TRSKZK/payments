import { Button, Image } from "@nextui-org/react";
import google from "../../../public/Googlelogo.svg";
import { handleSignInWithGoogle } from "@/app/actions/auth";

export function GoogleSignIn() {
  return (
    <form action={handleSignInWithGoogle}>
      <Button
        className="border-0 text-header-logo font-bold"
        fullWidth
        variant="faded"
        type="submit"
        startContent={<Image src={google} alt="Google Logo" />}
      >
        Login with Google
      </Button>
    </form>
  );
}
