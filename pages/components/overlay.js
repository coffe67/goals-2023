import Image from "next/image";
export default function Overlay({show, setShow, cardSelected}) {
  const cards = {
    card_1: {background: 'bg-gradient-to-r to-yellow-600 from-red-900', textColor:'', title: 'Propseridad y Riqueza'},
    card_2: {background: 'bg-red-700', textColor:'', title: 'Fama y Reputación'},
    card_3: {background: 'bg-rose-400', textColor:'', title: 'Amor y Relaciones'},
    card_4: {background: 'bg-gradient-to-r from-green-700 to-blue-950', textColor:'', title: 'Salud y Familia'},
    card_5: {background: 'bg-gradient-to-r from-yellow-800 to-yellow-400', textColor:'', title: 'My Self'},
    card_6: {background: 'bg-gradient-to-r from-white via-green-600 to-blue-500', textColor:'', title: 'Creatividad e Hijos'},
    card_7: {background: 'bg-gradient-to-r from-black to-blue-950', textColor:'', title: 'Saber y Cultura'},
    card_8: {background: 'bg-gradient-to-r from-black to-gray-800', textColor:'', title: 'Profesión'},
    card_9: {background: 'bg-gradient-to-r from-white to-white-500 text-black', textColor:'', title: 'Ayuda y Viajes'}
  }
  const {background, title} = cards[cardSelected || 'card_1']
  return (
    <div className={`fixed flex top-0 left-0 w-full px-10 z-10 h-screen pt-4 ${background} transform delay-100 transition-all duration-300 ${show ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-full"}`}>
      <div className="flex flex-col w-full h-full">
        <div className="flex justify-end items-center">
          <button className="rounded-full p-2 border border-white w-12 h-12" onClick={() => setShow(false)}>
            X
          </button>
        </div>
        <div>
          <h2 className="text-3xl font-bold">{title}</h2>
        </div>
        <div className="flex justify-center items-center p-2 max-h-[85vh] overflow-y-auto ">
          {
            cardSelected === 'card_1' &&
            <div className="flex flex-col mt-[60vh] lg:mt-[5vh]">
              <div className="flex flex-col lg:flex-row w-full justify-between">
                <div className="flex flex-col justify-center items-center">
                  <Image className="rounded-lg m-1 hover:scale-150" width={320} height={280}  src='/images/card_1/Frases-de-inversiones-16.png' alt="book"/>
                  <div>Invertir en conocimiento</div>
                </div>
                <div className="flex flex-col justify-center items-center">
                  <Image className="rounded-lg m-1 hover:scale-150" width={480} height={380} src='/images/card_1/investing_b.jpg' alt="book"/>
                  <div>Invertir 10k + / Mes en Negocios</div>
                </div>
                <div className="flex flex-col justify-center items-center">
                  <Image className="rounded-lg m-1 hover:scale-150" width={420} height={380} src='/images/card_1/volkswagen-camper.jpg' alt="book"/>
                  <div>Vehículo Funcional</div>
                </div>
              </div>
              <div className="flex w-full justify-between">
                <div className="flex flex-col justify-center items-center">
                  <Image className="rounded-lg m-1 hover:scale-150" width={320} height={280}  src='/images/card_1/ranch0.jpg' alt="book"/>
                  <div>Ubicación Rancho 50+</div>
                </div>
                <div className="flex flex-col justify-center items-center">
                  <Image className="rounded-lg m-1 hover:scale-150" width={350} height={350} src='/images/card_1/ranch1.jpg' alt="book"/>
                  <div>Diseño Rancho 50+</div>
                </div>
                <div className="flex flex-col justify-center items-center">
                  <Image className="rounded-lg m-1 hover:scale-150" width={350} height={350} src='/images/card_1/ranch2.jpg' alt="book"/>
                  <div>Estrategia Financiera Rancho 50+</div>
                </div>
              </div>
            </div>
          }
          {
            cardSelected === 'card_2' &&
            <div  className="flex flex-col mt-[130vh] lg:mt-[45vh]">
              <div className="flex w-full justify-center">
                <h2 className="text-2xl font-bold text-center">
                  "Vida solo hay una y no creo qué sea para morir de miedo."
                </h2>
              </div>
              <div className="flex flex-col lg:flex-row w-full justify-between">
                <Image className="rounded-lg m-1 hover:scale-150" width={420} height={380}  src='/images/card_2/giving_advices.jpeg' alt="book"/>
                <Image className="rounded-lg m-1 hover:scale-150" width={420} height={380} src='/images/card_2/lo-logre.jpg' alt="book"/>
              </div>
              <div className="flex flex-col lg:flex-row justify-center">
                <Image className="rounded-lg m-1 hover:scale-150" width={300} height={280} src='/images/card_2/giving_advice_3.jpeg' alt="book"/>
                <Image className="rounded-lg m-1 hover:scale-150" width={300} height={280} src='/images/card_2/giving_advice_2.jpeg' alt="book"/>
              </div>
            </div>
          }
          {
            cardSelected === 'card_3' &&
            <div className="flex flex-col mt-[110vh] lg:mt-[15vh]">
              <div className="flex flex-col lg:flex-row w-full justify-between">
                <Image className="rounded-lg m-1 hover:scale-150" width={320} height={380}  src='/images/card_3/family.jpeg' alt="book"/>
                <Image className="rounded-lg m-1 hover:scale-150" width={320} height={280} src='/images/card_3/family2.jpeg' alt="book"/>
                <Image className="rounded-lg m-1 hover:scale-150" width={320} height={280} src='/images/card_3/family 4.jpeg' alt="book"/>
              </div>
              <div className="flex flex-col lg:flex-row w-full justify-center">
                <Image className="rounded-lg m-1 hover:scale-150" width={420} height={380} src='/images/card_3/puerto-vallarta.jpg' alt="book"/>
              </div>
            </div>
          }
          {
            cardSelected === 'card_4' &&
            <>
              <Image className="rounded-lg m-1 hover:scale-150" width={420} height={380}  src='/images/card_4/salud_voleibol.jpeg' alt="book"/>
              <Image className="rounded-lg m-1 hover:scale-150" width={320} height={280} src='/images/card_4/salud_2.jpeg' alt="book"/>
              <Image className="rounded-lg m-1 hover:scale-150" width={320} height={280} src='/images/card_4/family-workout.jpg' alt="book"/>
            </>
          }
          {
            cardSelected === 'card_5' &&
            <div className="flex flex-col mt-[110vh] lg:mt-[5vh]">
              <div className="flex justify-center">
                <Image className="rounded-lg m-1 hover:scale-150" width={520} height={480}  src='/images/card_5/myself.jpg' alt="book"/>
                <Image className="rounded-lg m-1 hover:scale-150" width={520} height={480}  src='/images/card_5/5238529.jpeg' alt="book"/>
              </div>
              <div className="w-full">
                <p className="text-center mt-2">
                  El arbol de la vida representa tus origenes como sus raices, el tronco representa lo fuerte que
                  te haz vuelto con los años, y sus ramas representan los caminos y decisiones tomadas al grado de poder dejar algo
                  de valor en el camino.
                </p>
                <p className="text-center mt-2">
                  El ave fenix representa la capacidad de volver a empezar.
                </p>
                <p className="text-center mt-2 font-semibold">
                  Soy el amigo que no estara en todas las fiesta ni en todos los mejores momentos, pero soy el amigo que estara cuando las cosas
                  se pongan dificiles para levantarte si caes, o compartir la pena y reir al final.
                </p>
              </div>
            </div>
          }
          {
            cardSelected === 'card_6' &&
            <>
              <Image className="rounded-lg m-1 hover:scale-150" width={420} height={320}  src='/images/card_6/saxofon-destacada.jpg' alt="book"/>
              <Image className="rounded-lg m-1 hover:scale-150" width={420} height={320} src='/images/card_6/mariachi.jpg' alt="book"/>
              <Image className="rounded-lg m-1 hover:scale-150" width={420} height={320} src='/images/card_6/Flesh-and-Blood-eBay.jpg' alt="book"/>
            </>
          }
          {
            cardSelected === 'card_7' &&
            <>
              <Image className="rounded-lg m-1 hover:scale-150" width={420} height={320}  src='/images/card_7/book1.jpg' alt="book"/>
              <Image className="rounded-lg m-1 hover:scale-150" width={420} height={320} src='/images/card_7/Book2.jpg' alt="book"/>
              <Image className="rounded-lg m-1 hover:scale-150" width={420} height={320} src='/images/card_7/Book3.jpg' alt="book"/>
              <Image className="rounded-lg m-1 hover:scale-150" width={420} height={320} src='/images/card_7/barista.jpg' alt="book"/>
              <Image className="rounded-lg m-1 hover:scale-150" width={420} height={320} src='/images/card_7/english.png' alt="book"/>
            </>
          }
          {
            cardSelected === 'card_8' &&
            <>
              <Image className="rounded-lg m-1 hover:scale-150" width={420} height={320}  src='/images/card_8/az.jpeg' alt="book"/>
              <Image className="rounded-lg m-1 hover:scale-150" width={420} height={320} src='/images/card_8/startups.jpeg' alt="book"/>
              <Image className="rounded-lg m-1 hover:scale-150" width={420} height={320} src='/images/card_8/ayub.jpeg' alt="book"/>
            </>
          }
          {
            cardSelected === 'card_9' &&
            <>
              <Image className="rounded-lg m-1 hover:scale-150" width={420} height={320}  src='/images/card_9/senas.jpg' alt="book"/>
              <Image className="rounded-lg m-1 hover:scale-150" width={420} height={320} src='/images/card_9/conference.jpeg' alt="book"/>
              <Image className="rounded-lg m-1 hover:scale-150" width={420} height={320} src='/images/card_9/river.jpeg' alt="book"/>
            </>
          }
        </div>
      </div>

    </div>
  )
}