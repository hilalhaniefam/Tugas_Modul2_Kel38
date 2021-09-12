import React from "react";
export default function CardList(props) {
  const { nama, rasa, warna, isNameBold, image, id } = props;
  return (
    <div key={id} className="w-full bg-gray-100">
      <div className="max-w-2xl mx-auto mb-6 py-4 px-2 sm:px-2 lg:max-w-7xl lg:px-8">
        <div className="object-center group rounded-md rounded-3xl mt-4 grid grid-cols-1 divide-y divide-gray-200 bg-white  filter drop-shadow-md md:drop-shadow-xl ">
          <div className="p-2 group ">
            <h2 className="ml-4 text-2xl font-bold trackingtight text-gray-900">
              Buah {nama}
            </h2>
          </div>
          <div className="py-4 px-8 aspect-w-1 aspect-h-1 overflow-hidden grouphover:opacity-75 w-full aspect-none object-center">
            <img
              src={image}
              alt="Gambar"
              className="mt-2 w-full object-center objectcover lg:w-full"
            />
          </div>
          <div className="p-2 px-1 mt-4 flex justify-between text-base">
            <div>
              <h3
                className={`${
                  isNameBold ? "font-bold " : ""
                } text-gray-700 ml-4`}
              >
                <span ariahidden="true" className="absolute inset-0" />
                Nama : {nama}
              </h3>
              <p className="ml-4 mt-1 text-gray-500">Rasa : {rasa}</p>
            </div>
            <p className="mr-4 font-medium text-gray-900">Warna : {warna}</p>
          </div>
        </div>
      </div>
    </div>
  );
}
