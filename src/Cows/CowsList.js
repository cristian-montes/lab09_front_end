import React, { Component } from 'react';
import { getCows} from '../utils/fetch-utils';
import { Link} from 'react-router-dom';
import './CowsList.css';

class CowsList extends Component {
    state = {cowss:[] }

componentDidMount = async () => {
    const data = await getCows();
    this.setState({cowss: data})
};


    render() { 
        return (
           <div className='cows-list'>
               {this.state.cowss.map((cow) => (
                   <div className='cow-info'>
                        <h2>
                            <Link to={`/cows/${cow.id}`}>{cow.sex}</Link>
                        </h2>
                        
                        <p>
                       Cow Number: {cow.id}
                        </p>
                   </div>
               ))}

           </div>
         );
    }
}
 
export default CowsList;