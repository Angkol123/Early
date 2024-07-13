import React from 'react'
import "../index.css";
import Card from '../components/card/page';
import Charity from '../assets/Images/team/cha.png'
import Marvs from '../assets/Images/team/jeningkol.png'
import Rov from '../assets/Images/team/rovs.png';
import Rayna from '../assets/Images/team/rayna.png';


const Team = () => {
  return (
    <>
      <div className="w-full h-[15vh] bg-team-pat bg-cover bg-bottom flex items-center justify-center sticky">
        <h1 className="text-[3rem] font-semibold">Team</h1>
      </div>
      <div className=" w-full h-[170vh] flex flex-row justify-center py-5 px-[50px] bg-hero-group1 bg-center bg-cover mt-[10vh]">

        <div className=' w-[50%] p-[25px] flex flex-col items-center gap-[25px]'>
        <Card firstName={'Raynalyn'} lastName={'Salonoy'} role1={'Project'} role2={'Manager'} img={Rayna}/>
        <Card firstName={'Ma. Charity'} lastName={'Pidere'} role1={'Project'} role2={'Manager'} img={Charity}/>
        </div>

        <div className=' w-[50%] p-[25px] flex flex-col items-center gap-[25px]'>
          
        <Card firstName={'Rovelyn'} lastName={'Paradero'} role1={'Project'} role2={'Manager'} img={Rov}/>
        <Card firstName={'Marvin'} lastName={'Tenebroso'} role1={'Project'} role2={'Manager'} img={Marvs}/>
        </div>
      </div>
    </>

  )
}

export default Team
