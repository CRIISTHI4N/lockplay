"use client"

import Image from "next/image";
import "../styles/mainstyles.css";
import Navbar from "@/components/Navbar";

export default function Home() {
  return (
    <>
      <Navbar />

      <section className="w-full h-screen bienvenida relative">

        <p className="text-5xl font-semibold absolute top-[40%] left-[9%]">Administra tus</p>
        <p className="text-6xl font-bold absolute top-1/2 left-[9%] mt-[-25px]">DISPOSITIVOS</p>

        <button
          type="button"
          className="bg-[#c94139] text-gray-100 font-semibold py-2 px-4 rounded-full absolute bottom-52 left-[9%] mt-[-25px]"
        >
          Ver Demostración
        </button>


        <p className="absolute bottom-40 left-[9%] mt-[-25px]">
          Elimina riesgos y maximaza ganancias en tu negocio de financioación de <br /> dispositivos
        </p>

        <Image
          src="/images/lucas.webp"
          alt="logo"
          width={400}
          height={400}
          className="rounded-full absolute bottom-24 left-[60%] z-10"
        />

        <Image
          src="/images/plataforma.webp"
          alt="logo"
          width={500}
          height={500}
          className="rounded-full absolute bottom-14 left-[56%]"
        />

      </section>

      <section className="m-auto w-[81%] my-10 grid grid-cols-2 gap-16">
        <div>

          <h2 className="text-2xl font-bold text-[#c94139] mb-5">Revolucionando la gestión con Lockplay</h2>

          <p className="text-gray-700 text-lg">
            Lockplay es una plataforma líder en gestión de riesgos para la financiación de dispositivos, diseñada para instituciones financieras y operadores de telecomunicaciones. Con herramientas avanzadas para gestionar impagos, automatizar procesos e integrar evaluaciones de riesgo crediticio, Lockplay protege dispositivos como smartphones y portátiles frente a impagos. Su tecnología innovadora y capacidad de integración la posicionan como una solución confiable en la industria, destacando por resultados sólidos y compromiso con la satisfacción del cliente.
          </p>

        </div>

        <Image
          src="/images/telefonos-demostracion.webp"
          alt="logo"
          width={300}
          height={300}
          className=""
        />
      </section>

      <section className="px-[8rem] py-10 bg-gradient-to-l from-red-500 to-[#c94139]  text-gray-100">

        <h2 className="text-2xl font-bold mb-5">Revolucionando la gestión con Lockplay</h2>

        <div className="grid grid-cols-2 gap-16">
          <div>

            <article className="flex items-center gap-5 mb-10">

              <span className="bg-white rounded-md p-4">
                <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 24 24" fill="currentColor" className="icon icon-tabler icons-tabler-filled icon-tabler-lock text-red-600"><path stroke="none" d="M0 0h24v24H0z" fill="none" /><path d="M12 2a5 5 0 0 1 5 5v3a3 3 0 0 1 3 3v6a3 3 0 0 1 -3 3h-10a3 3 0 0 1 -3 -3v-6a3 3 0 0 1 3 -3v-3a5 5 0 0 1 5 -5m0 12a2 2 0 0 0 -1.995 1.85l-.005 .15a2 2 0 1 0 2 -2m0 -10a3 3 0 0 0 -3 3v3h6v-3a3 3 0 0 0 -3 -3" /></svg>
              </span>


              <div>
                <h3 className="text-lg font-semibold uppercase">Bloqueo remoto</h3>

                <ul className="list-disc list-inside">
                  <li>Modo en línea y fuera de línea.</li>
                  <li>Programar bloqueo automático.</li>
                  <li>Bloqueo en el intercambio de SIM.</li>
                </ul>
              </div>

            </article>

            <article className="flex items-center gap-5 mb-10">

              <span className="bg-white rounded-md p-4">
                <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 24 24" fill="currentColor" className="icon icon-tabler icons-tabler-filled icon-tabler-settings text-red-600"><path stroke="none" d="M0 0h24v24H0z" fill="none" /><path d="M14.647 4.081a.724 .724 0 0 0 1.08 .448c2.439 -1.485 5.23 1.305 3.745 3.744a.724 .724 0 0 0 .447 1.08c2.775 .673 2.775 4.62 0 5.294a.724 .724 0 0 0 -.448 1.08c1.485 2.439 -1.305 5.23 -3.744 3.745a.724 .724 0 0 0 -1.08 .447c-.673 2.775 -4.62 2.775 -5.294 0a.724 .724 0 0 0 -1.08 -.448c-2.439 1.485 -5.23 -1.305 -3.745 -3.744a.724 .724 0 0 0 -.447 -1.08c-2.775 -.673 -2.775 -4.62 0 -5.294a.724 .724 0 0 0 .448 -1.08c-1.485 -2.439 1.305 -5.23 3.744 -3.745a.722 .722 0 0 0 1.08 -.447c.673 -2.775 4.62 -2.775 5.294 0zm-2.647 4.919a3 3 0 1 0 0 6a3 3 0 0 0 0 -6z" /></svg>
              </span>

              <div>
                <h3 className="text-lg font-semibold uppercase">Control de seguridad</h3>

                <ul className="list-disc list-inside">
                  <li>Restringir la instalación de aplicaciones de terceros.</li>
                  <li>Protección de restablecimiento de fábrica.</li>
                  <li>Bloqueo del reinicio en modo seguro.</li>
                  <li>Deshabilitar la depuración USB.</li>
                </ul>
              </div>

            </article>

            <article className="flex items-center gap-5">

              <span className="bg-white rounded-md p-4">
                <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="icon icon-tabler icons-tabler-outline icon-tabler-checks text-red-600"><path stroke="none" d="M0 0h24v24H0z" fill="none" /><path d="M7 12l5 5l10 -10" /><path d="M2 12l5 5m5 -5l5 -5" /></svg>
              </span>


              <div>
                <h3 className="text-lg font-semibold uppercase">Cumplimiento de normativas</h3>

                <ul className="list-disc list-inside">
                  <li>Reglamento General de Protección de Datos (RGPD).</li>
                  <li>SO/IEC 27001:2022</li>
                </ul>
              </div>

            </article>

          </div>

          <div>
            <article className="flex items-center gap-5 mb-10">

              <span className="bg-white rounded-md p-4">
                <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 24 24" fill="currentColor" className="icon icon-tabler icons-tabler-filled icon-tabler-bell-minus text-red-600"><path stroke="none" d="M0 0h24v24H0z" fill="none" /><path d="M14.235 19c.865 0 1.322 1.024 .745 1.668a3.992 3.992 0 0 1 -2.98 1.332a3.992 3.992 0 0 1 -2.98 -1.332c-.552 -.616 -.158 -1.579 .634 -1.661l.11 -.006h4.471z" /><path d="M12 2c1.358 0 2.506 .903 2.875 2.141l.046 .171l.008 .043a8.013 8.013 0 0 1 4.024 6.069l.028 .287l.019 .289v2.931l.021 .136a3 3 0 0 0 1.143 1.847l.167 .117l.162 .099c.86 .487 .56 1.766 -.377 1.864l-.116 .006h-16c-1.028 0 -1.387 -1.364 -.493 -1.87a3 3 0 0 0 1.472 -2.063l.021 -.143l.001 -2.97a8 8 0 0 1 3.821 -6.454l.248 -.146l.01 -.043a3.003 3.003 0 0 1 2.562 -2.29l.182 -.017l.176 -.004zm2 8h-4l-.117 .007a1 1 0 0 0 .117 1.993h4l.117 -.007a1 1 0 0 0 -.117 -1.993z" /></svg>
              </span>


              <div>
                <h3 className="text-lg font-semibold uppercase">Recordatorio de pago automático</h3>

                <ul className="list-disc list-inside">
                  <li>Recordatorios de programación.</li>
                  <li>Modo funcional en línea.</li>
                  <li>Notificaciones personalizadas.</li>
                </ul>
              </div>

            </article>

            <article className="flex items-center gap-5 mb-10">

              <span className="bg-white rounded-md p-4">
                <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="icon icon-tabler icons-tabler-outline icon-tabler-code text-red-600"><path stroke="none" d="M0 0h24v24H0z" fill="none" /><path d="M7 8l-4 4l4 4" /><path d="M17 8l4 4l-4 4" /><path d="M14 4l-4 16" /></svg>
              </span>


              <div>
                <h3 className="text-lg font-semibold uppercase">Impulsado por API</h3>

                <ul className="list-disc list-inside">
                  <li>Admite integraciones con otras plataformas y software.</li>
                  <li>ntegraciones de SDK con aplicaciones de terceros para bloquear funciones.</li>
                </ul>
              </div>

            </article>
          </div>
        </div>
      </section>

      <section className="m-auto w-[81%] mb-10 mt-28 grid grid-cols-3 gap-10 text-gray-700">

        <article className="relative rounded-xl p-5 pt-14 hover:bg-gradient-to-l from-red-400 to-red-500  hover:text-white transition-colors border border-red-300 shadow-lg">

          <div className="absolute top-[-4rem] left-[50%] translate-x-[-50%] overflow-hidden rounded-xl h-28 w-[60%]">
            <Image
              src="/images/ilustracion_uno.jpg"
              alt="logo"
              width={250}
              height={100}
            />
          </div>

          <h3 className="text-2xl font-semibold text-center">Titulo</h3>

          <p className="text-center">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos. Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis dignissimos neque quidem ea beatae vitae, ratione distinctio quas quae fugiat laudantium voluptatibus, provident optio asperiores repellat possimus recusandae magni consequatur!</p>

          <button
            type="button"
            className="bg-white text-red-600 font-semibold py-2 px-4 rounded-full m-auto block mt-5 border border-red-500 hover:bg-[#2c2c2c] hover:text-white transition-colors hover:shadow-md hover:shadow-gray-800 hover:border-gray-800"
          >
            Ver más
          </button>
        </article>
        <article className="relative rounded-xl p-5 pt-14 hover:bg-gradient-to-l from-red-400 to-red-500  hover:text-white transition-colors border border-red-300 shadow-lg">

          <div className="absolute top-[-4rem] left-[50%] translate-x-[-50%] overflow-hidden rounded-xl h-28 w-[60%]">
            <Image
              src="/images/ilustracion_dos.jpg"
              alt="logo"
              width={250}
              height={100}
            />
          </div>

          <h3 className="text-2xl font-semibold text-center">Titulo</h3>

          <p className="text-center">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos. Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis dignissimos neque quidem ea beatae vitae, ratione distinctio quas quae fugiat laudantium voluptatibus, provident optio asperiores repellat possimus recusandae magni consequatur!</p>

          <button
            type="button"
            className="bg-white text-red-600 font-semibold py-2 px-4 rounded-full m-auto block mt-5 border border-red-500 hover:bg-[#2c2c2c] hover:text-white transition-colors hover:shadow-md hover:shadow-gray-800 hover:border-gray-800"
          >
            Ver más
          </button>
        </article>

        <article className="relative rounded-xl p-5 pt-14 hover:bg-gradient-to-l from-red-400 to-red-500  hover:text-white transition-colors border border-red-300 shadow-lg">

          <div className="absolute top-[-4rem] left-[50%] translate-x-[-50%] overflow-hidden rounded-xl h-28 w-[60%]">
            <Image
              src="/images/ilustracion_tres.jpg"
              alt="logo"
              width={250}
              height={100}
            />
          </div>

          <h3 className="text-2xl font-semibold text-center">Titulo</h3>

          <p className="text-center">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos. Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis dignissimos neque quidem ea beatae vitae, ratione distinctio quas quae fugiat laudantium voluptatibus, provident optio asperiores repellat possimus recusandae magni consequatur!</p>

          <button
            type="button"
            className="bg-white text-red-600 font-semibold py-2 px-4 rounded-full m-auto block mt-5 border border-red-500 hover:bg-[#2c2c2c] hover:text-white transition-colors hover:shadow-md hover:shadow-gray-800 hover:border-gray-800"
          >
            Ver más
          </button>
        </article>

      </section>

      <section className="banner-principal relative h-[500px]">
        <h1 className="text-white text-center text-3xl font-semibold absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos.
        </h1>

        <h1 className="text-white text-4xl font-semibold absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 uppercase">
          Lorem ipsum dolor
        </h1>
      </section>

      <footer className="text-gray-100 bg-[#2c2c2c]">

        <div className="px-[8rem] py-5 grid grid-cols-3 gap-10">

          <div>
            <h3 className="text-lg font-semibold mb-5">Acerca de Nosotros</h3>


            <p className="text-2xl py-3 font-bold labellock">
              L<span className="text-red-600">O</span>CK
              PL<span className="text-red-600">A</span>Y
            </p>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos.</p>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-5">Redes Sociales</h3>

            <ul className="flex flex-col gap-1">
              <li>
                <a
                  href="https://www.facebook.com"
                  target="_blank"
                  className="flex items-center gap-2 w-fit hover:bg-[#181818] rounded-md px-2 py-1 transition-colors"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="icon icon-tabler icons-tabler-outline icon-tabler-brand-facebook"><path stroke="none" d="M0 0h24v24H0z" fill="none" /><path d="M7 10v4h3v7h4v-7h3l1 -4h-4v-2a1 1 0 0 1 1 -1h3v-4h-3a5 5 0 0 0 -5 5v2h-3" /></svg>
                  Facebook
                </a>
              </li>
              <li >
                <a
                  href="https://www.facebook.com"
                  target="_blank"
                  className="flex items-center gap-2 w-fit hover:bg-[#181818] rounded-md px-2 py-1 transition-colors"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="icon icon-tabler icons-tabler-outline icon-tabler-brand-instagram"><path stroke="none" d="M0 0h24v24H0z" fill="none" /><path d="M4 8a4 4 0 0 1 4 -4h8a4 4 0 0 1 4 4v8a4 4 0 0 1 -4 4h-8a4 4 0 0 1 -4 -4z" /><path d="M9 12a3 3 0 1 0 6 0a3 3 0 0 0 -6 0" /><path d="M16.5 7.5v.01" /></svg>
                  Instagram
                </a>
              </li>
              <li>
                <a
                  href="https://www.facebook.com"
                  target="_blank"
                  className="flex items-center gap-2 w-fit hover:bg-[#181818] rounded-md px-2 py-1 transition-colors"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="icon icon-tabler icons-tabler-outline icon-tabler-brand-twitter"><path stroke="none" d="M0 0h24v24H0z" fill="none" /><path d="M22 4.01c-1 .49 -1.98 .689 -3 .99c-1.121 -1.265 -2.783 -1.335 -4.38 -.737s-2.643 2.06 -2.62 3.737v1c-3.245 .083 -6.135 -1.395 -8 -4c0 0 -4.182 7.433 4 11c-1.872 1.247 -3.739 2.088 -6 2c3.308 1.803 6.913 2.423 10.034 1.517c3.58 -1.04 6.522 -3.723 7.651 -7.742a13.84 13.84 0 0 0 .497 -3.753c0 -.249 1.51 -2.772 1.818 -4.013z" /></svg>
                  Twitter
                </a>
              </li>
              <li>
                <a
                  href="https://www.facebook.com"
                  target="_blank"
                  className="flex items-center gap-2 w-fit hover:bg-[#181818] rounded-md px-2 py-1 transition-colors"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="icon icon-tabler icons-tabler-outline icon-tabler-brand-tiktok"><path stroke="none" d="M0 0h24v24H0z" fill="none" /><path d="M21 7.917v4.034a9.948 9.948 0 0 1 -5 -1.951v4.5a6.5 6.5 0 1 1 -8 -6.326v4.326a2.5 2.5 0 1 0 4 2v-11.5h4.083a6.005 6.005 0 0 0 4.917 4.917z" /></svg>
                  Tik Tok
                </a>
              </li>
            </ul>

          </div>

          <div>

            <h3 className="text-lg font-semibold mb-5">Contactanos</h3>

            <p className="flex items-center gap-2">
              <svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="icon icon-tabler icons-tabler-outline icon-tabler-location"><path stroke="none" d="M0 0h24v24H0z" fill="none" /><path d="M21 3l-6.5 18a.55 .55 0 0 1 -1 0l-3.5 -7l-7 -3.5a.55 .55 0 0 1 0 -1l18 -6.5" /></svg>
              Av. Amazonas y Villa Roel
            </p>

            <p className="flex items-center gap-2">
              <svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="icon icon-tabler icons-tabler-outline icon-tabler-phone"><path stroke="none" d="M0 0h24v24H0z" fill="none" /><path d="M5 4h4l2 5l-2.5 1.5a11 11 0 0 0 5 5l1.5 -2.5l5 2v4a2 2 0 0 1 -2 2a16 16 0 0 1 -15 -15a2 2 0 0 1 2 -2" /></svg>
              099 999 9999
            </p>

            <p className="flex items-center gap-2">
              <svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="icon icon-tabler icons-tabler-outline icon-tabler-mail"><path stroke="none" d="M0 0h24v24H0z" fill="none" /><path d="M3 7a2 2 0 0 1 2 -2h14a2 2 0 0 1 2 2v10a2 2 0 0 1 -2 2h-14a2 2 0 0 1 -2 -2v-10z" /><path d="M3 7l9 6l9 -6" /></svg>
              correo@correo.com
            </p>

          </div>
        </div>

        <p className="text-center w-full bg-[#181818] py-3">Todos los derechos © 2025 Lockplay</p>
      </footer>


      {/* CONTACTO */}

      <section className="m-auto w-[81%] mb-10 mt-28 text-gray-700">

        <h2 className="text-2xl font-bold text-[#c94139] mb-5">Contacto</h2>

        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sed nemo doloribus officiis, cumque odio, sequi praesentium dolore beatae quia numquam illo ex laborum nobis alias adipisci architecto, esse tempora quis!</p>

        <div className="flex gap-20 mt-10">

          <div>
            <p>Dirección: Av. Amazonas y Villa Roel</p>
            <p>Teléfono: 099 999 9999</p>
            <p>Correo: correo@correo.com</p>
          </div>

          <div className="w-full h-[450px] shadow-xl">
            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d593.0872117270678!2d-78.48586447852044!3d-0.1770001432495587!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x91d59a858f56d4d1%3A0xafe084d8581292c2!2sUnicornio%20II%20Edificio%20Empresarial!5e0!3m2!1sen!2sec!4v1747860155729!5m2!1sen!2sec" width="600" height="450" style={{ border: 0, width: '100%', height: '100%', borderRadius: '1rem' }} allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
          </div>
        </div>


      </section>

      {/* Sobre Nosotros */}

      <section className="text-gray-700 w-full h-screen grid grid-cols-2 relative">
        <div className="px-[7rem]">

          {/* <h2 className="text-2xl font-bold text-red-200 mb-5 mt-14 px-[8rem]">Sobre Nosotros</h2> */}
          <h2 className="text-2xl font-bold text-[#c94139] mb-5">Sobre Nosotros</h2>

          <div className="border border-gray-800 p-9 rounded-md">
            <p className="text-3xl mb-3 font-bold labellock">
              L<span className="text-red-600">O</span>CK
              PL<span className="text-red-600">A</span>Y
            </p>

            <p >Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sed nemo doloribus officiis, cumque odio, sequi praesentium dolore beatae quia numquam illo ex laborum nobis alias adipisci architecto, esse tempora quis!</p>
          </div>
        </div>

        <div className="relative bg-red-500 rounded-bl-[23rem]">

          <div>
            <Image
              src="/images/lucas.webp"
              alt="logo"
              width={400}
              height={400}
              className="absolute bottom-[50%] -translate-y-[-50%] left-[50%] -translate-x-[50%] z-10"

            />

            <Image
              src="/images/plataforma.webp"
              alt="logo"
              width={500}
              height={500}
              className="absolute bottom-[50%] -translate-y-[-50%] left-[50%] -translate-x-[50%]"
            />
          </div>


        </div>



      </section>

      <section className="m-auto w-[81%] mb-10 mt-28 grid grid-cols-3 gap-10 text-gray-700">

        <article className="relative rounded-xl p-5 border border-red-300 shadow-lg">

          <h3 className="text-2xl font-semibold text-center">Titulo</h3>

          <p className="text-center">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos. Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis dignissimos neque quidem ea beatae vitae, ratione distinctio quas quae fugiat laudantium voluptatibus, provident optio asperiores repellat possimus recusandae magni consequatur!</p>
        </article>
        <article className="relative rounded-xl p-5 border border-red-300 shadow-lg">

          <h3 className="text-2xl font-semibold text-center">Titulo</h3>

          <p className="text-center">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos. Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis dignissimos neque quidem ea beatae vitae, ratione distinctio quas quae fugiat laudantium voluptatibus, provident optio asperiores repellat possimus recusandae magni consequatur!</p>
        </article>
        <article className="relative rounded-xl p-5 border border-red-300 shadow-lg">

          <h3 className="text-2xl font-semibold text-center">Titulo</h3>

          <p className="text-center">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos. Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis dignissimos neque quidem ea beatae vitae, ratione distinctio quas quae fugiat laudantium voluptatibus, provident optio asperiores repellat possimus recusandae magni consequatur!</p>
        </article>

      </section>

    </>
  );
}
