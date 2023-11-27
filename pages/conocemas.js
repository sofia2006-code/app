import Footer from "../components/footer";
import Navigations from "../components/navigations";


export default function ConoceMas() {
    return (
      <>
        <div className="bg-gradient-to-b from-[#1D1261] to-[#1B153F] min-h-screen flex flex-col justify-start items-center text-white">
          <Navigations openConf={true} />
          <section id="informacion" className="relative">
            <div id="info1" className="container flex flex-col items-center py-10 md:flex-row">
              <div className="flex flex-col items-center md:items-start md:w-1/2 md:pl-10">
                <div className="mb-4 mx-6 md:mb-0 text-center md:text-left">
                  <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 ">Sabías que</h1>
                  <p className="leading-relaxed mb-6 text-lg md:text-xl">
                    Los alumnos con TDAH tienen tres veces más chance de repetir curso por falta de apoyo del sistema educativo. El 30% de adolescentes con este diagnóstico abandonan la secundaria, comparado con solo el 5% de alumnos sin TDAH.
                  </p>
                  <p className="leading-relaxed mb-6 text-lg md:text-xl">
                    Neuropsicólogas y psicopedagogas afirman que no tienen una herramienta tecnológica para recomendar a sus pacientes ya que no existe una que abarque todas las herramientas necesarias.
                  </p>
                </div>
                <img src="images/mujer1.png" className="w-full md:w-1/2 md:max-w-full mb-6" alt="Mujer 1" />

              </div>
            </div>
            <div id="info2" className="container flex flex-col md:flex-row items-center justify-center py-10">
              <div className=" mx-6 md:w-1/2 md:pr-10 text-center md:text-left">
                <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6"> Ayuda Tecnológica</h1>
                <p className="leading-relaxed mb-6 text-lg md:text-xl">
                  Al tener dificultades con mantener la concentración en la clase en vivo, profesionales afirman que tareas simples y en plazos cortos le permitirían a la mayoría de sus pacientes cursar una secundaria normal sin necesidad de un acompañamiento terapéutico.
                </p>
                <p className="leading-relaxed mb-6 text-lg md:text-xl">
                  Centralizando todas las herramientas necesarias en una sola aplicación permitiría al alumno no tener que recordar mantener al día distintas aplicaciones sino mantener el seguimiento con todo centralizado, tanto fuera como dentro del aula.
                </p>
              </div>
              <div className="md:w-1/2 flex items-center justify-center">
                <img src="images/mujer2.png" className="mb-14 w-full md:w-82 md:max-w-full" alt="Mujer 2" />
              </div>
            </div>
          </section>
        </div>
      </>
    );
  }