"use client"

import {useState, useEffect} from "react";
import {useRouter} from "next/navigation";
import {Difficulty} from "@/types/types";
import Brain from "../app/public/images/brain.png"
import Image from "next/Image";
import Carrousel from "@/app/components/carrousel/carrousel";
import Button from "@/app/components/button/button";
import "./globals.css";

export default function Home() {
    const router = useRouter()
    const [difficult, setDifficult] = useState('')
    const [categories, setCategories] =  useState([]);
    const [selectedCategory, setSelectedCategory] = useState<number | null>(null)

    useEffect(() => {
        const fetchCategories = async () => {
            try {
                const res = await fetch('https://opentdb.com/api_category.php');
                const data = await res.json();
                setCategories(data.trivia_categories);
            } catch (error) {
                console.log("Error fetching categories:", error)
            }
        }
        fetchCategories();
    }, [])

    const handleCategoryClick = (categoryId: number) => {
        setSelectedCategory(categoryId);
        console.log("Categoría seleccionada: ", categoryId)
    };

    const handleClickDifficult = (difficult: Difficulty) => {
        setDifficult(difficult)
        console.log("Nivel seleccionado: ", difficult)
    }
    const handleButtonClick = () => {
        if(difficult && selectedCategory) {
            router.push(`/quiz?category=${selectedCategory}&difficulty=${difficult}`)
        }
        else {
            alert('Selecciona la dificultad y categoría!')
        }
    }

  return (
      <div className="text-center">
          <h1 className="header">QuizUp!</h1>
          <p className="text">Preparado para convertirte en la nueva leyenda del QuizUp!?</p>
          <div className="text  my-5">
              <Carrousel categories={categories} onCategorySelect={handleCategoryClick}/>
          </div>
          <div className="flex justify-around my-5">
              <div className="flex flex-col border-l-2 border-blue-700 rounded-md p-4 hover:scale-110 hover:shadow-lg"
                   onClick={() => handleClickDifficult(Difficulty.EASY)} >
                  <Image src={Brain} alt="Image"
                         className="mb-7  mt-1"
                         width={60}
                         height={60}
                         priority
                  />
                  <p className="text font-bold">Fácil</p>
              </div>
              <div className="flex flex-col border-l-2 border-blue-700 rounded-md p-4 hover:scale-110 hover:shadow-lg"
                   onClick={() => handleClickDifficult(Difficulty.MEDIUM)} >
                  <Image src={Brain} alt="Image"
                         className="mb-5"
                         width={70}
                         height={70}
                         priority
                  />
                  <p className="text font-bold">Medio</p>
              </div>
              <div className="flex flex-col border-l-2 border-blue-700 rounded-md p-4 hover:scale-110 hover:shadow-lg"
                   onClick={() => handleClickDifficult(Difficulty.HARD)} >
                  <Image src={Brain} alt="Image"
                         className="mb-2"
                         width={80}
                         height={80}
                         priority
                  />
                  <p className="text font-bold">Difícil</p>
              </div>
          </div>
          <Button text={"Comenzar!"} onClick={handleButtonClick}/>
      </div>
  );
}
