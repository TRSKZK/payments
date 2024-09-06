import { Button, Divider, Input } from "@nextui-org/react";
import { GoogleSignIn } from "@/app/signIn/google-sign-in";
import { Link } from "@nextui-org/link";

export default async function SignIn() {
  return (
    <div className=" container flex flex-row min-h-screen justify-center items-center mx-auto">
      <div className="border-1 border-header-logo rounded-2xl w-[500px] p-10">
        <form className="flex flex-col gap-2">
          <Input type="email" label="Email" required />
          <Input type="password" label="Password" required />
          <Button
            type="submit"
            className="border-0 text-header-logo font-bold"
            fullWidth
            variant="faded"
          >
            Login
          </Button>
        </form>

        <Divider className="my-3" />

        <GoogleSignIn />
        <div className="text-end mt-4">
          <Link href="/register">Create Account</Link>
        </div>
      </div>
    </div>
  );
}
