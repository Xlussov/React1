import './Main.css';
import cat from '../../img/CAT.jpg'
import List from '../List/List.jsx'
import ProjecInfo from '../ProjectInfo/ProjectInfo.jsx';
const Main = () => {
   return(
      <>
         <div className='Wraper'>
            <aside>
               <img src={cat} alt="cat" />
               <div className='contents'>
                  <div>
                     <h4>contacts</h4>
                     <p>C: +38 (099) 55 36 140</p>
                     <p>E: xlussov.gmail.com</p>
                  </div>
                  <div className='lists'>
                     <List idColor='default' class='ul1' name='Tech Skills' items="HTML5, CSS3, JS, SASS / SCSS, Gulp, React, Vite" />
                     <List idColor='default' class='ull2' name='Soft Skils' items='Scrum, Teamwork, GTD'/>
                  </div>
               </div>
            </aside>
            <section>
               <p>Quality assurance  07.24.2023</p>
               <h1>Danil Hlusov</h1>
               <p>Gradueted from IT step Academy im July 2024 <br />Spetions - Frontend developer</p>
               <List idColor='dect' class='ListProjects' name='Projects' items='https://github.com/San88Francisco/ShoppeStore, https://github.com/Xlussov/miner, https://github.com/Xlussov/clicer-game'/>
               <ProjecInfo name='Front end dev Project1' date='20.05.23 to 20.05.24'/>
               <ProjecInfo name='Front end dev Project2' date='20.05.22 to 20.05.23'/>
               <ProjecInfo name='Front end' date='20.05.20 to 20.05.21'/>
               <h4>Education</h4>
               <h5>IT STEP</h5>
               <p>Fron end dev</p>
               <p>July 4</p>
            </section>
         </div>
      </>
   )
}

export default Main