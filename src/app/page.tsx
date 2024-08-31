import { Button } from '@nextui-org/react'
import { handleSignIn, handleSignOut } from '@/app/actions/auth'

export default async function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div>
        <form action={handleSignIn}>
          <Button type='submit'>Sign In</Button>
        </form>
        <form action={handleSignOut}>
          <Button type='submit'>Sign Out</Button>
        </form>
      </div>
    </main>
  );
}
