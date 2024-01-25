import './List.css';

const List = (props) => {
   setInterval(()=>{
      const ul = document.getElementsByClassName(props.class)[0]
      ul.innerHTML = ' '
      const items = props.items.split(',')
      items.forEach(item => {
         const li = document.createElement('li')
         li.textContent = item
         ul.append(li)
      });
   },1)
   return(
      <>
         <h3>{props.name}</h3>
         <ul id={props.idColor} className={props.class}></ul>
      </>
   )
}

export default List