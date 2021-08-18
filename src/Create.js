import React, { Component } from 'react';
import {  createNewCow, getBreeds} from './utils/fetch-utils';
import classNames from 'classnames';

class Create extends Component {
    state = { 
        sex:'',
        number_horns:0,
        milk: '',
        breed:'Pick One',
        breeds:[],
        message: '',
        error: false
     };


     componentDidMount = async () => {
         const breeds = await getBreeds();
         this.setState({ breeds });
     }

//GET COWS OBJECT TO RETURN ID OF 'COW BEIN UPDATED'
     getBreedId = () =>{
         const breedObject = this.state.breeds.find(
             (cow) => cow.breed_type === this.state.breed
         );
         return breedObject.id;
     };

     handleClick = async (event) => {
        event.preventDefault();
        const newCowData = {
            sex: this.state.sex,
            number_horns: this.state.number_horns,
            milk: this.state.milk,                                 //CHECK THIS MAY CAUSE SOME ISSUES!!!!!
            breed_id: this.getBreedId()
        };
        console.log(newCowData);
        const data = await createNewCow(newCowData);
        if (data.error){
            this.setState({message: data.error, error: true});
        } else {
            this.props.history.push('/');
        }

     };

    render() { 
        return ( 
            <>
                { this.state.message && (
                    <div
                        className={classNames ({
                            message:true,
                            error: this.state.error,
                            success: !this.state.error,
                        })}
                        >
                            {this.state.message}
                    </div>
                )

                }
                <p>Cow's Breed - {this.state.breed}</p>
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
                            type="number"
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
                        <label>Breed: </label>

                        <select
                        value = {this.state.breed}
                        onChange={(e) => {
                            this.setState({breed: e.target.value})
                        }}
                        >

                            {this.state.breeds.map((bred) => {
                                return(
                                    <option key={bred.id} value={bred.breed_type}>{bred.breed_type}</option>
                                );
                            })}     
                        </select>
                    </div>
                            <button onClick={this.handleClick}>Update Cow's Info</button>
                </form>

            </>
         );
    }
}

export default Create;