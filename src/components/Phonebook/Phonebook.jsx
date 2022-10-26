import React from "react";
import css from './PhoneBook.module.css'

class PhoneBook extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            contacts: [],
            name: '',
            number: ''
        }
    }
    renderList = () => {
        return this.state.contacts.map((nam, index) => <li className={css.item} key={nam + index}>{nam}</li>)
    }
    handleInput = e => {
        this.setState({ [e.target.name]: [e.target.value] })
        // this.setState({ name: e.target.value })        
    }
    addItem = i => {
        this.setState({ contacts: [...this.state.contacts, i] })
    }
    render() {
        return <>
            <div className={css.section}>
                <h2 className={css.title}>Name</h2>
                <input name="name" className={css.input} onChange={this.handleInput} value={this.state.name} />
                <h2 className={css.title}>Number</h2>
                <input
                    className={css.input}
                    type="tel"
                    name="number"
                    pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
                    title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
                    required
                    onChange={this.handleInput}
                />
                <button className={css.btn} onClick={() => this.addItem(this.state.name)}>Add contact</button>
                <h2 className={css.title}>Contacts</h2>
            </div>

            <ul className={css.list}>
                {this.renderList()}
            </ul>
        </>
    }
}
export default PhoneBook