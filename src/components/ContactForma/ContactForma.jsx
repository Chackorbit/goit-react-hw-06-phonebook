import React from 'react';
import { useState } from 'react';
import s from './ContactForma.module.css';

const ContactForma = ({ submitBtn }) => {
  const [name, setUserName] = useState('');
  const [number, setNumber] = useState('');

  const addName = e => {
    const { name, value } = e.currentTarget;
    if (name === 'name') {
      setUserName(value);
    } else if (name === 'number') {
      setNumber(value);
    }
  };

  const onSubmit = e => {
    e.preventDefault();

    submitBtn(name, number);

    setUserName('');
    setNumber('');
  };

  return (
    <div className={s.container}>
      <form onSubmit={onSubmit} className={s.form}>
        <label className={s.label}>Name</label>
        <input
          className={s.inputName}
          onChange={addName}
          value={name}
          type="text"
          name="name"
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          required
        />
        <label className={s.label}>Number</label>
        <input
          className={s.inputName}
          onChange={addName}
          value={number}
          type="tel"
          name="number"
          pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
          title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
          required
        />
        <button className={s.formBtn} type="submit" onClick={onSubmit}>
          Add name
        </button>
      </form>
    </div>
  );
};

export default ContactForma;

// export default class ContactForma extends React.Component {
//   state = { name: '', number: '' };

//   addName = e => {
//     const { name, value } = e.currentTarget;
//     this.setState({
//       [name]: value,
//     });
//   };

//   reset = () => {
//     this.setState({ name: '', number: '' });
//   };

//   onSubmit = e => {
//     e.preventDefault();

//     this.props.submitBtn(this.state);
//     this.reset();
//   };

//   render() {
//     return (
//       <div className={s.container}>
//         <form onSubmit={this.onSubmit} className={s.form}>
//           <label className={s.label}>Name</label>
//           <input
//             className={s.inputName}
//             onChange={this.addName}
//             value={this.state.name}
//             type="text"
//             name="name"
//             pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
//             title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
//             required
//           />
//           <label className={s.label}>Number</label>
//           <input
//             className={s.inputName}
//             onChange={this.addName}
//             value={this.state.number}
//             type="tel"
//             name="number"
//             pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
//             title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
//             required
//           />
//           <button className={s.formBtn} type="submit">
//             Add name
//           </button>
//         </form>
//       </div>
//     );
//   }
// }
