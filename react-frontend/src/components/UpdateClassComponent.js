import React, { Component } from 'react';
import ListClassService from '../services/ListClassService';

class UpdateClassComponent extends Component {
    constructor(props){
        super(props)

        this.state = {
            id: this.props.match.params.id,
            ten : '',
            tuan : '',
            ky : '',
            thu : '',
            thoiGian : '',
            phong: '',
            lichThi: ''

        }
    }

    changeNameHandler = (event) => {
        this.setState({
            ten : event.target.value
        })
    }
    
    changeWeekHandler = (event) => {
        this.setState({
            tuan : event.target.value
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

    changeExamDateHandler = (event) => {
        this.setState({
            lichThi : event.target.value
        })
    }

    updateClass = (event) => {
        event.preventDefault();

        let newClass = {
            ten : this.state.ten,
            tuan : this.state.tuan,
            ky : this.state.ky,
            thu : this.state.thu,
            thoiGian : this.state.thoiGian,
            phong : this.state.phong,
            lichThi : this.state.lichThi
        }
        console.log('clazz =>' + JSON.stringify(newClass));

        ListClassService.updateClass(newClass, this.state.id)
        .then( res => {
            this.props.history.push('/')
        })


    }

    cancel(){
        this.props.history.push('/')
    }

    componentDidMount(){
        console.log(this.props)
        console.log(this.state.id);
        ListClassService.getClassByID(this.state.id)
        .then((respon) => {
            let clazz = respon.data;
            this.setState({
                ten : clazz.ten,
                tuan : clazz.tuan,
                ky : clazz.ky,
                thu : clazz.thu,
                thoiGian : clazz.thoiGian,
                phong : clazz.phong
            }
            )
            console.log('clazz =>' + JSON.stringify(clazz));
        })

        
    }

    render() {
        return (
            <div style = {{marginTop : "100px"}}>
                <div className ="container">
                    <div className = "row">
                        <div className = "card col-md-6 offset-md-3 offset-md-3">
                            <h3 className="text-center" style = { {textAlign: "center"}}>Sửa lớp</h3>
                            <div className ="card-body">
                                <form>
                                    <div className = "form-group">
                                        <label>Tên lớp:</label>
                                        <input placeholder="Tên lớp" name = "ten" className = "form-control"
                                            value = {this.state.ten} onChange = {this.changeNameHandler}></input>
                                    </div>
                                    <div className = "form-group">
                                        <label>tuan:</label>
                                        <input placeholder="Tuần" name = "tuan" className = "form-control"
                                            value = {this.state.tuan} onChange = {this.changeWeekHandler}></input>
                                    </div>
                                    <div className = "form-group">
                                        <label>Kỳ:</label>
                                        {/* <input placeholder="Kỳ" name = "ky" className = "form-control"
                                            value = {this.state.ky} onChange = {this.changeSemesterHandler}></input> */}
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
                                    <div className = "form-group">
                                        <label>Lịch thi:</label>
                                        <input placeholder="Lịch thi" name = "lichThi" className = "form-control"
                                            value = {this.state.lichThi} onChange = {this.changeExamDateHandler}></input>
                                    </div>

                                    <button className = "btn btn-success" onClick = {this.updateClass}>Lưu</button>
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

export default UpdateClassComponent;