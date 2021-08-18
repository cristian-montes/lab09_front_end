import React, { Component } from 'react';
import { getACow, getBreeds,updateCow } from '../utils/fetch-utils';

class CowsDetails extends Component {
    state = { 
        id:0,
        sex:'',
        number_horns:0,
        milk: '',
        breed:'',
        breeds:[],
        message: '',
        error: false
     };


     componentDidMount = async () => {
         const cowsId = this.props.match.params.id;
         const aCowData = await getACow(cowsId);
         const breeds = await getBreeds();
         
         this.setState({...aCowData, breeds});
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
        const updatedCowData = {
            id: this.state.id,
            sex: this.state.sex,
            number_horns: this.state.number_horns,
            milk: this.state.milk,                                 //CHECK THIS MAY CAUSE SOME ISSUES!!!!!
            breed_id: this.getBreedId()
        };
        
        const data = await updateCow(updatedCowData);
        if (data.error){
            this.setState({message: data.error, error: true});
        } else {
            this.setState({ message: 'Cow has been updated', error: false});
            setTimeout(()=>{
                this.setState({message: ''});
            }, 3000)
        }

     };

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
 
export default CowsDetails ;