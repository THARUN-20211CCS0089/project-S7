import { Component } from 'react'
import {v4 as uuidv4} from 'uuid'

import  {HomePageTitle,HomePageSection1,HomePageSubTitle,HomePageSubTitle2,HomePageS1DataContent,HomePageS1Image,HomeContainer,HomePageSection2,HomePageS2MainTitle,HomePageS2Title,HomePageS2SubTitle,HomePageSection2DataContent,HomePageSection3,HomePageSection3MainTitle,HomePageSection3List,HomePageSection3LiItem,HomePageSection3LiTitle,HomePageSection3LiInfo,HomePageSection3LiItemLogo} from './styledComponents'
import Header from '../Header'

const initialsection3List=[
    {
        section3_item_id : uuidv4(),
        section3_item_name : "Forward-Thinking Design",
        section3_item_info:'Our platform isn’t just built for today—it’s built for tomorrow. As education evolves, so do we, constantly innovating to provide solutions for future challenges.',
        section3_item_bgcolor:'',
        section3_item_logo:'https://img.freepik.com/free-vector/innovation-concept-illustration_114360-5768.jpg?t=st=1728964115~exp=1728967715~hmac=ad2cc119acceb131d78235a29fd387b0f0eb0fe34e9a4f6e4a82d4e39d9d9214&w=1380'
    },
    {
        section3_item_id: uuidv4(),
        section3_item_name:'Collaborative Innovation',
        section3_item_info:'We work with schools, educators, and technologists to ensure our tools meet real-world needs. Your input shapes the future of our products.',
        section3_item_logo:'https://img.freepik.com/free-vector/people-starting-business-project-illustration_23-2148865272.jpg?t=st=1728964239~exp=1728967839~hmac=0b07d97fa052182340832359ce44a11fda1d88e056ef5c26a047f1d5afc4a131&w=1380',
        section3_item_bgcolor:''
    },
    {
        section3_item_id: uuidv4(),
        section3_item_name:'Trusted Across the Globe',
        section3_item_info:'Schools around the world trust us to create environments that foster learning, safety, and growth. Our community of users is our greatest inspiration, and we are proud to support their mission of educating the next generation.',
        section3_item_logo:'https://img.freepik.com/free-vector/partners-shaking-hands_74855-2504.jpg?t=st=1728964347~exp=1728967947~hmac=d5557ffa95a40fb83f98a13410d36fa22ff7a947ab17bee0769617a4ee675a4b&w=1380'
    }
]
 

class Home extends  Component{
    state={
        section3List:initialsection3List
    }
    render(){
       const {section3List} = this.state;
        return(
            <>
            <Header/>
          <HomeContainer>
          <HomePageSection1>
          <HomePageS1DataContent>
          <HomePageTitle>
          Build the Future of Safe and Productive Classrooms
          </HomePageTitle>
          <HomePageSubTitle>Enhancing Learning and Security Through Technology</HomePageSubTitle>
           <HomePageSubTitle2>We are committed to shaping a future where technology elevates <br/> educational experiences, providing tools that prioritize both learning and safety.</HomePageSubTitle2>
          </HomePageS1DataContent>
          <HomePageS1Image src='https://img.freepik.com/free-vector/students-with-computer-classroom-elements-white-background_1308-52052.jpg?t=st=1728107791~exp=1728111391~hmac=0c484eb3d714dbd6934d7450aadae8fcbb90b9069f3efc1b1b476f2bd4163e76&w=1380'/>
          </HomePageSection1>
          <HomePageSection2>
          <HomePageS2MainTitle>A New Era of Education Awaits</HomePageS2MainTitle>
          <HomePageSection2DataContent>
          <HomePageS2Title>Shaping the Future, One Classroom at a Time</HomePageS2Title>
              <HomePageS2SubTitle>Our platform is more than a tool; it’s a bridge to a brighter, more inclusive educational future. By empowering educators and protecting students, we are creating a world where every child has the opportunity to thrive—whether in the classroom or online.</HomePageS2SubTitle>

          </HomePageSection2DataContent>
          </HomePageSection2>
          <HomePageSection3>
            <HomePageSection3MainTitle>Why We're Different</HomePageSection3MainTitle>
            <HomePageSection3List>
                {section3List.map((eachItem)=>(
                    <HomePageSection3LiItem key={eachItem.section3_item_id} bgcolor={eachItem.section3_item_bgcolor}>
                        <HomePageSection3LiItemLogo src={eachItem.section3_item_logo} alt='item-image'/>
                        <HomePageSection3LiTitle>{eachItem.section3_item_name}</HomePageSection3LiTitle>
                        <HomePageSection3LiInfo>{eachItem.section3_item_info}</HomePageSection3LiInfo>
                    </HomePageSection3LiItem>
                ))}
            </HomePageSection3List>
          </HomePageSection3>
          </HomeContainer>
         
          
          </>
        )
    }
}
 

export default Home