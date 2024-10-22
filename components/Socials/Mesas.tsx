
import { FC } from "react";
import Card4 from "./Card4";
interface Props {
  componentState: any;
  setComponentState: any;
}
const Mesas1: FC<Props> = ({componentState, setComponentState}) => {
  return (

<section className="self-stretch flex md:flex-row rounded-2xl items-start justify-center py-3 px-3 box-border max-w-full text-left text-base text-[#6096B9] font-inter">
<div className="w-auto flex md:flex-row flex-col items-center justify-start gap-[16px]">
  
  <div className="h-auto md:flex-[0.75] flex flex-row items-start justify-start py-0 px-4 box-border bg-cover bg-no-repeat bg-[top] max-w-full ">
    <img src="https://imagedelivery.net/EfbdVs7eFECYhyroHhep9w/e8063695-f805-4e04-a1a4-7390adb7a300/public" alt="" />
  </div>

  <div className="md:flex-1 flex flex-col items-start justify-start pt-5 px-0 pb-0 box-border max-w-full">
    <Card4 
    img={
<svg width="43" height="48" viewBox="0 0 43 48" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M34.7813 23.511C34.3922 16.0672 28.1989 10.3066 21.0368 10.7234C13.5877 11.1589 7.88815 17.2027 8.22089 24.3125C8.56973 31.7591 14.7067 37.5276 21.9063 37.1696C29.3796 36.7955 35.1516 30.6689 34.7813 23.511Z" fill="white"/>
<path d="M2.05888 18.32C3.11726 19.0609 4.23873 19.7082 5.41045 20.2545C5.70831 20.3961 6.48382 20.1449 6.65556 19.8483C8.01604 17.6601 9.3014 15.4211 10.5626 13.1687C10.7156 12.9015 10.7182 12.2202 10.5626 12.124C8.78082 11.0552 7.14662 9.65248 5.27897 9.52423C2.8639 9.50019 0.939896 10.8869 0.260994 12.8908C-0.0754418 13.8671 -0.0818378 14.9262 0.242782 15.9065C0.567402 16.8868 1.20521 17.7344 2.05888 18.32Z" fill="white"/>
<path d="M40.6849 29.3594C39.7538 28.7529 38.7395 28.2693 37.7976 27.6788C37.1026 27.2433 36.6652 27.4117 36.2761 28.0769C35.0149 30.275 33.7403 32.4659 32.4522 34.6497C32.0846 35.275 32.1597 35.7185 32.8172 36.0712C33.8744 36.6483 34.878 37.3296 35.9648 37.8426C39.2815 39.411 43.0222 37.0758 43.0007 33.2016C42.9524 31.708 42.1635 30.324 40.6849 29.3594Z" fill="white"/>
<path d="M6.6701 28.0437C6.48495 27.7445 5.72286 27.488 5.425 27.6269C4.25308 28.174 3.13004 28.8193 2.06806 29.556C1.21354 30.1406 0.573664 30.9866 0.245368 31.9658C-0.0829285 32.945 -0.0817559 34.0041 0.248708 34.9826C0.91151 36.9811 2.81941 38.3598 5.3284 38.3518C7.15312 38.2717 8.77121 36.8289 10.5557 35.7761C10.7194 35.6799 10.7221 35.0066 10.5557 34.7288C9.31058 32.4764 8.02791 30.2347 6.6701 28.0437Z" fill="white"/>
<path d="M36.2561 19.7913C36.5808 20.3524 36.9484 20.7105 37.6488 20.2856C38.7221 19.639 39.8438 19.0886 40.8689 18.3859C42.2857 17.4214 42.9941 16.0267 42.9941 14.827C42.9565 10.7337 39.1407 8.46261 35.8562 10.0791C34.8178 10.5894 33.8491 11.2387 32.8347 11.7998C32.1961 12.1498 32.0592 12.5746 32.4376 13.2159C33.7229 15.3988 34.9868 17.5977 36.2561 19.7913Z" fill="white"/>
<path d="M17.8215 9.14433C19.0264 9.12296 20.2366 9.14433 21.4414 9.14433C22.6919 9.14433 23.9424 9.12563 25.1982 9.14433C26.03 9.16037 26.4379 8.84509 26.403 7.96871C26.3574 6.81179 26.4272 5.6522 26.3547 4.49528C26.2681 3.27471 25.7201 2.1322 24.821 1.29801C23.922 0.463833 22.7387 0 21.5098 0C20.2809 0 19.0977 0.463833 18.1987 1.29801C17.2996 2.1322 16.7516 3.27471 16.6649 4.49528C16.5925 5.64953 16.665 6.80912 16.614 7.96871C16.5737 8.85577 16.995 9.16037 17.8215 9.14433Z" fill="white"/>
<path d="M25.1852 38.7456C23.9803 38.7697 22.7701 38.7456 21.5653 38.7456V38.7296C20.3148 38.7296 19.0643 38.7483 17.8085 38.7296C16.9739 38.7135 16.5688 39.0342 16.6036 39.9105C16.6493 41.0648 16.5822 42.2271 16.6546 43.384C16.7412 44.6045 17.2893 45.7471 18.1883 46.5812C19.0874 47.4154 20.2706 47.8793 21.4995 47.8793C22.7284 47.8793 23.9116 47.4154 24.8107 46.5812C25.7097 45.7471 26.2578 44.6045 26.3444 43.384C26.4169 42.2297 26.3444 41.0701 26.3927 39.9105C26.433 39.0288 26.0117 38.7269 25.1852 38.7456Z" fill="white"/>
</svg>

} 
color={"bg-gradient-to-t from-[#40789D] to-[#7EB3D6]"}
    title={"Sitting y mesas"} content={"Distribuye a tus invitados y comparte esta información con otros proveedores."} />
  </div>
</div>

</section>

  );
};

export default Mesas1;