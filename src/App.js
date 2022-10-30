import React from 'react'
import { render } from '@testing-library/react'
import Overview from './design-system/components/Overview'
import CreativeSpeaker from './design-system/components/creativeSpeaker'
import img1 from './shared/assest/speakers/1.jpg'
import img2 from './shared/assest/speakers/2.jpg'
import img3 from './shared/assest/speakers/3.jpg'
import img4 from './shared/assest/speakers/4.jpg'
import img5 from './shared/assest/speakers/5.jpg'
 

class App extends React.Component {
     state = {
    overviweData:[
      {id:1, icon:'fa fa-user', title:'Mohamed',description:'Content 1:lorem epsum lorem epsum lorem epsum lorem epsum lorem epsum lorem epsum lorem epsum'},
      {id:2, icon:'fa fa-heart', title:'Gamal',description:'Content 2:lorem epsum lorem epsum lorem epsum lorem epsum lorem epsum lorem epsum lorem epsum'},
      {id:3, icon:'fa fa-home', title:'Nelly',description:'Content 3:lorem epsum lorem epsum lorem epsum lorem epsum lorem epsum lorem epsum lorem epsum'},
      ],
      speakerData:[
        {id:1, src:img1, name:'Mohamed',job:'Manger', alt:'emp1'},
        {id:2, src:img2, name:'Ali',job:'COO', alt:'emp2'},
        {id:3, src:img3, name:'Aya',job:'Developer', alt:'emp3'},
        {id:4, src:img4, name:'Salma',job:'UI/UX Developer', alt:'emp4'},
        {id:5, src:img5, name:'Mostafa',job:'Developer', alt:'emp5'},
        ]
    }

  render(){
    const itemListOverview = this.state.overviweData.map(item =>{
      return(
      
        <Overview 
            key={item.id}
            icon={item.icon}
            title={item.title}
            description={item.description} />
            
            )
    })

    const itemListSpeaker = this.state.speakerData.map(item =>{
      return(
      
        <CreativeSpeaker 
            key={item.id}
            src={item.src}
            alt={item.alt}
            name={item.name}
            job={item.job} />
            
            )
    })
    return (
      <div className="App">

        <div style={{display :'flex'}}>
          {itemListOverview}
        </div>

        <div style={{display :'flex',gap:'5px'}}>
          {itemListSpeaker}
        </div>

      </div>
    );
  }
}

export default App;
