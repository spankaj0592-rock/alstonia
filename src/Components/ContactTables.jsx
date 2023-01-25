import React, { useEffect,useState } from 'react';

import axios from "axios";

import DataTable from 'react-data-table-component'
const ContactTables = () => {

    const[contact,setContact] =useState([]);
    const getContact =async()=>{
      try {
        
        const response=await axios.get('https://63c57732f80fabd877e93ed1.mockapi.io/api/v1/users');
        setContact(response.data);
      } catch (error) {
        console.log(error);
      }
    };
    
    const columns =[
    
    {
        name:"user" ,
    //   selector:(row)=>row.user,
      selector:(row)=><img width={50} height={50} src={row.avatar}/>
    },
    {
      name:"email",
      selector:(row)=>row.email,
    }
    ]; 
    
    useEffect(()=>{
    getContact();
    },[]);



  return (
    <DataTable 
    columns={columns} 
    data={contact}
     pagination
     fixedHeader
     fixedHeaderScrollHeight='450px'
     selectableRows
     selectableRowsHighlight   
     highlightOnHover

    />
  )
}

export default ContactTables