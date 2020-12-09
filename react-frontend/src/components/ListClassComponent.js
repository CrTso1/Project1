import React, { Component } from 'react';
import ListClassService from '../services/ListClassService';
import {Card, Table, Image, ButtonGroup, Button, InputGroup, FormControl} from 'react-bootstrap';

class ListClassComponent extends Component {
    
    constructor(props) {
        super(props);

        this.state ={
            search : '',
            classList : []
        }
    }

    addClass = () => {
        this.props.history.push('/add-class')
    }
    
    editClass = (id) => {
        this.props.history.push(`/update-class/${id}`)
    }

    deleteClass = (id) => {
        ListClassService.deleteClass(id)
        .then( (res) => {
            //xoa xong thi update lai list class
            this.setState({
                classList: this.state.classList.filter( clazz => clazz.maLop !== id)
            })
        })
    }

    changeSearchHandler = (event) => {
        this.setState({
            search : event.target.value
        })
        console.log(this.state.search)
    }

    searchByName = () => {
        this.setState({
            classList: this.state.classList.filter( clazz => clazz.ten === this.state.search)
        })
    }

    cancelSearch = () => {
        ListClassService.getClasses()
        .then( (respon) => {
            this.setState({ classList : respon.data})
              
        } )
    }

    componentDidMount(){
        //promise
        ListClassService.getClasses()
        .then( (respon) => {
            this.setState({ classList : respon.data})
              
        } )
    }
    
    render() {
        return (
            <div>
                <h2 className = 'text-center' style ={{marginTop : "100px"}}>Thời khóa biểu</h2>
                <div className = 'row'>
                    <button className ="btn btn-primary" style = {{float : "left"}} onClick = {this.addClass}>Thêm lớp</button>
                </div>
                <div className = 'row' style = {{marginTop : "10px"}}>
                    <input placeholder="Tìm kiếm" name = "search" className = "form-control"
                        value = {this.state.search}
                        style = {{float: "left"}, {width : "20%"}}
                         onChange = {this.changeSearchHandler}>

                    </input>
                    <button className = "btn btn-success" onClick = {this.searchByName}>Tìm</button>
                     <button className = "btn btn-danger" onClick = {this.cancelSearch}>Hủy</button>
                </div>
                <div className = 'row'>
                    <table className = "table table-striped table-bordered">
                        <thead>
                            <tr>
                                <th>Mã lớp</th>
                                <th>Tên lớp</th>
                                <th>Tuần</th>
                                <th>Kỳ</th>
                                <th>Thứ</th>
                                <th>Thời gian</th>
                                <th>Phòng</th>
                                <th>Lịch thi</th>
                                <th>Lựa chọn</th>
                            </tr>
                        </thead>

                        <tbody>
                            {
                                this.state.classList.map(
                                    clazz =>
                                    <tr key={clazz.maLop}>
                                        <td> {clazz.maLop} </td>
                                        <td> {clazz.ten} </td>
                                        <td> {clazz.tuan} </td>
                                        <td> {clazz.ky} </td>
                                        <td> {clazz.thu} </td>
                                        <td> {clazz.thoiGian} </td>
                                        <td> {clazz.phong} </td>
                                        <td> {clazz.lichThi} </td>
                                        <td>
                                            <button onClick = {() => this.editClass(clazz.maLop)} className="btn btn-info">Sửa</button>
                                            <button style ={{marginLeft: "10px"}} onClick = {() => this.deleteClass(clazz.maLop)} className="btn btn-danger">Xóa</button>
                                        </td>
                                    </tr>
                                )
                            }
                        </tbody>

                    </table>
                </div>
            </div>
        );
    }
}

export default ListClassComponent;