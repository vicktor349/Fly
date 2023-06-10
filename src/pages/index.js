import { Button, Group } from "@mantine/core"
import Head from "next/head"
import { favicon } from '../public/images/logo/favicon.svg'
import Rides from "@/components/Rides"
import CarouselSlider from "@/components/CarouselSlider"



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
                <Group>
                  <Button
                    rel="noopener noreferrer"
                    component="a"
                    target="_blank"
                    variant="outline"
                    href="https://wa.me/08124165949?text=I%20would%20like%20to%20join%20the%20family.%20My%20name%20is%20"
                  >
                    Chat with us
                  </Button>
                </Group>
              </div>
            </div>
          </div>
        </div>
        <div>
          <Rides />
          <CarouselSlider />
        </div>
      </main>
    </>
  )
}
