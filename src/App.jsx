
import HeroSection from './components/HeroSection'; 
import ThreeDashboards from './components/ThreeDashboards';
import FeatureGrid from './components/FeatureGrid';
import StatsSection from './components/StatsSection';

const App = () => {
  return (
   
    <div className="app-container">
    
      <HeroSection />
      <ThreeDashboards/>
      <FeatureGrid/>
      <StatsSection/>
     
    </div>
  )
}

export default App