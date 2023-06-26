//functional component
import React, { useState, useEffect } from 'react';
import SpotService from '../services/SpotService';
import {useParams, useNavigate} from 'react-router-dom';

const CreateSpotComponent = () => {
    const { id } = useParams();
    const history = useNavigate();

    const [spot, setSpot] = useState({
        id: id,
        latitude: '',
        longitude: '',
        date: '',
        formatted_address: '',
        name: '',
        place_id: '',
        type: ''
    });

    useEffect(() => {
        if (id === '_add') {
            return;
        } else {
            SpotService.getSpotById(id).then((res) => {
                setSpot(res.data);
            });
        }
    }, [id]);

    const saveOrUpdateSpot = (e) => {
        e.preventDefault();

        if (id === '_add') {
            SpotService.createSpot(spot).then((res) => {
                history.push('/spots');
            });
        } else {
            SpotService.updateSpot(spot, id).then((res) => {
                history.push('/spots');
            });
        }
    };

    const handleInputChange = (event) => {
        const { name, value } = event.target;
        setSpot({ ...spot, [name]: value });
    };

    const cancel = () => {
        history.push('/spots');
    };

    const getTitle = () => {
        if (id === '_add') {
            return <h3 className="text-center">Add Spot</h3>;
        } else {
            return <h3 className="text-center">Update Spot</h3>;
        }
    };

    return (
        <div>
            <br></br>
            <div className="container">
                <div className="row">
                    <div className="card col-md-6 offset-md-3 offset-md-3">
                        {getTitle()}
                        <div className="card-body">
                            <form>
                                <div className="form-group">
                                    <label> Identification: </label>
                                    <input
                                        placeholder="Id"
                                        name="id"
                                        className="form-control"
                                        value={spot.id}
                                        onChange={handleInputChange}
                                    />
                                </div>

                                {/* Add other input fields as necessary */}

                                <button className="btn btn-success" onClick={saveOrUpdateSpot}>
                                    Save
                                </button>
                                <button
                                    className="btn btn-danger"
                                    onClick={cancel}
                                    style={{ marginLeft: '10px' }}
                                >
                                    Cancel
                                </button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CreateSpotComponent;


//class component
// import React, { Component } from 'react'
// import SpotService from '../services/SpotService'

// class CreateSpotComponent extends Component {
//     constructor(props) {
//         super(props)

//         this.state = {
//             id: this.props.match.params.id,
//             latitude: '',
//             longitude: '',
//             date: '',
//             formatted_address: '',//might be formmatedAddress
//             name: '',
//             place_id: '',
//             type: ''
//         }

//         this.changeIdHandler = this.changeIdHandler.bind(this);
//         this.changeLatitudeHandler = this.changeLatitudeHandler.bind(this);
//         this.changeLongitudeHandler = this.changeLongitudeHandler.bind(this);
//         this.changeDateHandler = this.changeDateHandler.bind(this);
//         this.changeAddressHandler = this.changeAddressHandler.bind(this);
//         this.changeNameHandler = this.changeAddressHandler.bind(this);
//         this.changePlaceId = this.changePlaceId.bind(this);
//         this.changeTypeHandler = this.changeTypeHandler.bind(this);
//     }

//     componentDidMount(){

//         if(this.state.id === '_add'){
//             return;
//         }else{
//             SpotService.getSpotById(this.state.id).then( (res)=>{
//                 let spot = res.data;
//                 this.setState({
//                     id: spot.id, 
//                     latitude: spot.latitude,
//                     longitude: spot.longitude,
//                     date: spot.date,
//                     formatted_address: spot.formatted_address,//might be formmatedAddress
//                     name: spot.name,
//                     place_id: spot.place_id,
//                     type: spot.type
//                 });
//             });
//         }
//     }

//     saveOrUpdateSpot = (e) => {
//         e.preventDefault();

//         let spot = {id: this.state.id, 
//                     latitude: this.state.latitude,
//                     longitude: this.state.longitude,
//                     date: this.state.date,
//                     formatted_address: this.state.formatted_address,//might be formmatedAddress
//                     name: this.state.name,
//                     place_id: this.state.place_id,
//                     type: this.state.type}
//         console.log('employee => ' + JSON.stringify(spot));

//         if(this.state.id === '_add'){
//             SpotService.createSpot(spot).then(res =>{
//                 this.props.history.push('/spots');
//             });
//         }else{
//             SpotService.updateSpot(spot, this.state.id).then( res => {
//                 this.props.history.push('/spots');
//             });
//         }
//     }

//     changeIdHandler= (event) => {
//         this.setState({id: event.target.value});
//     }

//     changeLatitudeHandler= (event) => {
//         this.setState({latitude: event.target.value});
//     }
    
//     changeLongitudeHandler= (event) => {
//         this.setState({longitude: event.target.value});
//     }
    
//     changeDateHandler= (event) => {
//         this.setState({date: event.target.value});
//     }
    
//     changeAddressHandler= (event) => {
//         this.setState({formatted_address: event.target.value});
//     }
    
//     changeNameHandler= (event) => {
//         this.setState({name: event.target.value});
//     }
    
//     changePlaceId= (event) => {
//         this.setState({place_id: event.target.value});
//     }
    
//     changeTypeHandler= (event) => {
//         this.setState({type: event.target.value});
//     }
    
//     cancel(){
//         this.props.history.push('/spots');
//     }

//     getTitle(){
//         if(this.state.id === '_add'){
//             return <h3 className="text-center">Add Spot</h3>
//         }else{
//             return <h3 className='text-center'>Update Spot</h3>
//         }
//     }

//     render() {
//         return (
//             <div>
//                 <br></br>
//                    <div className = "container">
//                         <div className = "row">
//                             <div className = "card col-md-6 offset-md-3 offset-md-3">
//                                 {
//                                     this.getTitle()
//                                 }
//                                 <div className = "card-body">
//                                     <form>
//                                         <div className = "form-group">
//                                             <label> Identification: </label>
//                                             <input placeholder="Id" name="Id" className="form-control" 
//                                                 value={this.state.id} onChange={this.changeIdHandler}/>
//                                         </div>
                                        
//                                         <button className="btn btn-success" onClick={this.saveOrUpdateSpot}>Save</button>
//                                         <button className="btn btn-danger" onClick={this.cancel.bind(this)} style={{marginLeft: "10px"}}>Cancel</button>
//                                     </form>
//                                 </div>
//                             </div>
//                         </div>

//                    </div>
//             </div>
//         )
//     }
// }


// export default CreateSpotComponent;