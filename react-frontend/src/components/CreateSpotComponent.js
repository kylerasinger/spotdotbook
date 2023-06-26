//functional component
import React, { useState, useEffect } from 'react';
import SpotService from '../services/SpotService';
import {useParams, useNavigate} from 'react-router-dom';

const CreateSpotComponent = () => {
    const { id } = useParams();
    const navigate = useNavigate();

    const [missingInformation, setMissingInformation] = useState(false);

    const [spot, setSpot] = useState({
        id: '',
        latitude: '',
        longitude: '',
        date: '',
        formatted_address: '',
        name: '',
        place_id: '',
        type: ''
    });

    //equivalent to componentDidMount()
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

        //i wrote this to check for invalid/empty fields. It checks the spot object and not the fields though, so itll never let the
        //user submit their form
        // const {id, latitude, longitude, date, formatted_address, name, place_id, type} = spot;

        // if(id==='' || latitude==='' || longitude==='' || date==='' || formatted_address==='' || name==='' || place_id==='' || type===''){
        //     setMissingInformation(true);
        //     console.log("Insert information into all fields.");
        //     return;
        // }else{setMissingInformation(false);}

        if (id === '_add') {
            SpotService.createSpot(spot).then((res) => {
                navigate('/spots');
            });
        } else {
            SpotService.updateSpot(spot, id).then((res) => {
                navigate('/spots');
            });
        }
    };

    const handleInputChange = (event) => {
        const { name, value } = event.target;
        setSpot({ ...spot, [name]: value });
    };

    const cancel = () => {
        navigate('/spots');
    };

    const getTitle = () => {
        if (id === '_add') {
            return <h3 style={{marginTop: "10px"}}className="text-center">Add Spot</h3>;
        } else {
            return <h3 className="text-center">Update Spot</h3>;
        }
    };
    
    const getMessage = () => {
        if(!missingInformation){
            return null;
        }else{
            return <h5 className ="text-center">Please enter all info</h5>
        }
    }

    return (
        <div>
            <br></br>
            <div className="container">
                <div className="row">
                    <div className="card col-md-6 offset-md-3 offset-md-3">
                        {getTitle()}
                        {getMessage()}
                        <div className="card-body">
                            <form>
                                {/* <div className="form-group">
                                    <label> Identification: </label>
                                    <input
                                        placeholder="Id"
                                        name="id"
                                        className="form-control"
                                        value={spot.id}
                                        onChange={handleInputChange}
                                    />
                                </div> */}

                                <div className="form-group">
                                    <label> Latitude: </label>
                                    <input
                                        placeholder="Latitude"
                                        name="latitude"
                                        className="form-control"
                                        value={spot.latitude}
                                        onChange={handleInputChange}
                                    />
                                </div>

                                <div className="form-group">
                                    <label> Longitude: </label>
                                    <input
                                        placeholder="Longitude"
                                        name="longitude"
                                        className="form-control"
                                        value={spot.longitude}
                                        onChange={handleInputChange}
                                    />
                                </div>

                                <div className="form-group">
                                    <label> Date (YYYY-MM-DD): </label>
                                    <input
                                        placeholder="Date"
                                        name="date"
                                        className="form-control"
                                        value={spot.date}
                                        onChange={handleInputChange}
                                    />
                                </div>

                                <div className="form-group">
                                    <label> Formatted Address (maps api): </label>
                                    <input
                                        placeholder="Formatted Address"
                                        name="formatted_address"
                                        className="form-control"
                                        value={spot.formatted_address}
                                        onChange={handleInputChange}
                                    />
                                </div>
                                
                                <div className="form-group">
                                    <label> Name: </label>
                                    <input
                                        placeholder="Name"
                                        name="name"
                                        className="form-control"
                                        value={spot.name}
                                        onChange={handleInputChange}
                                    />
                                </div>

                                <div className="form-group">
                                    <label> Place Id (maps api): </label>
                                    <input
                                        placeholder="Place Id"
                                        name="place_id"
                                        className="form-control"
                                        value={spot.place_id}
                                        onChange={handleInputChange}
                                    />
                                </div>
                                
                                <div className="form-group">
                                    <label> Type: </label>
                                    <input
                                        placeholder="Type"
                                        name="type"
                                        className="form-control"
                                        value={spot.type}
                                        onChange={handleInputChange}
                                    />
                                </div>

                                <div style={{marginTop: "10px"}}> 
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
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CreateSpotComponent;