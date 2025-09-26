import reactImage from "./assets/react.svg";

function App() {
  return (
    <>
      <header className="flex flex-row w-full align-middle py-6 px-64 justify-between items-center bg-indigo-800 text-white">
        <h1 className="text-2xl font-light">Curso Frontend 202520</h1>
        <div className="flex flex-row gap-8">
          <a className="text-xl" href="#">
            Descripcion
          </a>
          <a className="text-xl" href="#">
            Entregas
          </a>
        </div>
      </header>
      <main className="mx-48 mt-32">
        <section>
          <div className="flex flex-row w-full align-middle items-center justify-evenly">
            <h1 className="text-6xl font-bold w-1/2">
              Bienvenidos a la pagina web del curso de{" "}
              <span className="text-indigo-600">Frontend con React</span>
            </h1>
            <img className="w-64" src={reactImage} alt="React Logo" />
          </div>
          <p className="text-2xl px-44 mt-12">
            Esta es la página que almacenará los resultados del grupo 3 del
            curso de desarrollo web frontend con HTML, CSS y JavaScript. Aquí se
            pueden observar y probar los proyectos subidos por los estudiantes
            del curso cada semana. La página también será actualizada cada
            semana; la página solo usará conceptos que ya se han aprendido en el
            curso. También, con algo de tiempo adicional, el código fuente de la
            página y sus distintas versiones será accesible por los estudiantes
            Debido a restricciones del curso, solamente contenido hecho por los
            estudiantes puede ser publicado por este medio, y contenidos como
            las presentaciones o las grabaciones tienen que ser accedidos por
            medio de la plataforma{" "}
            <a className="text-indigo-500 underline" href="https://bloqueneon.uniandes.edu.co">BloqueNeon</a> del
            curso.
          </p>
        </section>
      </main>
    </>
  );
}

export default App;
