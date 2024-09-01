import { useEffect, useState } from "react"

export default function Mens() {
  const [mensProducts, setMensProducts] = useState();

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
    <div>
      {mensProducts.map((item)=>(
        <li key={item.id}>
          {item.name}
        </li>
      ))}
    </div>
  )
}
