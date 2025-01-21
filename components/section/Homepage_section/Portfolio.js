import React from "react";

const Portfolio = () => {
  return (
    <div id="portfolio-section" className="pt-16">
      <div className="container p-8 w-full flex flex-wrap">
        <h3 className="text-4xl w-full text-[#FF7700] font-bold mb-6">My Portfolio</h3>

        {/* -----------------Formal Projects----------------- */}
        <div className="flex flex-wrap justify-left mb-6">
          <h3 className="text-2xl w-full text-[#FFFFFF] font-bold mb-4">Formal Projects</h3>
          {/* -----------------card----------------- */}
          <div className="p-3 pl-0 max-w-[350px]">
            <div className="p-2 rounded-lg bg-[#2A2550] h-[300px] m-3 ml-0" id="website-card">
              <a href="https://ressambas.kalbar.polri.go.id" target="_blank" rel="noreferrer">
                <img src="./assets/ressambas.jpg" />
                <p className="text-sm text-[#FF7700] text-center my-3">https://ressambas.kalbar.polri.go.id</p>
                <div className="px-4 text-center">
                  <p className="block text-xs bg-[#FF7700] font-bold rounded-lg p-2 px-5 w-full m-auto max-w-[200px] cursor-pointer">
                    Visit
                  </p>
                </div>
              </a>
            </div>
          </div>

          {/* -------------------------------------- */}
          {/* -----------------card----------------- */}
          <div className="p-3 pl-0 max-w-[350px]">
            <div className="p-2 rounded-lg bg-[#2A2550] h-[300px] m-3 ml-0" id="website-card">
              <img src="./assets/btn-properti.jpg" />
              <p className="text-sm text-[#FF7700] text-center my-3">https://www.btnproperti.co.id</p>
              <div className="px-4 text-center">
                <a
                  className="block text-xs bg-[#FF7700] font-bold rounded-lg p-2 px-5 w-full m-auto max-w-[200px] cursor-pointer"
                  href="https://www.btnproperti.co.id"
                  target="_blank"
                  rel="noreferrer"
                >
                  Visit
                </a>
              </div>
            </div>
          </div>
          {/* -------------------------------------- */}
        </div>

        {/* -----------------Private Projects----------------- */}
        <div className="flex flex-wrap justify-left">
          <h3 className="text-2xl w-full text-[#FFFFFF] font-bold mb-4">Private Projects</h3>
          {/* -----------------card----------------- */}
          <div className="p-2 rounded-lg bg-[#2A2550] max-w-[350px] h-[300px] m-3 ml-0" id="website-card">
            <a href="https://pokemon-dexter.vercel.app" target="_blank" rel="noreferrer">
              <img src="./assets/pokemon-dexter.jpg" />
              <p className="text-sm text-[#FF7700] text-center my-3">https://pokemon-dexter.vercel.app</p>
              <div className="px-4 text-center">
                <p className="block text-xs bg-[#FF7700] font-bold rounded-lg p-2 px-5 w-full m-auto max-w-[200px] cursor-pointer">
                  Visit
                </p>
              </div>
            </a>
          </div>

          <div className="p-2 rounded-lg bg-[#2A2550] max-w-[350px] h-[300px] m-3 ml-0" id="website-card">
            <a href="https://mo-flixx.vercel.app" target="_blank" rel="noreferrer">
              <img src="./assets/moflix.jpg" />
              <p className="text-sm text-[#FF7700] text-center my-3">https://mo-flixx.vercel.app</p>
              <div className="px-4 text-center">
                <p className="block text-xs bg-[#FF7700] font-bold rounded-lg p-2 px-5 w-full m-auto max-w-[200px] cursor-pointer">
                  Visit
                </p>
              </div>
            </a>
          </div>

          <div className="p-2 rounded-lg bg-[#2A2550] max-w-[350px] h-[300px] m-3 ml-0" id="website-card">
            <a href="https://urban-luxe.vercel.app/" target="_blank" rel="noreferrer">
              <img src="./assets/urban-luxe.jpg" />
              <p className="text-sm text-[#FF7700] text-center my-3">https://urban-luxe.vercel.app/</p>
              <div className="px-4 text-center">
                <p className="block text-xs bg-[#FF7700] font-bold rounded-lg p-2 px-5 w-full m-auto max-w-[200px] cursor-pointer">
                  Visit
                </p>
              </div>
            </a>
          </div>
          {/* -------------------------------------- */}
        </div>
      </div>
    </div>
  );
};

export default Portfolio;
