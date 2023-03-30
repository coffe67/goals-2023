import Head from 'next/head'
import Image from 'next/image'
import { Inter } from 'next/font/google'
import styles from '@/styles/Home.module.css'
import Overlay from "@/pages/components/overlay";
import {useState} from "react";

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  const [show, setShow] = useState(false);
  const [cardSelected, setCardSelected] = useState('card_1');
  const handledSelection = (e) => {
    setCardSelected(e.currentTarget.dataset.card)
    setShow(true)
  }

  return (
    <>
      <Head>
        <title>Sueñografo 2023</title>
        <meta name="description" content="Sueñografo 2023" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={styles.main}>
        <Overlay show={show} setShow={setShow} cardSelected={cardSelected} />
        <div className="flex flex-col w-full h-full">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-1 my-2">
            <div className="rounded-lg bg-white text-black-500 font-semibold flex flex-col items-center justify-center">
              <span className="text-2xl">Palabra que te inspira</span>
              <span className="text-xl">
                Adelante
              </span>
            </div>
            <div className="rounded-lg bg-white text-black-500 font-semibold flex flex-col items-center justify-center">
              <span className="text-2xl">Frase del año</span>
              <span className="text-xl text-center">
                Un día a la vez, ya estamos más lejos de donde empezamos.
              </span>
            </div>
            <div className="rounded-lg bg-white text-black-500 font-semibold flex flex-col items-center justify-center">
              <span className="text-2xl">Meta Financiera</span>
              <span className="text-xl">
                Gasto mensual 30k & Inversion 10k mensual
              </span>
            </div>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-1">
            <div className="containerGrid bg-gradient-to-r to-yellow-600 from-red-900 text-white font-semibold flex items-center justify-center hover:animate-pulse">
              <button onClick={handledSelection} data-card='card_1'>
                Prosperidad y Riqueza
              </button>
            </div>
            <div className="containerGrid bg-red-700 text-white font-semibold flex items-center justify-center hover:animate-pulse">
              <button onClick={handledSelection} data-card='card_2'>
                Fama y Reputación
              </button>
            </div>
            <div className="containerGrid bg-rose-400 text-white font-semibold flex items-center justify-center hover:animate-pulse">
              <button onClick={handledSelection} data-card='card_3'>
                Amor y Relaciones
              </button>
            </div>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-1">
            <div className="containerGrid bg-gradient-to-r from-green-700 to-blue-950 text-white font-semibold flex items-center justify-center hover:animate-pulse">
              <button onClick={handledSelection} data-card='card_4'>
                Salud y Familia
              </button>
            </div>
            <div className="containerGrid bg-gradient-to-r from-yellow-800 to-yellow-400 text-white font-semibold flex items-center justify-center hover:animate-pulse">
              <button onClick={handledSelection} data-card='card_5'>
                My self
              </button>
            </div>
            <div className="containerGrid bg-gradient-to-r from-white via-green-600 to-blue-500 text-white font-semibold flex items-center justify-center hover:animate-pulse">
              <button onClick={handledSelection} data-card='card_6'>
                Creatividad e Hijos
              </button>
            </div>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-1">
            <div className="containerGrid bg-gradient-to-r from-black to-blue-950 text-white font-semibold flex items-center justify-center hover:animate-pulse">
              <button onClick={handledSelection} data-card='card_7'>
                Saber y Cultura
              </button>
            </div>
            <div className="containerGrid bg-gradient-to-r from-black to-gray-800 text-white font-semibold flex items-center justify-center hover:animate-pulse">
              <button onClick={handledSelection} data-card='card_8'>
                Profesión
              </button>
            </div>
            <div className="containerGrid bg-gradient-to-r from-white to-white-500 text-black font-semibold flex items-center justify-center hover:animate-pulse">
              <button onClick={handledSelection} data-card='card_9'>
                Ayuda y Viajes
              </button>
            </div>
          </div>
        </div>
      </main>
    </>
  )
}
