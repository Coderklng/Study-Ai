import Image from "next/image";
import Navbar from "../../Components/Navbar/Navbar";
import Hero from "../../Components/Ui/Hero";
import Card from "../../Components/Ui/Card";
import Content from "../../Components/Ui/Content";
import Footer from "../../Components/Common/Footer";
export default function Home() {

  return (
    <>
     <div className="dark:bg-zinc-950 dark:text-white bg-white text-black">
       <Navbar />
       <Hero />
       <Card />
       <Content />
       <Footer />
       
     </div>
    </>
  );
}