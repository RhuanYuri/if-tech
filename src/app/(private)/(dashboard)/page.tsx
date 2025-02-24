import { ListPlayersGrid, ListPlayersImage, ListPlayersItemn, ListPlayersRoot, ListPlayersText } from "@/componets/list-players";
import Image from "next/image";
import { ComponentProps } from "react";
import react from "../../../assets/recat.webp"

interface HomeProps extends ComponentProps<'div'> { }

export default function Home(props: HomeProps) {
  return (
    <div className="flex-1 overflow-y-auto">
      <div className="flex flex-col max-w-[1352px] p-6 pb-10 gap-6 md:gap-10 mx-auto">
        <div className="flex flex-col-reverse gap-8 mb-24 md:min-[804px]:grid md:min-[804px]:grid-cols-[1fr_360px]">
          <div className="flex flex-col gap-8">
            <ListPlayersRoot>
              <ListPlayersGrid>
                <ListPlayersItemn>
                  <ListPlayersImage>
                    <Image src={react} alt="curso" className="absolute h-full w-full inset-0 text-transparent" />
                  </ListPlayersImage>
                  <ListPlayersText />

                </ListPlayersItemn>
                <ListPlayersItemn>
                  <ListPlayersImage>
                    <Image src={react} alt="curso" className="absolute h-full w-full inset-0 text-transparent" />
                  </ListPlayersImage>
                  <ListPlayersText />

                </ListPlayersItemn>
                <ListPlayersItemn>
                  <ListPlayersImage>
                    <Image src={react} alt="curso" className="absolute h-full w-full inset-0 text-transparent" />
                  </ListPlayersImage>
                  <ListPlayersText />

                </ListPlayersItemn>
              </ListPlayersGrid>

            </ListPlayersRoot>
            <div className="flex flex-col gap-4 lg:gap-6">
              <div className="flex flex-col gap-6 lg:gap-8">
                <div className="flex flex-col gap-4 lg:gap-6">
                  

                </div>

              </div>

            </div>




          </div>




        </div>
      </div>

    </div>


  );
}
