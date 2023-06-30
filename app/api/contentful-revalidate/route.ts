import { NextRequest, NextResponse } from 'next/server'
import { revalidatePath } from 'next/cache'
import { headers } from 'next/headers'

export async function POST(request: NextRequest) {
  const headersList = headers()
  // should be secret, custom header coming in from Contentful
  const inboundRevalToken = headersList.get('x-vercel-reval-key')


  // Check for secret to confirm this is a valid request
  if (!inboundRevalToken) {
    return new Response('x-vercel-reval-key header not defined', { status: 401 })
  } else if (inboundRevalToken !== process.env.CONTENTFUL_REVALIDATE_SECRET) {
    return new Response('Invalid token', { status: 401 })
  }

  try {
    // Note: if this fails to parse you may have forget to set the
    // "content-type" header correctly as mentioned here https://github.com/vercel/next.js/blob/canary/examples/cms-contentful/README.md#step-9-try-using-on-demand-revalidation
    // let postSlug = request.body.fields.slug['en-US']

    const path = request.nextUrl.searchParams.get('path') || '/'
    const slugPath = '/[slug]'

    // revalidate the individual post and the home page
    revalidatePath(path)
    revalidatePath(slugPath)

    return NextResponse.json({ revalidated: true, now: Date.now() })

  } catch (err) {
    // If there was an error, Next.js will continue
    // to show the last successfully generated page
    return new Response('Error revalidating', { status: 500 })
  }

}
  