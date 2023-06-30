import React, {useEffect, useState} from 'react';
import SpotService from '../services/SpotService';
import { useParams, useNavigate } from 'react-router-dom';

const ViewSpotComponent = () => {
    const { id } = useParams();
    const navigate = useNavigate();
    const [spot, setSpot] = useState({});



    useEffect(() => {
        let idLong = parseInt(id);

        console.log(id);
        console.log(idLong);

        SpotService.getSpotById(idLong).then( (res) => {
            setSpot(res.data);
        })
    }, [id]); //will rerun if id changes

    return(
        <div>
            <br></br>
            <div className = "card col-md-6 offset-md-3">
                <h3 className = "text-center"> View Spot Details</h3>
                <div className = "card-body">
                    <div className = "row">
                        <label> Spot Name: </label>
                        <div> {spot.name} </div>
                    </div>
                    <div className = "row">
                        <label> Spot Location: </label>
                        <div> {spot.name} </div>
                    </div>
                    <div className = "row">
                        <label> Spot Name: </label>
                        <div> {spot.name} </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ViewSpotComponent;