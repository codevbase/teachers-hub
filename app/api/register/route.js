// import prisma from '@/lib/prisma'
import prisma from '@/lib/prisma'

export async function POST(request) {
  try {
    const { name, email, subject, password } = await request.json()

    if (!name || !email || !subject || !password) {
      return Response.json({ error: 'All fields are required' }, { status: 400 })
    }

    const user = await prisma.usr.create({
      data: { name, email, subject, password }
    })
    
    return Response.json(user, { status: 201 })
  } catch (error) {
    console.error(error)
    return Response.json({ error: 'Email already exists or server error' }, { status: 500 })
  }
}
