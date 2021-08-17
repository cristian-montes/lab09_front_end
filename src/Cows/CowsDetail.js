import React, { Component } from 'react';
import { getACow, getBreeds } from '../utils/fetch-utils';

class CowsDetails extends Component {
    state = { 
        id:0,
        sex:'',
        number_horns:0,
        milk: '',
        breeds:[]
     };


     componentDidMount = async () => {
         const cowsId = this.props.match.params.id;
        //  console.log(cowsId);
         const aCowData = await getACow(cowsId);
        //  console.log([aCowData]);
         const breeds = await getBreeds();
         
         this.setState({...aCowData, breeds});
     }


    render() { 
        return ( 
            <>
                <p>Cow's Name is Numero-{this.state.id}</p>
                <form id='update-cow'>
                     
                    <div className='form-cow'>
                        <label>Sex:</label>
                        <input
                            onChange={(event) => {
                                this.setState({sex: event.target.value})
                            }}
                            type="text"
                            value={this.state.sex}
                        ></input>
                    </div>

                    <div className='form-cow'>
                        <label>Number of Horns:</label>
                        <input
                            onChange={(event) => {
                                this.setState({number_horns: event.target.value})
                            }}
                            type="text"
                            value={this.state.number_horns}
                        ></input>
                    </div>

                    <div className='form-cow'>
                        <label>Chocolate Milk:</label>
                        <input
                            onChange={(event) => {
                                this.setState({milk: event.target.value})
                            }}
                            type="text"
                            value={this.state.milk}
                        ></input>
                    </div>

                    <div className='form-cow'>
                        <label>Breed:</label>
                        <select>
                            {this.state.breeds.map((bred) => {
                                return(
                                    <option value={bred.breed_type}>{bred.breed_type}</option>
                                );
                            })}
                        </select>
                    </div>

                </form>

            </>
         );
    }
}
 
export default CowsDetails ;