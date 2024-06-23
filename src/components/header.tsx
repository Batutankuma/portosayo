'use client';

import { TypeAnimation } from "react-type-animation"
import NotificationCard from "./notification";
import AvartCard from "./avatar";
import { SiExpo, SiExpress, SiFacebook, SiGmail, SiInstagram, SiLinkedin, SiNextdotjs, SiPrisma, SiSupabase, SiTwitter } from "react-icons/si";

export default function Headers() {
    return (
        <div className="w-full h-4/5 flex flex-row space-x-5">
            <div className="bg-[#131315] basis-8/12 rounded-2xl p-10">
                <div>
                    <AvartCard />
                    <NotificationCard message="Hello, I'm Batuta Nkuma Sael" />
                    <p className="text-5xl pt-9 font-extrabold">
                        <TypeAnimation
                            sequence={[
                                'Maîtrisant  les technologies Mobile ',
                                1000,
                                'Maîtrisant  les technologies Web',
                                1000,
                                'Maîtrisant  les technologies Backend',
                                1000,
                            ]}
                            speed={50}
                            repeat={Infinity}
                        />
                        <span>,je mets mes compétences à profit pour développer</span>
                        <span className="text-gray-600"> des applications performantes et riches en fonctionnalités.</span>
                    </p>
                </div>
            </div>
            <div className="bg-[#131315] basis-4/12 rounded-2xl ">
                <p className="m-10 font-bold">Mes outils</p>
                <div className="p-10 grid grid-cols-5 space-x-2">
                    <SiExpo size={60} />
                    <SiNextdotjs size={60} />
                    <SiSupabase size={60} />
                    <SiExpress size={60} />
                    <SiPrisma size={60} />
                </div>
                <p className="m-10 font-bold">Mes reseaux</p>
                <div className="p-10 grid grid-cols-5 space-x-2">
                    <SiFacebook size={60} />
                    <SiInstagram size={60} />
                    <SiTwitter size={60} />
                    <SiLinkedin size={60} />
                    <SiGmail size={60} />
                </div>
            </div>
        </div>
    )
}

