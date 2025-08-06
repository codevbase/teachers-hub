import prisma from '@/lib/prisma'

export async function POST(request) {
  try {
    const { email, password } = await request.json()

    if (!email || !password) {
      return Response.json({ error: 'Email and password required' }, { status: 400 })
    }

    const user = await prisma.usr.findUnique({ where: { email } })

    if (!user || user.password !== password) {
      return Response.json({ error: 'Invalid credentials' }, { status: 401 })
    }

    return Response.json({ message: 'Login successful', user }, { status: 200 })
  } catch (error) {
    console.error(error)
    return Response.json({ error: 'Server error' }, { status: 500 })
  }
}
