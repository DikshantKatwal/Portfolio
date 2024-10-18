/* eslint-disable @typescript-eslint/no-explicit-any */
import React, { createContext, useState } from 'react'
import Home from './Home';
import Details from './details/Details';
import Navigation from '../../component/Navigation';
import Skills from './Skills';
import Contact from './Contact';

interface Step {
    component: React.FC<any>;

}
const UserContext = createContext<string | null>(null);

const Pilot = () => {

    const user = "Dikshant Katwal";
    const [currentStep, setCurrentStep] = useState<number>(0);
    const [completedSteps, setCompletedSteps] = useState<number[]>([]);
    const [isExiting, setIsExiting] = useState<boolean>(false);

    const steps: Step[] = [
        {
            component: Home,
        },
        {
            component: Details,
        },
        {
            component: Skills,
        },
        {
            component: Contact,
        },
    ];
    const { component: StepComponent } = steps[currentStep];

    const handleStepChange = (stepId: number) => {
        console.log(stepId);
        toggleNav()
        
        if (currentStep === stepId) {
            return
        }
        if (!completedSteps.includes(currentStep)) {
            setCompletedSteps((prevCompletedSteps) => [...prevCompletedSteps, currentStep]);
        }
        if (completedSteps.includes(stepId)) {
            setCompletedSteps((prevCompletedSteps) =>
                prevCompletedSteps.filter((step) => step !== stepId)
            );
        }
        setIsExiting(true); // Start the exit animation
        setTimeout(() => {
            setCurrentStep(stepId);
            setIsExiting(false); // Reset exiting state after changing step
        }, 100); // 

    };
    const [isNavVisible, setIsNavVisible] = useState(false);
    const toggleNav = () => {
        setIsNavVisible(!isNavVisible);
      };


    return (
        <UserContext.Provider value={user}>
            <Navigation completedSteps={completedSteps} handleStepChange={handleStepChange} isNavVisible={isNavVisible} toggleNav={toggleNav}/>
            <div className={`main-container step-container ${isExiting? 'step-exit' :  'step-enter'}`} onClick={()=>{setIsNavVisible(false)}}>
                <StepComponent />
            </div>
        </UserContext.Provider>
    )
}

export default Pilot;
export { UserContext };