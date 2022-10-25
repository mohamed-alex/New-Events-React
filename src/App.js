import Overview from './design-system/components/Overview'

function App() {
  return (
    <div className="App">
      Mohamed

      <Overview 
        
        icon='fa fa-user'
        title='Mohamed'  
        description='Content 1:lorem epsum lorem epsum lorem epsum lorem
                      epsum lorem epsum lorem epsum lorem epsum' />

     <Overview 
     icon='fa fa-heart'
        title='Ahmed' 
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
