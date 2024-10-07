import MainLogo from "@/components/main/MainLogo";
import Services from "@/components/services/Services";

export default function Home() {
  return (
    <>
      <main className="w-full">
        <MainLogo/>
        <Services/>
      </main>
      <footer className=""></footer>
    </>
  );
}
