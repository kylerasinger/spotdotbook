import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import SpotService from '../services/SpotService';

const ListSpotComponent = () => {
    const [spots, setSpots] = useState([]);
    const navigate = useNavigate();

    //equivalent to componentDidMount() =>...
    useEffect(() => {
        SpotService.getSpots().then((res) => {
            setSpots(res.data);
        });
    }, []);

    const deleteSpot = (id) => {
        SpotService.deleteSpot(id).then(() => {
            setSpots(prevSpots => prevSpots.filter(spot => spot.id !== id));
        });
    };
    

    const viewSpot = (id) => {
        navigate(`/view-spot/${id}`);
    };

    const editSpot = (id) => {
        navigate(`/add-spot/${id}`);
    };

    const addSpot = () => {
        navigate('/add-spot/_add');
    };

    // Render logic stays the same as in the class component
    return (
        <div>
            <div className="row">
                <button className="btn btn-primary" onClick={addSpot} style={({marginTop: "10px"})}>Add Spot</button>
            </div>
            <br></br>
            <div className="row">
                <table className="table table-striped table-bordered">
                    <thead>
                        <tr>
                            <th> Spot Id </th>
                            <th> Spot Address </th>
                            <th> Name </th>
                            <th> Type </th>
                            <th> Date </th>
                            <th> Actions </th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            spots.map(
                                spot =>
                                <tr key={spot.id}>
                                    <td> {spot.id} </td>
                                    <td> {spot.formattedAddress} </td>
                                    <td> {spot.name}</td>
                                    <td> {spot.type} </td>
                                    <td> {spot.date} </td>
                                    <td>
                                        <button style={{marginLeft: "10px", marginTop: "5px"}} onClick={ () => editSpot(spot.id)} className="btn btn-info">Update</button>
                                        <button style={{marginLeft: "10px", marginTop: "5px"}} onClick={ () => deleteSpot(spot.id)} className="btn btn-danger">Delete</button>
                                        <button style={{marginLeft: "10px", marginTop: "5px"}} onClick={ () => viewSpot(spot.id)} className="btn btn-info">View</button>
                                    </td>
                                </tr>
                            )
                        }
                    </tbody>
                </table>
            </div>
        </div>
    )
};

export default ListSpotComponent;