import Image from "next/image";
import localFont from "next/font/local";
import { useEffect, useState } from "react";
import { fetchApi, queries } from "@/utils/Fetching";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

interface Post {
  title: string
  _id: string
  subTitle:string
  content:string
  permaLink:string
  slug:string
  seoDescription:string
  categories: Category[]
  subCategories: Category[]
  tags: string
  imgCarrusel: ImageNew[]
  imgMiniatura: ImageNew
  imgTexto: ImageNew[]
  video: Video
  authorUid:string
  authorUsername:string
  updaterUsername:string
  status: boolean
  views: number
  postFormat:string
  createdAt: number
  updatedAt: number
}
interface Category {
  _id: string
}
type ImageNew = {
  _id: string
  i1024: string
  i800: string
  i640: string
  i320: string
  videoUrl: string
  createdAt: number
  }

  type Video = {
    _id: string
    url: string
    createdAt: number
    }

interface Results {
  total: number;
  results: Post[];
}

export default function Home() {

  const [data,setData] = useState<Post[]>();
  useEffect(() => {
    fetchApi({
      query: queries.getAllPost,
      variables: {sort:{createdAt:-1}, skip:0, limit:10, development:"bodasdehoy" },
    }).then((results:Results) =>{
      setData(results.results)
      console.log(results)
    })
    
  }, [])

  useEffect(() => {
    console.log(data)
  }, [data])
  

  return (
    <div
      className={`${geistSans.variable} ${geistMono.variable} grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]`}
    >
      <main className="flex flex-col gap-8 row-start-2 items-center sm:items-start">

          {data?.map((elem, idx) => {
            return(
              <div key={idx} >
              {elem.title}
              </div>
            )
          })
        }
      </main>

    </div>
  );
}
