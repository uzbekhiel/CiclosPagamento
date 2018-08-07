import React, {Component} from 'react'
import {bindActionCreators} from 'redux'
import {connect} from 'react-redux'
import {getList} from './billingCycleActions'

class BillingCycleList extends Component{
    
    componentWillMount(){
        this.props.getList()
    }

    renderRows(){
        const list = this.props.list || []
        const arr = []
        for (var index = 0; index < list.length; index++) {
            arr.push((
                <tr key={list[index]._id}>
                    <td>{list[index].name}</td>
                    <td>{list[index].month}</td>
                    <td>{list[index].year}</td>
                </tr>
            ))
        }
        return arr.map(c=> c)
    }

    render(){
        return(
            <div>
                <table className='table'>
                    <thead>
                        <th>Nome</th>
                        <th>Mês</th>
                        <th>Ano</th>
                    </thead>
                    <tbody>
                        {this.renderRows()}
                    </tbody>
                </table>
            </div>
        )
    }
}

const mapToStateToProps = state => ({list: state.billingCycle.list})
const mapDispatchToProps = dispatch => bindActionCreators({getList},dispatch)
export default connect(mapToStateToProps,mapDispatchToProps)(BillingCycleList)