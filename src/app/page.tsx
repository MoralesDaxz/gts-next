import MainLogo from "@/components/main/MainLogo";
import Services from "@/components/services/Services";
import EcoBox from "@/components/eco/EcoBox";
import Companies from "@/components/companies/Companies";
import Statistics from "@/components/statistics/Statistics";
import Contact from "@/components/contact/Contact";
import CardsInfo from "@/components/cards/CardsInfo";
import WaveOne from "@/components/divider/WaveOne";
import WaveCurves from "@/components/divider/WaveCurves";

export default function Home() {
  return (
    <>
      <main className="w-full relative">
        <MainLogo />
        <CardsInfo claseContain="bgDegrade" />
        <WaveCurves color={"#174c7a"} />
        <Services />
        <Statistics />
        <WaveCurves color={"#edf0f5"} />
        <Companies />
        <Contact />
        <WaveCurves color={"#001423"} />
        <EcoBox />
        <WaveOne clase="absolute bottom-0" color="#001423" />
      </main>
    </>
  );
}
