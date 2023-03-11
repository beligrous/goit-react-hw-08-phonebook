import Notiflix from 'notiflix';
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { deleteContact } from '../../redux/operations';
import {
  getContacts,
  getFilter,
  getError,
  getLoading,
} from '../../redux/selectors';
import { List, Delete, ListItem } from './contact-list.styled';

function ContactList() {
  const dispatch = useDispatch();
  const contacts = useSelector(getContacts);
  const filter = useSelector(getFilter);
  const error = useSelector(getError);
  const isLoading = useSelector(getLoading);
  let initContacts = contacts ? contacts : [];
  Notiflix.Notify.init({});

  const onClickDelete = item => {
    dispatch(deleteContact(item.id));
    Notiflix.Notify.success(`The contact ${item.name} was deleted !`);
  };

  const findContacts = () => {
    let filtered;
    if (filter === '') {
      return initContacts;
    } else {
      filtered = initContacts.filter(item =>
        item.name.toLowerCase().includes(filter.toLowerCase())
      );
    }
    return filtered;
  };

  return (
    <>
      {isLoading && <p>Please wait...</p>}
      {error ? (
        <p>Sorry...{error}</p>
      ) : (
        <List>
          {findContacts().map(item => {
            return (
              <ListItem key={item.id}>
                <span>
                  {item.name}:{item.number}
                </span>

                <Delete onClick={() => onClickDelete(item)} type="button">
                  Delete
                </Delete>
              </ListItem>
            );
          })}
        </List>
      )}
    </>
  );
}

export default ContactList;
