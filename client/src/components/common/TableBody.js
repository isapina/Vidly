import _ from 'lodash';
import React, { Component } from 'react';

class TableBody extends Component {
  renderCell = (item, column) => {
    if (column.content) return column.content(item);

    return _.get(item, column.path);
  }

  createKey = (item, column) => {
    return item._id + (column.path || column.key);
  }

  render() {
    const { data, columns } = this.props;

    return (
      <tbody>
        {
          _.map(data, item => (
            <tr key={item._id}>
              {_.map(columns, column => (
                <td key={this.createKey(item, column)}>{this.renderCell(item, column)}</td>
              ))}
            </tr>
          ))
        }
      </tbody>
    );
  };
};

export default TableBody;