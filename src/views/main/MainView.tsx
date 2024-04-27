import MainService from "@/components/main/MainService";
import MainBenefits from "@/components/main/MainBenefits";
import MainForm from "@/components/main/MainForm";
import MainHome from "@/components/main/MainHome";


export default function MainView() {

  return (
    <>
      <div id="home">
        <MainHome/>
      </div>
      <div id="benefit">
        <MainBenefits />
      </div>
      <div id="service">
        <MainService />
      </div>
      <div id='contact' className="mx-auto max-w-3xl" >
        <MainForm />
      </div>
    </>
  );
}
