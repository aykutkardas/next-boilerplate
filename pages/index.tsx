
import React from 'react'
import { inject, observer } from 'mobx-react'

@inject('store')
@observer
class HomePage extends React.Component {
  render(){
  return <div className="text-danger">Welcome to Next.js!</div>
  }
}

export default HomePage