import React from "react";

import css from './PhoneBook.module.css'

class PhoneBook extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            contacts: [],
            name: '',
            number: '',
        }
    }
    handleChange = e => {
        this.setState({ [e.currentTarget.name]: e.currentTarget.value })
    }
    handleSubmit = e => {
        e.preventDefault()

        console.log(this.state)
        this.reset()
    }
    reset = () => {
        this.setState({
            name: '',
            number: '',
        })
    }
    addContact = (item) => {
        this.setState(({ contacts }) => ({ contacts: [...contacts, item], }))
    }

    renderList = (id, name, number, onRemove) => {
        this.setState.contacts.map((nam) )
        return <li>
            {name}: {number} <button onClick={() => onRemove(id)}>delete</button>
        </li>
    }

    render() {

        return <>
            <form className={css.form} onSubmit={this.handleSubmit}>
                <label className={css.title}>Name
                    <input name="name" className={css.input} onChange={this.handleChange} value={this.state.name} />
                </label>
                <label className={css.title}>Number
                    <input
                        className={css.input}
                        type="tel"
                        name="number"
                        onChange={this.handleChange}
                        value={this.state.number}
                        // pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
                        title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
                        required />
                </label>
                <button type="submit" className={css.btn} >Add contact</button>
            </form>
            <h2 className={css.title}>Contacts</h2>
            <ul className={css.list}>
                {'renderList'}
            </ul>
        </>
    }

}
export default PhoneBook