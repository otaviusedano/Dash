import { authOptions } from "../auth/auth"
import { getServerSession } from "next-auth"
import { useSession } from "next-auth/react"
import { redirect } from "next/navigation"

export function ClientProtectSession() {
  const { data } = useSession({
    required: true,
    onUnauthenticated() {
      redirect('/login')
    }
  })

  console.log(data);
}

export default async function ServerProtectSession({children}) {
  const session = await getServerSession(authOptions)
  console.log(session);

  if (!session) return redirect('/login')
  return (
    <>{children}</>
  )
}
