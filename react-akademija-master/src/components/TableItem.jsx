import React, { Component } from 'react'

export const TableItem = (props) =>{

    return(
                <tr>
                    <th>{props.id}</th>
                    <th>{props.basic_information.artists.map((name)=> name).join(", ")}</th>
                    <th>{props.basic_information.title}</th>
                    {props.basic_information.year?<th>{props.basic_information.year}</th>:
                   <th>N/A</th> } 
                    <th>{props.basic_information.genres}</th>
                    <th>{props.basic_information.styles.join(", ")}</th> 
                </tr>
    );
};
