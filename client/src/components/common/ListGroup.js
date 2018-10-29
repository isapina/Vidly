import React from 'react';

const ListGroup = ({
  items,
  selectedItem,
  textProperty,
  valueProperty,
  onItemSelect
}) => {
  const displayItems = items.map(item => (
    <li
      key={item[valueProperty]}
      className={
        item === selectedItem ? "list-group-item active" : "list-group-item"
      }
      onClick={() => onItemSelect(item)}
    >
      {item[textProperty]}
    </li>)
  )
  return (
    <ul className="list-group">
      {displayItems}
    </ul>
  );
};

ListGroup.defaultProps = {
  textProperty: "name",
  valueProperty: "_id"
};

export default ListGroup;