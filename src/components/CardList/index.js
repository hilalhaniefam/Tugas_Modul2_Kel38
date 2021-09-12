import React from "react";
export default function CardList(props) {
  const { nama, rasa, warna, isNameBold, image, id } = props;
  return (
    <div key={id} className="w-full bg-gray-100">
      <div className="max-w-2xl mx-auto mb-6 py-4 px-2 sm:px-2 lg:max-w-7xl lg:px-8">
        <div className="p-6 object-center group rounded-md rounded-3xl mt-6 grid grid-cols-1 gap-y-10 gap-x-6 bg-white  filter drop-shadow-md md:drop-shadow-xl ">
          <h2 className=" text-2xl font-bold trackingtight text-gray-900">
            Buah {nama}
          </h2>
          <div
            className="group rounded-md pb-4  filter drop-shadow-md md:drop-shadow-xl "
            class="rounded-md rounded-3xl"
          >
            <div className="aspect-w-1 aspect-h-1 overflow-hidden grouphover:opacity-75 w-full aspect-none object-center">
              <img
                src={image}
                alt="Gambar"
                className="w-full object-center objectcover lg:w-full"
              />
            </div>
            <div className="px-1 mt-4 flex justify-between text-base">
              <div>
                <h3
                  className={`${isNameBold ? "font-bold " : ""} text-gray-700`}
                >
                  <span ariahidden="true" className="absolute inset-0" />
                  Nama : {nama}
                </h3>
                <p className="mt-1 text-gray-500">Rasa : {rasa}</p>
              </div>
              <p className="font-medium text-gray-900">Warna : {warna}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
