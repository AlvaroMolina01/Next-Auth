import { useSession, signIn, signOut } from "next-auth/react";
import Link from "next/link";

export default function Component() {

  //Regemos los datos de la sesión si hay una sesión iniciada
  const { data: session } = useSession();

  //Si hay sesion indicamos que está logueado
  if (session) {
    console.log(session);
    return (
      <>
        <div class="h-screen flex flex-col items-center  bg-orange-200">
          <h1 className="text-5xl text-green-900 mb-32 mt-12 underline">Bienvienido a la página de Inicio</h1>
          <p className="text-lime-700 text-xl mb-3">Logueado como {session.user.email}</p> <br />
          <button className="btn-custom btn-primary" onClick={() => signOut()}>Sign out</button>
          <Link href="public_section">
            <a className="mt-10 underline hover:text-black ">
              <h2>Parte Pública</h2>
            </a>
          </Link>
          <Link href="private_section">
            <a className="underline mt-4">
              <h2>Parte Privada</h2>
            </a>
          </Link>
        </div>
      </>
    );
  }

  //En caso contrario le damos la opción de loguearse
  return (
    <>
    <div class="h-screen flex flex-col items-center bg-orange-200">
      <h1 className="text-5xl text-green-900 mb-32 mt-12 underline">Bienvienido a la página de Inicio</h1>
      <p className="text-red-600 text-xl mb-3">No estas logueado</p>
      <button className="btn-custom btn-primary" onClick={() => signIn()}>Sign in</button>
      <Link href="public_section">
        <a className="mt-10 underline">
          <h2>Parte Pública</h2>
        </a>
      </Link>
      <Link href="private_section">
        <a className="underline mt-4">
          <h2>Parte Privada</h2>
        </a>
      </Link>
    </div>
    </>
  );
}

