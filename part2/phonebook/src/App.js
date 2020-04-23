import React, { useState } from 'react'
import Filter from './components/Filter'
import Numbers from './components/Numbers'
import AddNameForm from './components/AddName'

const App = () => {

    const [ persons, setPersons ] = useState([
        { name: 'Arto Hellas', number: '040-123456' },
        { name: 'Ada Lovelace', number: '39-44-5323523' },
        { name: 'Dan Abramov', number: '12-43-234345' },
        { name: 'Mary Poppendieck', number: '39-23-6423122' }
    ])
    const [ newName, setNewName ] = useState('')
    const [ newNumber, setNewNumber ] = useState('')
    const [ filter, setFilter ] = useState('')

    const handleNameChange = (event) => {
        setNewName(event.target.value)
    }

    const handleNumberChange = (event) => {
        setNewNumber(event.target.value)
    }

    const handleFilterChange = (event) => {
        const tFilter = event.target.value
        setFilter(tFilter)
        const result = persons.filter((person) => person.name.toLowerCase().includes(tFilter))
        setPersons(result)
    }

    const addName = (event) => {
        event.preventDefault()
        const check = persons.find((person) => {
            return newName === person.name
        })
        if (check) {
            alert(`${newName} is already added to phonebook`)
            return
        }

        const person = {
            name: newName,
            number: newNumber
        }

        setPersons(persons.concat(person))
        setNewName('')
        setNewNumber('')
    }

    return (
        <div>
            <h2>Phonebook</h2>
            <Filter value={filter} handleChange={handleFilterChange} />
            <h2>add a new</h2>
            <AddNameForm 
                handleSubmit={addName} 
                name={{
                    value: newName,
                    handleChange: handleNameChange
                }}
                number={{
                    value: newNumber,
                    handleChange: handleNumberChange
                }} />
            <h2>Numbers</h2>
            <Numbers persons={persons} />
        </div>
    )
}

export default App