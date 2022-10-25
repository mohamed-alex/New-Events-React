import Overview from './design-system/components/Overview'

function App() {
  return (
    <div className="App" style={{display:'flex'}}>
    

      <Overview 
        
        icon='fa fa-user'
        title='Mohamed'  
        description='Content 1:lorem epsum lorem epsum lorem epsum lorem
                      epsum lorem epsum lorem epsum lorem epsum' />

     <Overview 
     icon='fa fa-heart'
        title='Lina' 
        description='Content 2:lorem epsum lorem epsum lorem epsum lorem
                    epsum lorem epsum lorem epsum lorem epsum' />

     <Overview 
     icon='fa fa-home'
        title='Bodda' 
        description='Content 3:lorem epsum lorem epsum lorem epsum lorem
               epsum lorem epsum lorem epsum lorem epsum' />
    </div>
  );
}

export default App;
