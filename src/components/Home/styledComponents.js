 

import styled from "styled-components";

export const HomePageTitle=styled.h1`
  
   font-family: 'Lora', serif;
  font-size:25px;
  font-weight:700;
  font-style:normal;
  color:#f7df05;
 

`

export const HomePageS1DataContent=styled.div`
  display:flex;
  flex-direction:column;
  align-items:flex-start;
  background-color:#182b47;
  padding:10px;
  border-radius:10px;
 
`

export const HomePageSection1=styled.div`
  display:flex;
  flex-direction:row;
  justify-content:space-around;
  align-items:center;
  height:80vh;
`

export const HomePageSubTitle=styled.p`
   color:#fff;
`

export const HomePageSubTitle2=styled.p`
 color:#fff;
 line-height:30px;
`

export const HomePageS1Image=styled.img`
  height:300px;
`

export const HomeContainer=styled.div`
  height:100vh;
`

export const HomePageSection2=styled.div`
  display:flex;
  flex-direction:column;
  justify-content:center;
  align-items:center;
  
`

export const HomePageS2MainTitle=styled.h1`
  font-family: "Lora", serif;
   
  font-weight: 500;
  
  text-align:center;
`

export const HomePageS2Title=styled.h1`
  font-family:'Roboto';
  font-size:20px;
`

export const HomePageS2SubTitle=styled.p`
  font-family:'Roboto';
  font-size:15px;
  line-height:25px;
`

export const HomePageSection2DataContent=styled.div`
  background-color:#fad4db;
  width:80%;
  padding:20px;
  border-radius:20px;
`

export const HomePageSection3=styled.div`
   padding-top:40px;
   height:100vh;
`

export const HomePageSection3MainTitle=styled.h1`
   font-family: "Playwrite GB S", cursive;
   padding-left:100px;
   font-weight:400;
   font-size:27px;
`

export const HomePageSection3List=styled.ul`
  list-style-type:none;
  display:flex;
  flex-direction:row;
  justify-content:space-around;
  padding-top:40px;
`

export const HomePageSection3LiItem=styled.li`
  background-color: ${(props) => props.bgcolor};
  padding:10px;
   
  
  width:200px;
  box-shadow: rgba(0, 0, 0, 0.16) 0px 1px 4px;
  padding:15px;
  border-radius:10px;
  
`

export const HomePageSection3LiTitle=styled.h1`
  font-family:'Roboto';
  font-size:17px;
`

export const HomePageSection3LiInfo=styled.p`
  ont-family:'Roboto';
  font-size:14px;
  color:#8f8d8d;
  line-height:20px;
  overflow-y:scroll;
  height:100px;
`

export const HomePageSection3LiItemLogo=styled.img`
  height:150px;
`