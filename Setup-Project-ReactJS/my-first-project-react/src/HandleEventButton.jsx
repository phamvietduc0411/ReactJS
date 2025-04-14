import React from 'react'
class HandleEvent extends React.Component {
  //   inClick = (value) => {
  //     console.log('click Button ' + value)
  //   }

  //   render() {
  //     return (
  //       <div>
  //         <button onClick={() => this.inClick('add')}>Add</button>
  //         <button onClick={() => this.inClick('edit')}>Edit</button>
  //         <button onClick={() => this.inClick('delete')}>Delete</button>
  //       </div>
  //     )
  //   }
  // }
  //=======================================================================
  // //Currying

  // //cách rút gọn
  // inClick = (value) => () => {
  //   console.log('click Button ' + value)
  // }

  // //cách đầy đủ
  // // inClick = (value) => {
  // //   console.log(value)

  // //   return () => {
  // //     console.log('click Button ' + value)
  // //   }
  // // }

  // render() {
  //   return (
  //     <div>
  //       <button onClick={this.inClick('add')}>Add</button>
  //       <button onClick={this.inClick('edit')}>Edit</button>
  //       <button onClick={this.inClick('delete')}>Delete</button>
  //     </div>
  //   )
  // }
  //================================================ Binding=====================
  /**
   *
   */
  constructor(props) {
    super(props)
    this.inClick = this.inClick.bind(this)
  }
  inClick = (value) => {
    console.log('click Button ' + value)
  }

  render() {
    return (
      <div>
        {/* Truyền tham số vào hàm thông qua bind */}
        <button onClick={this.inClick.bind(this, 'add')}>Add</button>
        <button onClick={this.inClick.bind(this, 'edit')}>Edit</button>
        <button onClick={this.inClick.bind(this, 'delete')}>Delete</button>
      </div>
    )
  }
}

export default HandleEvent
