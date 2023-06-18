import Image from "next/image";

function AppBar() {
  return (
    <>
      <div className="flex flex-row justify-between px-8 py-4 items-center">
        <div className="flex flex-row items-center">
          <Image src="/images/icon.png" alt="Icon" width={50} height={50} />
          <ul className="ml-20 flex space-x-2">
            <li>
              <a
                href="/"
                className="hover:text-blue-600 font-semibold transition"
              >
                Home
              </a>
            </li>
          </ul>
        </div>
        <button className="bg-blue-500 h-10 px-10 hover:bg-blue-700 text-white font-bold text-sm rounded-full ">
          Login
        </button>
      </div>
    </>
  );
}

function Hero() {
  return (
    <>
      <section className="w-full bg-gradient-to-r from-blue-600 to-blue-400 text-center text-white">
        <div className="p-24 flex justify-around items-center">
          <div className="flex flex-col w-1/3 space-y-4 items-center">
            <p className="text-xl">
              Mencari aplikasi media pembelajaran yang memudahkan guru dalam
              mengunggah materi pelajaran dan memungkinkan murid untuk belajar
              dengan lebih interaktif? EduTube adalah pilihan terbaik untuk
              Anda!
            </p>
            <button className="w-fit px-4 py-1 outline outline-2 outline-white rounded text-sm font-light shadow-xl hover:bg-white hover:text-black transition">
              Gabung Sekarang
            </button>
          </div>
          <div>
            <Image src="/images/icon.png" alt="Icon" width={395} height={395} />
          </div>
        </div>
      </section>
    </>
  );
}

function Reason() {
  return (
    <>
      <div className="bg-slate-300 p-24">
        <div className="flex flex-col w-full items-center space-y-11">
          <h1 className="font-extrabold text-2xl">Kenapa EduTube</h1>
          <div className="flex justify-around space-x-4">
            <div className="flex flex-col w-1/3 items-center space-y-3">
              <Image
                src="/images/rocket.png"
                alt="Icon"
                width={109}
                height={109}
              />

              <h3 className="font-bold text-2xl">Cepat</h3>
              <p className="font-semibold text-xl text-center ">
                Guru dapat mengunggah materi pelajaran berupa video dengan mudah
                dan cepat
              </p>
            </div>
            <div className="flex flex-col w-1/3 items-center space-y-3">
              <Image
                src="/images/world.png"
                alt="Icon"
                width={109}
                height={109}
              />
              <h3 className="font-bold text-2xl">Dimana Saja</h3>
              <p className="font-semibold text-xl text-center">
                Aktifitas Dapat Dilakukan di mana saja, menonton atau mengunggah
                video
              </p>
            </div>
            <div className="flex flex-col w-1/3 items-center space-y-3">
              <Image
                src="/images/puzzle.png"
                alt="Icon"
                width={109}
                height={109}
              />

              <h3 className="font-bold text-2xl">Fitur</h3>
              <p className="font-semibold text-xl text-center">
                Fitur-fitur interaktif seperti kuis dan forum diskusi membantu
                murid dalam memahami materi pelajaran dengan lebih baik
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

function Testimoni() {
  var testimoni = [
    {
      image_url: "/images/jerome.png",
      nama: "Jerome Polin",
      as: "Siswa",
      say: "Saya sangat senang menggunakan EduTube untuk belajar. Aplikasi ini memudahkan saya dalam menonton video pembelajaran dan memberikan komentar pada video tersebut. Selain itu, fitur-fitur interaktif seperti kuis dan forum diskusi juga sangat membantu dalam memahami materi pelajaran",
    },
    {
      image_url: "/images/rina.png",
      nama: "Rina",
      as: "Siswa",
      say: "Saya sangat merekomendasikan EduTube kepada teman-teman saya. Aplikasi ini membuat proses belajar menjadi lebih menyenangkan dan interaktif. Selain itu, saya juga bisa belajar kapan saja dan di mana saja sesuai dengan jadwal saya",
    },
    {
      image_url: "/images/ani.png",
      nama: "Ibu Ani",
      as: "Guru",
      say: "EduTube sangat membantu saya dalam proses mengajar. Saya bisa mengunggah materi pelajaran dengan mudah dan cepat, serta memantau perkembangan murid dengan lebih efektif melalui fitur-fitur interaktif yang disediakan.",
    },
  ];
  return (
    <>
      <div className="px-24 py-12 space-y-12 bg-blue-300">
        <h1 className="text-center text-3xl font-bold">Testimoni</h1>
        <div className="flex justify-center items-center text-center space-x-24">
          {testimoni.map((tes) => {
            return (
              <div className="w-72 flex flex-col bg-gradient-to-br from-blue-600 to-blue-300 items-center space-y-2 p-4">
                <Image
                  src={tes.image_url}
                  alt={tes.nama}
                  width={76}
                  height={76}
                />
                <h2 className="font-bold text-xl">{tes.nama}</h2>
                <h3 className="font-semibold text-sm">{tes.as}</h3>
                <p className="text-md">{tes.say}</p>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
}

function Divider() {
  return <div className="w-11/12 h-3 mx-auto my-5 bg-gray-300 "></div>;
}

function Faq() {
  var faqs = [
    {
      question:
        "Apakah aplikasi EduTube bisa digunakan oleh semua jenis mata pelajaran?",
      answer:
        "Ya, aplikasi EduTube bisa digunakan oleh semua jenis mata pelajaran.",
    },
    {
      question: "Apakah aplikasi EduTube bisa diakses secara gratis?",
      answer:
        "Tidak, aplikasi EduTube membutuhkan biaya langganan bulanan untuk dapat mengakses semua fitur yang disediakan.",
    },
  ];
  return (
    <div className="flex flex-col items-center space-y-4">
      <h1 className="font-bold text-3xl">FAQ'S</h1>
      <div className="flex flex-col w-8/12 space-y-6">
        {faqs.map((faq) => {
          return (
            <div className="shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)] rounded-lg p-4 pointer-events-auto text-start space-y-5">
              <h2 className="font-bold">{faq.question}</h2>
              <p>{faq.answer}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
}
export default function Home() {
  return (
    <main>
      <AppBar />
      <Hero />
      <Reason />
      <Testimoni />
      <Divider />
      <Faq />
    </main>
  );
}
