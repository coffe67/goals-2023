import Image from "next/image";
export function Overlay({show, setShow, cardSelected}) {
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
        <div className="flex flex-wrap justify-center p-2">
          {
            cardSelected === 'card_1' &&
            <>
              <Image className="rounded-lg m-1 hover:scale-150" width={320} height={220}  src='/images/card_1/ranch0.jpg' alt="ranch"/>
              <Image className="rounded-lg m-1 hover:scale-150" width={320} height={220} src='/images/card_1/ranch1.jpg' alt="ranch"/>
              <Image className="rounded-lg m-1 hover:scale-150" width={320} height={220} src='/images/card_1/ranch2.jpg' alt="ranch"/>
              <Image className="rounded-lg m-1 hover:scale-150" width={320} height={220} src='/images/card_1/investing.jpg' alt="inversion"/>
              <Image className="rounded-lg m-1 hover:scale-150" width={320} height={220} src='/images/card_1/volkswagen-camper.jpg' alt="ranch"/>
            </>
          }
        </div>
      </div>

    </div>
  )
}