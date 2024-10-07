import MainLogo from "@/components/mainLogo/MainLogo";
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
