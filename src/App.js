/* esLint-disable*/
import React,{useState} from 'react';
import './App.css';



function App() {

  let posts ={color:'blue',fontSize:'30px'};
  let [따봉,따봉변경]= useState(0,0,0);
  
  
  let [글제목,글제목변경]= useState(['수연이의 개발일기','빡시게코딩하자','자만하지말자']);
  let [modal,modal변경] =useState(false);
  let [누른제목,누른제목변경] =useState(0);
 let [입력값,입력값변경] = useState('')

 let [zero, setZero] = useState([0,0,0]); 
  function 반복된UI(){
    var 어레이 = [];
    for(var i =0;i<3;i++){
      어레이.push(<div>안녕</div>)
    }
    return 어레이
  } 
 
   
  function 제목바꾸기(){
    let newArray = [...글제목];
    newArray[0]='수연이의리액트';
    글제목변경(newArray);
  }
 
  return (
    <div className="App">
      <div className='black-nav'>
        <div style={posts}>개발 blog</div>
      </div>
      <button onClick={제목바꾸기}>버튼</button>
     
       {
        글제목.map(function(글,i){
          return (
          <div className='list' key={i}>
         <h4 onClick={()=>{누른제목변경(i)}}>{글} <span onClick={()=>{
            let best = [...zero];
            best[i]++;
            setZero(best)
         }}>👍</span>{zero[i]}</h4>
           <p>2022-04-01 함수스타트!</p>
           
           </div>)
           
        })

        
       }
        
        <input onChange={(e)=>{입력값변경( e.target.value) }}></input>
{/*           
         <div className='publish'>
           <input onChange={(e)=>{입력값변경(e.target.value)}}/>
           <button onClick={function(){
             let 어레이 =[...글제목];
             어레이[0] = 입력값
             어레이.push(어레이[0])
             글제목변경(어레이)
           }}>저장</button>
         </div> */}


        <div className='publish'>
           <input onChange={(e)=>{입력값변경(e.target.value)}}/>
           <button onClick={function(){
             var zeroCopy = [...zero]; zeroCopy.unshift(0); setZero(zeroCopy);
             let arrayCopy = [...글제목]
             arrayCopy.unshift(입력값);
            글제목변경(arrayCopy);
           }}>저장</button>
         </div>

      <button onClick={()=>{modal변경(true)}}>열고닫기</button>
       
        

          


       {modal ? <Modal 누른제목={누른제목} 글제목={글제목}></Modal>:null}
      
    
      
   
     
     
    </div>
  );


}


function Modal(props){
  return(
    <>
    <div className='modal'>
    <h2>제목{props.글제목[props.누른제목]}</h2>
    <p>날짜</p>
    <p>상세내용</p>

  </div>
  </>
  )
}
export default App;
