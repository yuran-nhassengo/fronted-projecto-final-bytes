import { Footer } from "../components/navBar";
import { SignupCredor } from "../components/singup/signupCredor";

export const SignupPageCredor = () => {
    return (
      <>
        <main className="pb-16"> {/* Adiciona padding-bottom para evitar sobreposição do rodapé */}
          <SignupCredor />
        </main>
        <Footer />
      </>
    );
  };
  