import { Hero } from "@/components/sections/Hero";
import { WhatIsTaken } from "@/components/sections/WhatIsTaken";
import { Statistics } from "@/components/sections/Statistics";
import { Forms } from "@/components/sections/Forms";
import { Causes } from "@/components/sections/Causes";
import { SharedResponsibility } from "@/components/sections/SharedResponsibility";
import { Participate } from "@/components/sections/Participate";
import { Closing } from "@/components/sections/Closing";

export default function HomePage() {
  return (
    <>
      <Hero />
      <WhatIsTaken />
      <Statistics />
      <Forms />
      <Causes />
      <SharedResponsibility />
      <Participate />
      <Closing />
    </>
  );
}
