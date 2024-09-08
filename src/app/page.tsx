"use client"

import {useState} from "react";

export default function Home() {
    const [category, setCategory] = useState<string>('General Knowledge')
    const [difficulty, setDifficulty] = useState<string>('medium')

    const handlePlay = () => {
        localStorage.setItem('category', category)
        localStorage.setItem('difficulty', difficulty)
    }

  return (
      <div className="flex flex-col items-center justify-center min-h-screen p-4">
          <h1 className="text-3xl font-bold mb-4">QuizUp!</h1>
          <div className="mb-4">
              <label htmlFor="category" className="mr-2 text-pink-500">Selecciona la temática:</label>
              <select
                  id="category"
                  value={category}
                  onChange={(e) => setCategory(e.target.value)}
                  className="border p-2 text-pink-500"
                  >Opciones de categoría acá!
              </select>
          </div>
          <div className="mb-4">
              <label htmlFor="difficulty"
                     className="mr-2 text-pink-500">Selecciona la dificultad:</label>
              <select
                  id="difficulty"
                  value={difficulty}
                  onChange={(e) => setDifficulty(e.target.value)}
                  className="border p-2 text-pink-500"
                  >
                  <option value="easy">Fácil</option>
                  <option value="medium">Medio</option>
                  <option value="hard">Difícil</option>
              </select>
          </div>
          <button
              onClick={handlePlay}
              className="bg blue-500 text-white px-4 py-2 rounded"
              >¡Jugar!</button>
      </div>
  );
}
