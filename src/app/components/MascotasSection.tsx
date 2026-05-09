
const Image = new URL("../../assets/funny-cute-dog-cat-jumping-running-happily-field-blurred-background-great-friendship-togetherness-pet-384469297.jpg", import.meta.url).href;


export function MascotasSection() {

  return (
    <section id="beneficios" className="py-16 md:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Image */}
          <div className="order-2 lg:order-1 grid lg:grid-cols-2 gap-2 items-center">
            <div className="h-full flex flex-col gap-4 items-center justify-center lg:px-5">
                <h1 className="text-3xl md:text-4xl font-bold text-gray-900">
                Ya puedes viajar con tu mascota
                </h1>
                <p className="text-gray-600 text-sm text-center text-justify">Flyallways te brinda la opción de viajar con tu mascota, para que le acompañe en todo su recorrido, ya no tienes que regalarlo o desacerte de ella. Para mas información revise los requisitos necesario en la sección "Todo lo que necesita saber" Viajes con mascota. </p>
            </div>
            <img
              src={Image}
              alt="Fotos de Mascotas"
              className="rounded-2xl shadow-xl w-full h-auto"
            />
          </div>
      </div>
    </section>
  );
}
