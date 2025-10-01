import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { fetchContacts } from './redux/contactsOps';
import ContactsForm from './components/ContactsForm/ContactsForm';
import SearchBox from './components/SearchBox/SearchBox';
import ContactList from './components/ContactList/ContactList';
import './App.css';

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <div style={{ padding: '20px' }}>
      <h1 className="communication-title">Communication Book</h1>
      <ContactsForm />
      <SearchBox />
      <h2>Directory</h2>
      <ContactList />
    </div>
  );
}

export default App;