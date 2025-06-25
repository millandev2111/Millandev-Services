import { NextApiRequest, NextApiResponse } from 'next'
import { Resend } from 'resend'

const resend = new Resend(process.env.RESEND_API_KEY)

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Método no permitido' })
  }

  try {
    const { nombre, email, mensaje } = req.body

    if (!nombre || !email || !mensaje) {
      return res.status(400).json({ error: 'Faltan datos en el formulario.' })
    }

    const data = await resend.emails.send({
      from: 'Formulario Web <onboarding@resend.dev>', // dominio sandbox
      to: 'millandev2111@gmail.com',
      subject: 'Nuevo mensaje desde tu sitio web',
      text: `Nombre: ${nombre}\nEmail: ${email}\nMensaje:\n${mensaje}`,
    })

    return res.status(200).json({ success: true, data })
  } catch (error) {
    console.error('Error al enviar email:', error)
    return res.status(500).json({ error: 'Error interno al enviar el correo' })
  }
}
