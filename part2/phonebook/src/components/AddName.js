import React from 'react'

const AddName = ({ handleSubmit, name, number}) => {

    return (
        <form onSubmit={handleSubmit}>
            <div>
                name: <input value={name.value} onChange={name.handleChange} />
            </div>
            <div>
                number: <input value={number.value} onChange={number.handleChange} />
            </div>
            <div>
                <button type="submit">add</button>
            </div>
        </form>
    )
}

export default AddName