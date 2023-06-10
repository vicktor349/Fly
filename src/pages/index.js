import { Button } from "@mantine/core"
import Head from "next/head"
import { favicon } from '../public/images/logo/favicon.svg'



export default function Home() {
  return (
    <>
      <Head>
        <title>FLYPS | Home</title>
        <link rel="favicon" href={favicon} type="image/x-icon" />
      </Head>
      <main className="font-[Roboto] leading-10">
        <div className="bg-[#7AF687] text-white ssm:h-[80vh] sm:h-screen">
          <div className="h-[40%] grid">
            <div className="flex items-end justify-end ssm:mx-4 sm:mx-24">
              <div className="mr-auto">
                <h1 className="sm:text-3xl md:text-4xl lg:text-5xl font-bold">Book ride for any trip</h1>
              </div>
              <div>
                <Button variant="outline">
                  chat with us
                </Button>
              </div>
            </div>
          </div>
        </div>
      </main>
    </>
  )
}
