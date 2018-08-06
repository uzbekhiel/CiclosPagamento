import React from 'react'

export default props => (
    <li>
        <a href={props.path}>
            <i className={'fa fa-'+props.icon}></i>&nbsp;<span>{props.label}</span>
        </a>
    </li>
)