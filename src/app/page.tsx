import MainLogo from "@/components/main/MainLogo";
import Services from "@/components/services/Services";
import WaveOne from "@/components/divider/WaveOne";
import EcoBox from "@/components/eco/EcoBox";
import Companies from "@/components/companies/Companies";


export default function Home() {
  return (
    <>
      <main className="w-full">
        <MainLogo />
        <WaveOne color={"#1A5990"} />
        <Services />
        <EcoBox />
      {/*   <WavesOpacity clase="" color="#F0F3F8" /> */}
      <Companies/>
      </main>
      <footer></footer>
    </>
  );
}
