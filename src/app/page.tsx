import MainLogo from "@/components/main/MainLogo";
import Services from "@/components/services/Services";
import Wave from "@/components/divider/WaveDivider";

export default function Home() {
  return (
    <>
      <main className="w-full">
        <MainLogo />
        <Wave />
        <Services />
      </main>
      <footer></footer>
    </>
  );
}
