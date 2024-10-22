
import { FC } from "react";
import Card4 from "../Socials/Card4";
interface Props {
  componentState: any;
  setComponentState: any;
}

const Web: FC<Props> = ({componentState, setComponentState}) => {


  return (
<section className="self-stretch flex md:flex-row rounded-2xl items-start justify-center py-3 px-3 box-border max-w-full text-left text-base text-[#6096B9] font-inter">
<div className="w-auto flex md:flex-row flex-col items-center justify-start md:gap-[32px] gap-[16px]">
  
  <div className="h-auto md:flex-[0.75] flex flex-row items-start justify-start py-0 px-4 box-border bg-cover bg-no-repeat bg-[top] max-w-full ">
    <img src="https://imagedelivery.net/EfbdVs7eFECYhyroHhep9w/6a116311-d355-4369-4ce1-e75c91913400/public" alt="" />
  </div>

  <div className="md:flex-1 flex flex-col items-start justify-start pt-5 px-0 pb-0 box-border max-w-full">
    <Card4 
    img={
<svg width="41" height="41" viewBox="0 0 41 41" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M32.0047 5.49839C28.9404 2.43003 24.9069 0.519186 20.5916 0.0914365C16.2763 -0.336314 11.9462 0.745503 8.33915 3.15256C4.73209 5.55962 2.07128 9.14295 0.810137 13.292C-0.451009 17.441 -0.234458 21.8989 1.4229 25.9061C3.08025 29.9135 6.07584 33.2219 9.89923 35.2681C13.7226 37.3142 18.1372 37.9713 22.3907 37.1273C26.6443 36.2832 30.4735 33.9904 33.226 30.6395C35.9784 27.2887 37.4838 23.087 37.4856 18.7505C37.4933 16.2889 37.0128 13.8504 36.072 11.5757C35.1313 9.30098 33.7489 7.23541 32.0047 5.49839ZM31.8481 28.6103C30.7366 27.8581 29.5624 27.2031 28.3384 26.6528C28.892 24.4512 29.2057 22.1961 29.274 19.9269H35.1092C34.8863 23.0774 33.7533 26.0953 31.8481 28.6143V28.6103ZM2.39596 19.9231H8.23117C8.29975 22.1921 8.61347 24.4472 9.16686 26.6489C7.94284 27.1993 6.76856 27.8542 5.65711 28.6064C3.75185 26.0875 2.61895 23.0695 2.39596 19.9191V19.9231ZM5.65515 8.89264C6.76658 9.64489 7.94084 10.2998 9.1649 10.8501C8.61129 13.0517 8.29756 15.3068 8.22921 17.576H2.394C2.61664 14.4258 3.74884 11.408 5.6532 8.88873L5.65515 8.89264ZM26.4044 5.77635C26.0023 5.01496 25.5388 4.28764 25.0184 3.6016C26.9869 4.42319 28.7766 5.61988 30.288 7.12504C29.4426 7.68076 28.5581 8.17469 27.6415 8.60295C27.2984 7.63507 26.885 6.69362 26.4044 5.78614V5.77635ZM25.4569 9.46618C21.1006 10.9139 16.3929 10.9139 12.0365 9.46618C13.534 5.20084 16.0101 2.35273 18.7467 2.35273C21.4833 2.35273 23.9595 5.20279 25.4569 9.46618ZM10.5684 17.58C10.6365 15.6005 10.9048 13.633 11.369 11.7075C16.161 13.2805 21.3304 13.2805 26.1225 11.7075C26.5867 13.633 26.855 15.6005 26.9231 17.58H10.5684ZM26.9231 19.9289C26.8549 21.9084 26.5866 23.8758 26.1225 25.8013C21.3305 24.2277 16.1609 24.2277 11.369 25.8013C10.9049 23.8758 10.6366 21.9084 10.5684 19.9289H26.9231ZM11.0852 5.78223C10.6047 6.68978 10.1913 7.63122 9.84806 8.59904C8.93149 8.1707 8.04703 7.67677 7.20156 7.12113C8.7129 5.61597 10.5027 4.41927 12.471 3.59769C11.9508 4.28373 11.4872 5.01104 11.0852 5.77244V5.78223ZM9.84806 28.9177C10.1907 29.8854 10.6035 30.8268 11.0832 31.7345C11.4853 32.4958 11.9488 33.2231 12.4692 33.9092C10.5017 33.0902 8.71202 31.8969 7.19959 30.3955C8.04497 29.8397 8.93142 29.3458 9.84806 28.9177ZM12.0326 28.0446C16.389 26.5969 21.0967 26.5969 25.453 28.0446C23.9556 32.31 21.4793 35.1581 18.7429 35.1581C16.0063 35.1581 13.5301 32.31 12.0326 28.0446ZM26.4024 31.7345C26.8829 30.827 27.2964 29.8855 27.6395 28.9177C28.5561 29.3458 29.4407 29.8397 30.286 30.3955C28.7736 31.8969 26.984 33.0902 25.0166 33.9092C25.5368 33.2231 26.0003 32.4958 26.4024 31.7345ZM29.2643 17.5877C29.1957 15.3187 28.882 13.0635 28.3285 10.8619C29.5526 10.3116 30.7269 9.65666 31.8384 8.9044C33.7426 11.4237 34.8748 14.4415 35.0975 17.5917L29.2643 17.5877Z" fill="white"/>
</svg>

} 
color={"bg-gradient-to-t from-[#77ADD0] to-[#284C77]"}
    title={"Web de ventas propia"} content={"Aumenta tu presencia online y facilita la compra de entradas de forma directa."} />
  </div>
</div>

</section>

  );
};

export default Web;