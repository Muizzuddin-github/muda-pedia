import { useParams } from "react-router-dom";
import Template1 from "./Template1";
import dataMuiz from "./muiz";
import dataIqbal from "./iqbal";
import dataRamzi from "./ramzi";

const Umkm = () => {
  let { umkm } = useParams();

  const dataUmkm = Object.assign({}, dataMuiz, dataIqbal, dataRamzi);

  const objKeys = Object.keys(dataUmkm);
  if (!objKeys.includes(umkm)) {
    return (
      <section className="flex justify-center items-center h-[100vh] ">
        <section className="flex flex-col items-center gap-4">
          <section className="relative flex justify-center">
            <img src="/spongebob.gif" alt="notfound" />
            <h1 className="font-bold text-xl text-white absolute bottom-10 drop-shadow-md">
              Ga ada, Ga da
            </h1>
          </section>
          <h1 className="text-center font-bold text-xl">
            Halaman tidak ditemukan
          </h1>
          <a href="/" className="py-1 px-4 bg-blue-500 text-white rounded-md ">
            Kembali
          </a>
        </section>
      </section>
    );
  }

  return <Template1 data={dataUmkm[umkm]} />;
};

export default Umkm;
