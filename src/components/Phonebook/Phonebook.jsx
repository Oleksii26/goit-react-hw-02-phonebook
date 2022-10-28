import React from "react";
import css from './PhoneBook.module.css'
import shortid from "shortid";

class PhoneBook extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            contacts: [],
            name: '',
            number: '',
        }
    }
    nameInputId = shortid.generate()
    numberInputId = shortid.generate()
    
    handleChangeForm = ({ target }) => {
        const { name, value } = target
        this.setState({ [name]: value })
    }

    handleFormSubmit = (e) => {
        e.preventDefault()
        const { name, number } = this.state
        const { onAdd } = this.props
        const isValidaterForm = this.validateForm()

        if (!isValidaterForm) return
        onAdd({ id: shortid.generate(), name, number })
        this.resetForm()
    }

    validateForm = () => {
        const { name, number } = this.state
        const { onCheckUnique } = this.props
        if (!name || !number) {
            alert('Enter you date')
            return false
        }
        return onCheckUnique(name)

    }
    resetForm = () => {
        this.setState({
            name: '',
            number: ''
        })
    }
    render() {
        const { name, number } = this.state
        return <form className={css.form} onSubmit={this.handleFormSubmit}>
            <label className={css.label} htmlFor={this.nameInputId}>
                Name
                <input id={this.nameInputId} type="text" name='name' value={name} onChange={this.handleChangeForm} /></label>
            <label className={css.label} htmlFor={this.numberInputId}>
                Number
                <input id={this.numberInputId} type="tel" name='number' value={number} onChange={this.handleChangeForm} /></label>
            <button className={css.btn} type="submit">Add contact</button>
        </form>
    }

}
export default PhoneBook