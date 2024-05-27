'use server'

import { db } from '@/lib/db'

export default async function getUserData(id: string) {
  const user_info = await db.user.findUnique({
    where: {
      clerkId: id,
    },
    include: {
      connections: true,
    },
  })

  return user_info
}
