// app/api/contact/route.js
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export async function POST(req) {
  
  try {
    const { name, email, phone_number, service, message } = await req.json();

    // Validate input
    if (!name || !phone_number) {
      return new Response(JSON.stringify({ error: 'All fields are required' }), {
        status: 400,
        headers: {
          'Content-Type': 'application/json',
        },
      });
    }

    // Create a new contact form entry
    const contact = await prisma.contactForm.create({
      data: {
        name,
        email,
        phone_number,
        service,
        message,
        
      },
    });

    return new Response(JSON.stringify(contact), {
      status: 200,
      headers: {
        'Content-Type': 'application/json',
      },
    });
  } catch (error) {
    return new Response(JSON.stringify({ error: 'Something went wrong' }), {
      status: 500,
      headers: {
        'Content-Type': 'application/json',
      },
    });
  }
}

export async function GET() {

    
  try {
    // Fetch all contact form entries
    const contacts = await prisma.contactForm.findMany();
    
    return new Response(JSON.stringify(contacts), {
      status: 200,
      headers: {
        'Content-Type': 'application/json',
      },
    });
  } catch (error) {
    return new Response(JSON.stringify({ error: 'Failed to fetch contacts' }), {
      status: 500,
      headers: {
        'Content-Type': 'application/json',
      },
    });
  }
}
