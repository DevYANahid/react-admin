import React from 'react'

const BreadCrumb = (props) => {
  return (
    <>
       
      <ol className="breadcrumb my-4">
        <li className="breadcrumb-item">Dashboard</li>
        <li className="breadcrumb-item active text-primary">{props.title}</li>
      </ol>
    </>
  )
}

export default BreadCrumb