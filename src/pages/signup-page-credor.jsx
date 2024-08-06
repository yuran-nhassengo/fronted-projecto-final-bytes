import { useLocation } from "react-router-dom";
import { Footer } from "../components/navBar";
import { SignupCredor } from "../components/singup/signupCredor";

export const SignupPageCredor = () => {
    const location = useLocation();
    const { userId } = location.state || {};
    return (
      <>
        <main className="pb-16"> 
          <SignupCredor userId={userId} />
        </main>
        <Footer />
      </>
    );
  };
  