import MainLogo from "@/components/main/MainLogo";
import Services from "@/components/services/Services";
import EcoBox from "@/components/eco/EcoBox";
import Companies from "@/components/companies/Companies";
import Statistics from "@/components/statistics/Statistics";
import Contact from "@/components/contact/Contact";
import WavesOpacity from "@/components/divider/WavesOpacity";
import CardsInfo from "@/components/cards/CardsInfo";
import WaveOne from "@/components/divider/WaveOne";

export default function Home() {
  return (
    <>
      <main className="w-full relative">
        <MainLogo />
        <CardsInfo claseContain="bgDegrade" />
        <WavesOpacity color={"#174c7a"} />
        <Services />
        <Statistics />
        <WavesOpacity color={"#edf0f5"} />
        <Companies />
        <Contact />
        <WavesOpacity color={"#001423"} />
        <EcoBox />
        <WaveOne clase="absolute bottom-0" color="#001423" />
      </main>
    </>
  );
}
