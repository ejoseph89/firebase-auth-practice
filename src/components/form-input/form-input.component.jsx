import React, { Fragment } from "react"

const FormInput = ({ label, ...otherProps }) => {
  return (
    <Fragment>
      {
        label &&
        <label htmlFor="">{label}</label>
      }
      <input {...otherProps} />
    </Fragment>
  )
}
export default FormInput