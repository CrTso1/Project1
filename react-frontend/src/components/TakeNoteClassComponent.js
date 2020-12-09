import React, { Component } from 'react'
import ListClassService from '../services/ListClassService'

export default class TakeNoteClassComponent extends Component {
constructor(props) {
    super(props)

    this.state = {
         id : this.props.match.params.id,
         newNote : "",
         ten : '',
            tuan : '',
            ky : '',
            thu : '',
            thoiGian : '',
            phong: '',
            lichThi: ''
    }
}
    
editNote = () => {
    console.log("aaaaaaaaaaaaaaaa")
}

updateGhiChu = () => {
    let result = prompt("Nhập ghi chú")
    // let result = prompt({
    //     title : "Sửa ghi chú",
    //     value : this.state.newNote,
    //     placeholder : "Ghi chú"
    // })
    this.setState({
        newNote : result
    })
}

updateClass = () => {
    
    let newClass = {
        ten : this.state.ten,
        tuan : this.state.tuan,
        ky : this.state.ky,
        thu : this.state.thu,
        thoiGian : this.state.thoiGian,
        phong : this.state.phong,
        lichThi : this.state.lichThi,
        newNote : this.state.newNote
    }
    console.log('clazz =>' + JSON.stringify(newClass));

    ListClassService.updateClass(newClass, this.state.id)
    
    
}

componentDidMount(){
    console.log(this.props)
    console.log(this.state.id);
    ListClassService.getClassByID(this.state.id)
    .then((respon) => {
        let clazz = respon.data;
        this.setState({
            newNote : clazz.newNote,
            ten : clazz.ten,
            tuan : clazz.tuan,
            ky : clazz.ky,
            thu : clazz.thu,
            thoiGian : clazz.thoiGian,
            phong : clazz.phong,
            lichThi : clazz.lichThi
        }
        )
        console.log('clazz =>' + JSON.stringify(clazz));
    })

    
}

    render() {
        return (
            <div style = {{marginTop : "100px"}}>
                <div className = "card col-md-6 offset-md-3 offset-md-3">
                            <h3 className="text-center" style = { {textAlign: "center"}}>Ghi chú</h3>
                            <div className ="card-body">
                                
                                    <div className = "row">
                                        <label>Tên lớp:  </label>
                                        <div>{this.state.ten}</div>
                                        </div>
                                        <div className = "row">
                                        <label>Tuần:  </label>
                                        <div>{this.state.tuan}</div>
                                        </div>
                                        <div className = "row">
                                        <label>Kỳ:  </label>
                                        <div>{this.state.ky}</div>
                                        </div>
                                        <div className = "row">
                                        <label>Thứ:  </label>
                                        <div>{this.state.thu}</div>
                                        </div>
                                        <div className = "row">
                                        <label>Thời gian:  </label>
                                        <div>{this.state.thoiGian}</div>
                                        </div>
                                        <div className = "row">
                                        <label>Phòng:  </label>
                                        <div>{this.state.phong}</div>
                                        </div>
                                        <div className = "row">
                                        <label>Lịch thi:  </label>
                                        <div>{this.state.lichThi}</div>
                                        </div>
                                        <div className = "row">
                                        <label>Ghi chú:  </label>
                                        <div>{this.state.newNote}</div>
                                        </div>
                                        <div className = "row">
                                        <button className = "btn btn-success" onClick = {this.updateGhiChu}>Sửa ghi chú</button>
                                        <button className = "btn btn-success" onClick = {this.updateClass}
                                                style = {{marginLeft : "10px"}}>Lưu</button>
                                    </div>
            </div>
            </div>
            </div>
        )
    }
}
