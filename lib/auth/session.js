import { authOptions } from "../auth/auth"
import { getServerSession } from "next-auth"
import { redirect } from "next/navigation"


export default async function ServerProtectSession({children}) {
  const session = await getServerSession(authOptions)
  console.log(session);

  if (!session) return redirect('/login')
  return (
    <>{children}</>
  )
}
