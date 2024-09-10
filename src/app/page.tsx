"use client"

import {useState} from "react";
import {useRouter} from "next/navigation";
import Button from "@/app/components/button/button";
import Image from "next/Image";
import Brain from "../app/public/images/brain.png"
import "./globals.css";
import {Difficulty} from "@/types/types";

export default function Home() {
    const router = useRouter()
    const [difficult, setDifficult] = useState('')

    const handleClickDifficult = (difficult: Difficulty) => {
        setDifficult(difficult)
        console.log("Nivel seleccionado: ", difficult)
    }
    const handleButtonClick = () => {
        if(difficult) {
            router.push(`/quiz?difficulty=${difficult}`)
        }
        else {
            alert('Selecciona la dificultad!')
        }
    }

  return (
      <div className="text-center">
          <h1 className="header">QuizUp!</h1>
          <p className="text">Preparado para convertirte en la nueva leyenda del QuizUp!?</p>
          <div className="text">Agregar carrusel para elegir categorías!</div>
          <div className="flex justify-around my-5">
              <div className="flex flex-col border-l-2 border-blue-700 rounded-md p-4 hover:scale-110 hover:shadow-lg"
                   onClick={() => handleClickDifficult(Difficulty.EASY)} >
                  <Image src={Brain} alt="Image"
                         className="mb-7  mt-1"
                         width={60}
                         height={60}/>
                  <p className="text font-bold">Fácil</p>
              </div>
              <div className="flex flex-col border-l-2 border-blue-700 rounded-md p-4 hover:scale-110 hover:shadow-lg"
                   onClick={() => handleClickDifficult(Difficulty.MEDIUM)} >
                  <Image src={Brain} alt="Image"
                         className="mb-5"
                         width={70}
                         height={70}/>
                  <p className="text font-bold">Medio</p>
              </div>
              <div className="flex flex-col border-l-2 border-blue-700 rounded-md p-4 hover:scale-110 hover:shadow-lg"
                   onClick={() => handleClickDifficult(Difficulty.HARD)} >
                  <Image src={Brain} alt="Image"
                         className="mb-2"
                         width={80}
                         height={80}/>
                  <p className="text font-bold">Difícil</p>
              </div>
          </div>
          <Button text={"Comenzar!"} onClick={handleButtonClick}/>
      </div>
  );
}
