import { Fragment } from 'react';
import { Outlet } from 'react-router-dom';
const HomeBase: React.FC = () => {
    return (
        <Fragment> 
            <div className="home-container">
                <Outlet />  
            </div>
        </Fragment>
    );
}

export default HomeBase;
