import { useSession, signIn } from "next-auth/react";
import Link from "next/link";

export default function privateSection() {
  //Recogemos los datos de la sesión
  const { data: session } = useSession();
  //Si hay sesion, le decimos que se ha iniciado correctamente y por lo tanto puede acceder al contenido de la parte privada
  if (session) {
    return (
      <>
        <div className="h-screen flex flex-col items-center bg-teal-800 text-zinc-200">
          <div className="w-7/12">
            <h1 className="mt-10 text-5xl underline">Parte privada</h1>
            <p className="text-2xl mt-16">¡Has iniciado sesión correctamente!</p>
            <p className="text-2xl mt-10 mb-4 underline"> Información del usuario </p>
            <p className="mb-2"> Email --> {session.user.email}</p>
            <p className="mb-2"> Nombre --> {session.user.name}</p>
            <p className="mb-2"> Imagen</p>
            <img className="w-10 mb-8" src= {session.user.image}></img>
            <Link href="/">
              <a className="underline">Volver al inicio</a>
            </Link>
          </div>
        </div>
      </>
    );
  }
  //Si no hay sesión, le damos la opción de iniciarla para acceder a la parte privada
  return (
    <>
      <div className="h-screen flex flex-col items-center bg-teal-800 text-zinc-200">
        <div className="w-7/12">
          <h1 className="mt-10 text-5xl underline"> Parte privada bloqueada</h1>
          <h2 className="text-2xl mt-12 mb-4">Debes iniciar sesion para acceder a la parte privada</h2>
          <button className="btn-custom2 btn-primary2 mb-4" onClick={() => signIn()}>Sign in</button>
          <br></br>
          <Link href="/">
            <a className="underline">Volver al inicio</a>
          </Link>
          </div>
      </div>
    </>
  );
}
