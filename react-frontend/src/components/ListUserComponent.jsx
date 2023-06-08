import React, { Component } from 'react'
import SpotService from '../services/SpotService'

class ListSpotComponent extends Component {
    constructor(props){
        super(props)

        this.state = {
            spots: []
        }

        this.addSpot = this.addSpot.bind(this);
        this.editSpot = this.editSpot.bind(this);
        this.deleteSpot = this.deleteSpot.bind(this);
    }

    deleteSpot(id){
        SpotService.deleteSpot(id).then( res => {
            this.setState({spots: this.state.spots.filter(spot => spot.id !== id)});
        });
    }

    viewSpot(id){
        this.props.history.push(`/view-spot/${id}`);
    }

    editSpot(id){
        this.props.history.push(`/add-spot/${id}`);
    }

    addSpot(){
        this.props.history.push('/add-spot/_add');
    }

    componentDidMount(){
        SpotService.getSpots().then((res) =>{
            this.setState({spots: res.data});
        });
    }

    render() {
        //here i am not sure if the cell data is correct
            //not sur eif formattedAddress is correct
        return (
            <div>
                <div className="row">
                    <button className="btn btn-primary" onClick={this.addSpot}>Add Spot</button>
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
                                this.state.spots.map(
                                    spot =>
                                    <tr key={spot.id}>
                                        <td> {spot.id} </td>
                                        <td> {spot.formattedAddress} </td>
                                        <td> {spot.name}</td>
                                        <td> {spot.type} </td>
                                        <td> {spot.date} </td>
                                        <td>
                                            <button onClick={ () => this.editSpot(spot.id)} className="btn btn-info">Update</button>
                                            <button style={{marginLeft: "10px"}} onClick={ () => this.deleteSpot(spot.id)} className="btn btn-danger">Delete</button>
                                            <button style={{marginLeft: "10px"}} onClick={ () => this.viewSpot(spot.id)} className="btn btn-info">View</button>
                                        </td>
                                    </tr>
                                )
                            }
                        </tbody>
                    </table>
                </div>
            </div>

        )
    }
}

export default ListSpotComponent;