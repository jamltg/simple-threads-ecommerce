import { useEffect, useState } from "react"

export default function Mens() {
  const [mensProducts, setMensProducts] = useState([]);

  useEffect(()=>{
    fetch('http://localhost:8080/api/products')
    .then(response=>{
      if(!response.ok){
        throw new Error('Cannot Retrieve Data');
      }
      return response.json();
    })
    .then(response=>{
      setMensProducts(response);
    })
  });

  return (
    <div className="bg-blue-200 p-4">
      <div className="container mx-auto flex flex-wrap justify-center gap-4">
        {mensProducts.map((item) => (
          <div key={item.id} className="bg-green-300 w-full sm:w-1/2 md:w-1/3 lg:w-1/4 p-2">
            <div className="h-52 w-52 bg-gray-200 flex items-center justify-center overflow-hidden mx-auto">
              <img src={item.image_path} alt={item.name} className="object-cover h-full w-full" />
            </div>
            <div className="p-4 text-center">
              <div className="h-16 flex justify-center items-center bg-yellow-200">
                <h1 className="font-semibold text-lg">{item.name}</h1>
              </div>
              <div className="bg-blue-200 h-10 flex justify-center items-center">
                <h2 className="text-xl font-bold text-gray-700">${item.price}</h2>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
