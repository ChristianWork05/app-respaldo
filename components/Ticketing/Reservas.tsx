import { FC, useState } from "react";
import Card4 from "../Socials/Card4";
interface Props {
  componentState: any;
  setComponentState: any;
}
const Reservas: FC<Props> = ({componentState, setComponentState}) => {
  return (
<section className="self-stretch flex md:flex-row rounded-2xl items-start justify-center py-3 px-3 box-border max-w-full text-left text-base text-[#6096B9] font-inter">
<div className="w-auto flex md:flex-row flex-col items-center justify-start md:gap-[32px] gap-[16px]">
  
  <div className="h-auto md:flex-[0.75] flex flex-row items-start justify-start py-0 px-4 box-border bg-cover bg-no-repeat bg-[top] max-w-full ">
    <img src="https://imagedelivery.net/EfbdVs7eFECYhyroHhep9w/11c4c82b-8651-45a5-012f-0691c7065f00/public" alt="" />
  </div>



  <div className="md:flex-1 flex flex-col items-start justify-start pt-5 px-0 pb-0 box-border max-w-full">
    <Card4 
    img={
<svg width="43" height="43" viewBox="0 0 43 43" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M38.1292 36.2316H37.2438L36.2452 31.2331C36.1787 30.8997 36.025 30.6036 35.8086 30.3922C35.5921 30.1806 35.3254 30.0658 35.0509 30.0661H30.7405V27.7524H34.4366C34.7551 27.7372 35.0563 27.5682 35.2773 27.2807C35.4982 26.9933 35.6217 26.6099 35.6217 26.211C35.6217 25.812 35.4982 25.4287 35.2773 25.1414C35.0563 24.854 34.7551 24.6849 34.4366 24.6697V23.8984C34.4323 19.2602 33.0385 14.7925 30.5304 11.3786C28.0224 7.96474 24.5826 5.85294 20.891 5.46056V3.08385H22.7391C22.9047 3.09177 23.07 3.05777 23.2249 2.98387C23.3797 2.90998 23.5211 2.79773 23.6405 2.65381C23.76 2.5099 23.855 2.33733 23.9199 2.14638C23.9848 1.95542 24.0182 1.75004 24.0182 1.54252C24.0182 1.335 23.9848 1.12963 23.9199 0.938672C23.855 0.747716 23.76 0.575072 23.6405 0.431162C23.5211 0.287252 23.3797 0.174994 23.2249 0.101103C23.07 0.0272108 22.9047 -0.00679748 22.7391 0.00112419H16.5824C16.4167 -0.00679748 16.2515 0.0272108 16.0966 0.101103C15.9417 0.174994 15.8003 0.287252 15.6809 0.431162C15.5615 0.575072 15.4665 0.747716 15.4016 0.938672C15.3367 1.12963 15.3032 1.335 15.3032 1.54252C15.3032 1.75004 15.3367 1.95542 15.4016 2.14638C15.4665 2.33733 15.5615 2.5099 15.6809 2.65381C15.8003 2.79773 15.9417 2.90998 16.0966 2.98387C16.2515 3.05777 16.4167 3.09177 16.5824 3.08385H18.4304V5.46056C14.7388 5.85294 11.2991 7.96474 8.79107 11.3786C6.283 14.7925 4.88911 19.2602 4.88486 23.8984V24.6697C4.56646 24.6849 4.26516 24.854 4.0442 25.1414C3.82324 25.4287 3.69982 25.812 3.69982 26.211C3.69982 26.6099 3.82324 26.9933 4.0442 27.2807C4.26516 27.5682 4.56646 27.7372 4.88486 27.7524H8.57389V30.0661H4.26344C3.98889 30.0658 3.72218 30.1806 3.50575 30.3922C3.28932 30.6036 3.13561 30.8997 3.06907 31.2331L2.07049 36.2316H1.18504C0.866649 36.2468 0.565359 36.4158 0.344401 36.7032C0.123442 36.9907 0 37.374 0 37.7729C0 38.1718 0.123442 38.5552 0.344401 38.8426C0.565359 39.13 0.866649 39.299 1.18504 39.3143H38.1292C38.4477 39.299 38.7489 39.13 38.9699 38.8426C39.1908 38.5552 39.3143 38.1718 39.3143 37.7729C39.3143 37.374 39.1908 36.9907 38.9699 36.7032C38.7489 36.4158 38.4477 36.2468 38.1292 36.2316ZM7.34181 23.8984C7.34181 19.8094 8.63931 15.8876 10.9489 12.9962C13.2585 10.1047 16.3909 8.48029 19.6571 8.48029C22.9234 8.48029 26.0558 10.1047 28.3654 12.9962C30.675 15.8876 31.9725 19.8094 31.9725 23.8984V24.6697H7.34181V23.8984ZM11.0362 27.7524H28.278V30.0661H11.0362V27.7524ZM4.60827 36.2316L5.2243 33.1488H34.0882L34.7042 36.2316H4.60827Z" fill="white"/>
</svg>

} 
color={"bg-gradient-to-t from-[#77ADD0] to-[#284C77]"}
    title={"Reservas y zonas VIP"} content={"Organiza a tus invitados con precisión, asigna mesas y obtén informes detallados."} />
  </div>
</div>

</section>

  );
};

export default Reservas;