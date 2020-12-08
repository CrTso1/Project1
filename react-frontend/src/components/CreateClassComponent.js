import React, { Component } from 'react';
import ListClassService from '../services/ListClassService';
import Select from 'react-select'

// const semesterOptions = [
//     { value: '20201', label: '20201' },
//     { value: '20193', label: '20193' },
//     { value: '20192', label: '20192' }
// ]

class CreateClassComponent extends Component {
    constructor(props){
        super(props)

        this.state = {
            ten : '',
            khoa : '',
            ky : '',
            thu : '',
            thoiGian : '',
            phong: ''

        }
    }


    changeNameHandler = (event) => {
        this.setState({
            ten : event.target.value
        })
    }
    
    changeDepartmentHandler = (event) => {
        this.setState({
            khoa : event.target.value
        })
    }

    changeSemesterHandler = (event) => {
        this.setState({
            ky : event.target.value
        })
    }

    changeDateHandler = (event) => {
        let date = parseInt(event.target.value)
        if(isNaN(date)) {
            this.setState({
                thu: ''
            })
        }
        else{
            if (date < 1) {
                date = 1;
            }

            if(date){
              this.setState({
                  thu : date
              })
            }
        }
    }

    changeTimeHandler = (event) => {
        this.setState({
            thoiGian : event.target.value
        })
    }

    changeRoomHandler = (event) => {
        this.setState({
            phong : event.target.value
        })
    }

    saveClass = (event) => {
        event.preventDefault();

        let clazz = {
            ten : this.state.ten,
            khoa : this.state.khoa,
            ky : this.state.ky,
            thu : this.state.thu,
            thoiGian : this.state.thoiGian,
            phong : this.state.phong
        }
        console.log('clazz =>' + JSON.stringify(clazz));

        ListClassService.createClass(clazz)
        .then(respon => {
            this.props.history.push('/')
        })


    }

    cancel(){
        this.props.history.push('/')
    }

    render() {
        return (
            <div>
                <div className ="container">
                    <div className = "row">
                        <div className = "card col-md-6 offset-md-3 offset-md-3">
                            <h3 className="text-center" style = { {textAlign: "center"}}>Thêm lớp</h3>
                            <div className ="card-body">
                                <form>
                                    <div className = "form-group">
                                        <label>Tên lớp:</label>
                                        <input placeholder="Tên lớp" name = "ten" className = "form-control"
                                            value = {this.state.ten} onChange = {this.changeNameHandler}></input>
                                    </div>
                                    <div className = "form-group">
                                        <label>Khoa:</label>
                                        <input placeholder="Khoa" name = "khoa" className = "form-control"
                                            value = {this.state.khoa} onChange = {this.changeDepartmentHandler}></input>
                                    </div>
                                    <div className = "form-group">
                                        <label>Kỳ:</label>
                                        {/* <input placeholder="Kỳ" name = "ky" className = "form-control"
                                            value = {this.state.ky} onChange = {this.changeSemesterHandler}></input> */}
                                        {/* <Select options = {semesterOptions} onChange = {this.changeSemesterHandler}/> */}
                                        <select value={this.state.ky} onChange={this.changeSemesterHandler} className = "form-control">
                                            <option value="20202">20202</option>
                                            <option value="20201">20201</option>
                                            <option value="20193">20193</option>
                                            <option value="20192">20192</option>
                                        </select>
                                    </div>
                                    <div className = "form-group">
                                        <label>Thứ:</label>
                                        {/* <input placeholder="Thứ" name = "thu" className = "form-control"
                                            value = {this.state.thu} onChange = {this.changeDateHandler}></input> */}
                                        <select value={this.state.thu} onChange={this.changeDateHandler} className = "form-control">
                                            <option value = "2" >Thứ 2</option>
                                            <option value="3">Thứ 3</option>
                                            <option value="4">Thứ 4</option>
                                            <option value="5">Thứ 5</option>
                                            <option value="6">Thứ 6</option>
                                            <option value="7">Thứ 7</option>
                                        </select>                                           
                                    </div>
                                    <div className = "form-group">
                                        <label>Thời gian:</label>
                                        <input placeholder="Thời gian" name = "thoiGian" className = "form-control"
                                            value = {this.state.thoiGian} onChange = {this.changeTimeHandler}></input>
                                    </div>
                                    <div className = "form-group">
                                        <label>Phòng:</label>
                                        <input placeholder="Phòng" name = "phong" className = "form-control"
                                            value = {this.state.phong} onChange = {this.changeRoomHandler}></input>
                                    </div>

                                    <button className = "btn btn-success" onClick = {this.saveClass}>Lưu</button>
                                    <button className = "btn btn-danger" onClick = {this.cancel.bind(this)} style ={{marginLeft: "10px"}}>Hủy</button>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default CreateClassComponent;