import {FaCheck, FaTimes} from 'react-icons/fa';
import "../src/App.css";

function App() {
  return (
    <>
<section class="container">
<h2>Choose your premium plan</h2>

<div class="pricing_table">
    <ul>
      <li>       <br/>     </li>
      <li>Premium Content</li>
      <li>Music</li>
      <li>BeforeTV, Live TV</li>
      <li>Ad-free</li>
      <li>Device</li>
    </ul>

    <ul className='allChild'>
      <li>Mobile</li>
      <li>{<FaCheck/>}</li>
      <li>{<FaCheck/>}</li>
      <li>{<FaCheck/>}</li>
      <li>{<FaCheck/>}</li>
      <li>{<FaTimes/>}</li>

    </ul>
    
    <ul className='allChild'>
      <li>Premium HD</li>
      <li>{<FaCheck/>}</li>
      <li>{<FaCheck/>}</li>
      <li>{<FaCheck/>}</li>
      <li>{<FaCheck/>}</li>
      <li>{<FaCheck/>}</li>
    </ul>
    
    <ul className='allChild'>
      <li>Premium 4k</li>
      <li>{<FaCheck/>}</li>
      <li>{<FaCheck/>}</li>
      <li>{<FaCheck/>}</li>
      <li>{<FaCheck/>}</li>
      <li>{<FaCheck/>}</li>
    </ul>
</div>


  
</section>

<section class="halfwidth aligncenter">
  </section>




{/*           
          <div class="pricing-container">
      <table class="table table-hover">
      <thead>
        <th></th>
        <th>Mobile</th>
        <th>Premium HD</th>
        <th>Premium 4k</th>
      </thead>
        <tbody>
          <tr>
            <td>Premium Content</td>
            <td>{<FaCheck/>}</td>
            <td>{<FaCheck/>}</td>
            <td>{<FaCheck/>}</td>
          </tr>
          <tr>
            <td>Music</td>
            <td>{<FaCheck/>}</td>
            <td>{<FaCheck/>}</td>
            <td>{<FaCheck/>}</td>
          </tr>
          <tr>
            <td>BeforeTV, Live TV</td>
            <td>{<FaCheck/>}</td>
            <td>{<FaCheck/>}</td>
            <td>{<FaCheck/>}</td>
          </tr>
          <tr>
            <td>Ad-free</td>
            <td>{<FaCheck/>}</td>
            <td>{<FaCheck/>}</td>
            <td>{<FaCheck/>}</td>
          </tr>
          <tr>
            <td>Device</td>
            <td><FaTimes/></td>
            <td>{<FaCheck/>}</td>
            <td>{<FaCheck/>}</td>
          </tr>
        </tbody>
    </table>
    </div> */}
    </>
    );
}

export default App;











































// import './App.css';
// import PricingCard from './components/PricingCard';
// import TickMarks from './components/TickMarks/TickMarks';
// function App() {
//   return (
//     <div className="PricingApp">
//       <h1>Choose your premium plan</h1>
//       <div className="app-container">
//         <div className='optionsName'>
//           <PricingCard name="" subName=""/>
//           <PricingCard name="Premium Content" subName="Movies, Web Series, TV shows, Downloads"/>
//           <PricingCard name="Music" subName="Unlimited Downloads"/>
//           <PricingCard name="BeforeTV, Live TV" subName=""/>
//           <PricingCard name="Ad-free" subName=""/>
//           <PricingCard name="Device" subName=""/>
//         </div>

//         <div className='tickMark'>
//           <TickMarks name="Mobile" check1={true} check2={true} check3={true} check4={true} check5={false}/>
//           <TickMarks name="Premium HD" check1={true} check2={true} check3={true} check4={true} check5={true}/>
//           <TickMarks name="Premium 4k" check1={true} check2={true} check3={true} check4={true} check5={true}/>
//         </div>
//       </div>

//       {/* <div className="pricing-cards">

//       </div> */}
//     </div>
//   );
// }

// export default App;
