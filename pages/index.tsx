
import React from 'react'
import { inject, observer } from 'mobx-react'

@inject('store')
@observer
class HomePage extends React.Component {
  render() {
    return <div className="container">
      <div className="row">
        <div className="col-4 mx-auto text-primary">
          Hello, Index Page!
        </div>
      </div>
    </div>
  }
}

export default HomePage