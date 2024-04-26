import MainFooter from "@/components/main/MainFooter";
import MainHeader from "@/components/main/MainHeader";
import MainView from "@/views/main/MainView";

export default function MainLayout() {

    return (
      <>
        <MainHeader />
            <MainView/>
        <MainFooter />
      </>
    );
}
