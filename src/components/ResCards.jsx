import React from 'react'

export const ResCards = (props) => {
    const { handleAddCart } = props;
  return (
    <div>
      <div class="relative flex flex-col text-gray-700 bg-white shadow-md bg-clip-border rounded-xl w-96">
  {/* <div class="relative mx-4 mt-4 overflow-hidden text-gray-700 bg-white bg-clip-border rounded-xl h-96">
    <img
      src={props.image}
      alt="card-image" class="object-cover w-full h-full" />
  </div> */}
  <div class="p-6">
    <div class="flex items-center justify-between mb-2">
      <p class="block font-sans text-base antialiased font-medium leading-relaxed text-blue-gray-900">
       {props.name}
      </p>
      <p class="block font-sans text-base antialiased font-medium leading-relaxed text-blue-gray-900">
        {props.type}
      </p>
    </div>
    <p class="block font-sans text-sm antialiased font-normal leading-normal text-gray-700 opacity-75">
    {props.place}
    </p>
    <p class="block font-sans text-sm antialiased font-normal leading-normal text-gray-700 opacity-75">
    {props.hours}
    </p>
 
  </div>
  <div class="p-6 pt-0">
    
    
  </div>
</div>
    </div>
  )
}
