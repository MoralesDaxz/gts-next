import MainLogo from "@/components/main/MainLogo";
import Services from "@/components/services/Services";
import WaveOne from "@/components/divider/WaveOne";
import EcoBox from "@/components/eco/EcoBox";


export default function Home() {
  return (
    <>
      <main className="w-full">
        <MainLogo />
        <WaveOne color={"#1A5990"} />
        <Services />
        <EcoBox />
      {/*   <WavesOpacity clase="" color="#F0F3F8" /> */}
      </main>
      <footer></footer>
    </>
  );
}
